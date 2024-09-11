const { app, BrowserWindow, Menu, ipcMain } = require('electron')
const url = require('url')
const path = require('path')

let mainWindow;

app.on('ready',()=>{
    mainWindow = new BrowserWindow({
        width:"300px",
        height:"250px",

    })

    mainWindow.loadURL(
        url.format({
            pathname : path.join(__dirname,"index.html"),
            protocol:"file",
            slashes:true
        })
    )
    const menu = Menu.buildFromTemplate(menuTemplate)

    Menu.setApplicationMenu(menu)

     ipcMain.on("btn",(err,data)=>{
        console.log(data)
        mainWindow.webContents
    })

})



const menuTemplate =[{
    label:"İşlemler",
    submenu:[
        {
            label:"Ekle"
        },
        {
            label:"Sil"
        },
        {
            label:"Çıkış"
        },
        {
            label:"Inspect",
            click(item,focusedWindow){
                focusedWindow.toggleDevTools();
            }
        }
    ]
}]