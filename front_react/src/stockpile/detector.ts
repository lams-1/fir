import Screenshot from './screenshot';
import { loadResources, type Resources } from './resources';

export type ItemResult = {
  CodeName: string;
  DisplayName: string;
  quantity: number;
  isCrated: boolean;
};

type DetectorOptions = {
  version: string;
  assetBase?: string;
};

export type Detector = {
  processFile: (file: File) => Promise<ItemResult[]>;
};

export function createDetector(options: DetectorOptions): Detector {
  let resourcesPromise: Promise<Resources> | null = null;

  const getResources = async () => {
    if (!resourcesPromise) {
      resourcesPromise = loadResources(options.version, options.assetBase);
    }
    return resourcesPromise;
  };

  return {
    async processFile(file: File): Promise<ItemResult[]> {
      const resources = await getResources();
      const image = await loadImage(file);

      const scalesToTry = [1.25, 1, 0.9, 0.75, 0.5, 0.4];
      let stockpile: any = null;
      let usedScale = 1;

      for (const scale of scalesToTry) {
        const canvas = createCanvasFromImage(image, scale);
        const result = (await Screenshot.process(
          canvas,
          resources.iconModelUrl,
          resources.iconClassNames,
          resources.quantityModelUrl,
          resources.quantityClassNames,
        )) as any;

        if (result) {
          stockpile = result;
          usedScale = scale;
          break;
        }
      }

      if (!stockpile) {
        console.warn('No stockpile detected. Scales tried:', scalesToTry.join(', '));
      } else if (usedScale !== 1) {
        console.info('Stockpile detected using scale', usedScale);
      }

      if (!stockpile || !stockpile.contents) {
        return [];
      }

      const catalogByCode = new Map(resources.catalog.map(item => [item.CodeName, item]));

      return (stockpile.contents as Array<{ CodeName: string; quantity: number; isCrated: boolean }>).map((element) => {
        const details = catalogByCode.get(element.CodeName);
        return {
          CodeName: element.CodeName,
          DisplayName: details?.DisplayName || element.CodeName,
          quantity: element.quantity,
          isCrated: element.isCrated,
        } as ItemResult;
      });
    },
  };
}

function createCanvasFromImage(image: HTMLImageElement, scale: number) {
  const canvas = document.createElement('canvas');
  const width = image.naturalWidth || image.width;
  const height = image.naturalHeight || image.height;

  canvas.width = Math.max(1, Math.round(width * scale));
  canvas.height = Math.max(1, Math.round(height * scale));

  const context = canvas.getContext('2d', { alpha: false, willReadFrequently: true });
  if (!context) {
    throw new Error('Unable to get 2D context.');
  }
  context.drawImage(image, 0, 0, canvas.width, canvas.height);
  return canvas;
}

async function loadImage(file: File): Promise<HTMLImageElement> {
  const objectUrl = URL.createObjectURL(file);
  try {
    const image = new Image();
    image.src = objectUrl;
    await image.decode();
    return image;
  } finally {
    URL.revokeObjectURL(objectUrl);
  }
}
