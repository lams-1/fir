export type AppConfig = {
  version: string;
};

export async function loadConfig(): Promise<AppConfig> {
  const baseUrl = import.meta.env.BASE_URL || '/';
  const response = await fetch(`${baseUrl}config.json`, { cache: 'no-store' });
  if (!response.ok) {
    throw new Error(`Failed to load config.json (status ${response.status})`);
  }
  return response.json();
}
