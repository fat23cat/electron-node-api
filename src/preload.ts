// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("nodeAPI", {
  checkConnection: (text?: string) =>
    ipcRenderer.invoke("checkConnection", text),
  version: () => ipcRenderer.invoke("version"),
  platform: () => ipcRenderer.invoke("platform"),
});
