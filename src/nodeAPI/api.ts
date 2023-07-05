export const checkConnection = async (text?: string) =>
  window.nodeAPI.checkConnection(text);
export const platform = async () => window.nodeAPI.platform();
export const version = async () => window.nodeAPI.version();
