export type CatalogItem = {
  CodeName: string;
  DisplayName?: string;
  [key: string]: unknown;
};

export type Resources = {
  catalog: CatalogItem[];
  iconClassNames: string[];
  quantityClassNames: string[];
  iconModelUrl: string;
  quantityModelUrl: string;
};

const resourceCache = new Map<string, Promise<Resources>>();

function normalizeBase(base: string): string {
  if (!base) return '';
  return base.endsWith('/') ? base.slice(0, -1) : base;
}

export function getAssetBase(): string {
  return normalizeBase(import.meta.env.VITE_ASSET_BASE || '');
}

export function buildResourceUrls(version: string, assetBase = getAssetBase()) {
  const base = normalizeBase(assetBase);
  const withBase = (path: string) => (base ? `${base}${path}` : path);

  return {
    catalogUrl: withBase(`/foxhole/${version}/catalog.json`),
    iconClassNamesUrl: withBase(`/foxhole/${version}/classifier/class_names.json`),
    quantityClassNamesUrl: withBase('/includes/quantities/class_names.json'),
    iconModelUrl: withBase(`/foxhole/${version}/classifier/model.json`),
    quantityModelUrl: withBase('/includes/quantities/model.json'),
  };
}

export async function loadResources(version: string, assetBase = getAssetBase()): Promise<Resources> {
  const cacheKey = `${assetBase}|${version}`;
  if (resourceCache.has(cacheKey)) {
    return resourceCache.get(cacheKey)!;
  }

  const promise = (async () => {
    const urls = buildResourceUrls(version, assetBase);

    const [catalog, iconClassNames, quantityClassNames] = await Promise.all([
      fetch(urls.catalogUrl).then(r => r.json()),
      fetch(urls.iconClassNamesUrl).then(r => r.json()),
      fetch(urls.quantityClassNamesUrl).then(r => r.json()),
    ]);

    return {
      catalog,
      iconClassNames,
      quantityClassNames,
      iconModelUrl: urls.iconModelUrl,
      quantityModelUrl: urls.quantityModelUrl,
    } as Resources;
  })();

  resourceCache.set(cacheKey, promise);
  return promise;
}
