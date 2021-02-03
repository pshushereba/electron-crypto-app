const {
  app,
  BrowserWindow,
  ipcMain,
  Notification,
  desktopCapturer,
  dialog,
} = require("electron");
const path = require("path");
const fs = require("fs");
const isDev = !app.isPackaged;

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    backgroundColor: "#e3e3e3",
    webPreferences: {
      nodeIntegration: false,
      preload: path.join(__dirname, "preload.js"),
      worldSafeExecuteJavaScript: true,
      contextIsolation: true,
    },
  });

  win.loadFile("index.html");
  //isDev && win.webContents.openDevTools();
}

if (isDev) {
  require("electron-reload")(__dirname, {
    electron: path.join(__dirname, "node_modules", ".bin", "electron"),
  });
}

app.whenReady().then(createWindow);

ipcMain.on("notify", (_, message) => {
  new Notification({ title: "Notification", body: message }).show();
});

ipcMain.on("app-quit", () => {
  app.quit();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// Function to save screenshot as PDF

// exports.savePDF = (file) => {
//   if (!file) {
//     file = dialog.showSaveDialog(win, {
//       title: "Save as PDF",
//       defaultPath: app.getPath("desktop"),
//       filters: [
//         {
//           name: "PDF Files",
//           extensions: ["pdf"],
//         },
//       ],
//     });
//   }

//   if (!file) return;
//   fs.writeFileSync(file);
// };
