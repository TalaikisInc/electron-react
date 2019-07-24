const { app, BrowserWindow, ipcMain, shell } = require('electron')

const devMode = (process.env.NODE_ENV === 'dev')
let mainWindow = null

function createWindow () {
  mainWindow = new BrowserWindow({
    width:600,
    height:400
  })

  if (devMode) {
    mainWindow.webContents.openDevTools()
  }

  mainWindow.loadURL(devMode ? `http://localhost:9000` : `file://${__dirname}/build/index.html`)

  mainWindow.on('closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if (mainWindow === null) createWindow()
})

ipcMain.on('link:open', (event, link) => {
  if ('string' === typeof link && link.length > 0) {
    shell.openExternal(link);
  }
})
