export type AppConfig = {
  version: string;
};

const DEFAULT_VERSION = 'airborne-63';

export async function loadConfig(): Promise<AppConfig> {
  return {
    version: import.meta.env.VITE_APP_FOXHOLE_VERSION || DEFAULT_VERSION,
  };
}
