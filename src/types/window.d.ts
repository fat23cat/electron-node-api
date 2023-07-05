export interface NodeAPI {
  checkConnection: (text?: string) => Promise<string>;
  platform: () => Promise<NodeJS.Platform>;
  version: () => Promise<string>;
}

declare global {
  interface Window {
    nodeAPI: NodeAPI;
  }
}
