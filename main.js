const { app, BrowserWindow } = require('electron')

function quitApplication(){
    window.close()
}

function iniciar(){

document.querySelector("iniciar.html");




}

function createWindow () {
  // Cria uma janela de navegação.

  let win = new BrowserWindow({
    width: 1000,
    height: 800,
    icon: __dirname + "/images/loli.png",
    autoHideMenuBar: false,
    webPreferences: {
      nodeIntegration: true
    }
  })


  // e carregar o index.html do aplicativo.
  win.loadFile('index.html')
}


app.whenReady().then(createWindow) 