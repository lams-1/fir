// @ts-nocheck
import { createScheduler, createWorker } from 'tesseract.js';

class OCR {
  static CPU_COUNT = navigator.hardwareConcurrency || 1;
  static DEFAULT_CONCURRENCY = Math.max(Math.round(OCR.CPU_COUNT / 2) - 1, 1);
  static DEFAULT_STOP_DELAY = 2500;

  static CHARSETS = {
    any: '',
    quantity: '0123456789k+',
  };
  static DEFAULT_CHARSET = OCR.CHARSETS['quantity'];

  #concurrency;
  #stop_delay;
  #charset;

  constructor(options) {
    options ||= {};
    this.#concurrency = options.concurrency || OCR.DEFAULT_CONCURRENCY;
    this.#stop_delay = options.stop_delay || OCR.DEFAULT_STOP_DELAY;
    this.#charset = options.charset !== undefined ? options.charset : OCR.DEFAULT_CHARSET;
  }

  async recognize(canvas) {
    const result = await (await this.#getScheduler()).addJob('recognize', canvas);

    if (this.#scheduler.getQueueLen() == 0) {
      this.#scheduleStop();
    }

    return result;
  }

  #state = 'stopped'; // 'starting', 'started', 'stopping'
  #scheduler = undefined;
  #starting = undefined;
  async #getScheduler() {
    if (this.#state == 'stopping') {
      this.#cancelStop();
    } else if (this.#state == 'stopped') {
      await this.#start();
    } else if (this.#state == 'starting') {
      await this.#starting;
    }

    return this.#scheduler;
  }

  async #start() {
    this.#state = 'starting';
    console.log('Launching ' + this.#concurrency + ' Tesseract OCR workers.');

    this.#scheduler = createScheduler();

    const workers = [];
    const workerCharset = this.#charset;
    const baseUrl = new URL(import.meta?.env?.BASE_URL || '/', window.location.href);
    const workerPath = new URL('tesseract/worker.min.js', baseUrl).toString();
    const corePath = new URL('tesseract/tesseract-core-simd.wasm.js', baseUrl).toString();
    const langPath = new URL('tesseract/lang/', baseUrl).toString();

    for (let i = 0; i < this.#concurrency; ++i) {
      const worker = await createWorker('eng', undefined, {
        logger: undefined,
        errorHandler: e => console.error('[Tesseract worker error]', e),
        langPath,
        workerPath,
        corePath,
        cacheMethod: 'none',
        gzip: false,
        workerBlobURL: false,
      });

      workers.push(initWorker(this.#scheduler, worker));
    }

    await (this.#starting = Promise.all(workers));
    this.#state = 'started';

    async function initWorker(scheduler, worker) {
      try {
        await worker.setParameters({
          tessedit_char_whitelist: workerCharset,
          tessedit_pageseg_mode: 7, // Tesseract.PSM.SINGLE_LINE
          tessjs_create_hocr: 0,
          tessjs_create_tsv: 0,
        });

        scheduler.addWorker(worker);
      } catch (err) {
        console.error('[Tesseract] worker init failed', err);
        throw err;
      }
    }
  }

  #stopTimeout = undefined;
  #scheduleStop() {
    if (!((this.#state == 'started') || (this.#state == 'stopping'))) {
      console.error(`scheduleStop(): invalid state=${this.#state}`);
      return;
    }

    if (this.#stopTimeout) {
      this.#cancelStop();
    }
    this.#state = 'stopping';
    this.#stopTimeout = setTimeout(this.#stop.bind(this), this.#stop_delay);
  }

  #cancelStop() {
    if (this.#state != 'stopping') {
      console.error(`cancelStop(): invalid state=${this.#state}`);
      return;
    }

    clearTimeout(this.#stopTimeout);
    this.#stopTimeout = undefined;
    this.#state = 'started';
  }

  async #stop() {
    this.#stopTimeout = undefined;
    this.#state = 'stopped';
    console.log('Terminating Tesseract OCR workers.');
    await this.#scheduler.terminate();
  }
}

export default OCR;
