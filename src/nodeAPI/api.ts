export const checkConnection = async (text?: string) =>
  window.nodeAPI.checkConnection(text);
export const platform = window.nodeAPI.platform;
export const version = window.nodeAPI.version;
