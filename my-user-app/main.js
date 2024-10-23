import { app, BrowserWindow } from 'electron';
import path from 'path';

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(process.cwd(), 'preload.js'), // Если у вас есть preload.js
            contextIsolation: true,
            enableRemoteModule: false,
        },
    });

    win.loadURL('http://localhost:5173'); 
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});