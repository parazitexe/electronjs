const {app, BrowserWindow, ipcMain} = require('electron')
const url = require('url')
const path = require('path')


function createWindow() {
    const win = new BrowserWindow({
        width: 600,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })


    win.loadURL(url.format ({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));


    const { ipcMain } = require('electron')

    ipcMain.handle('my-filin', (event, data) => {
        console.log(data);
        // ... выполнять действия от имени Renderer
    })
    ipcMain.handle('filin', (event, data) => {
        console.log(data);
        // ... выполнять действия от имени Renderer
    })


}


app.on('ready', createWindow)
