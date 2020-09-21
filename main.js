const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow, Menu} = electron;

let mainWindow;

// Listen for app to be ready.
app.on('ready', function(){
      // Remove application menu
    Menu.setApplicationMenu(false);

    // Create new window
    mainWindow = new BrowserWindow({width: 900, height: 700});

    // Load html into window
    mainWindow.loadURL((url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol:'file:',
        slashes: true
    })))
    
    

});