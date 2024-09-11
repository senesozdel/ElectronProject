

const {ipcRenderer} = require('electron')


const mainContent = document.getElementById("main-content")

let wrapperBox = document.createElement("div")
let imageBox = document.createElement("div");
let image = document.createElement("img");
let textBox = document.createElement("div");
let contentFrame = document.createElement("div");
let button = document.createElement("button")

wrapperBox.className = "wrapper-box";
imageBox.className = "image-box";
textBox.className = "text-box";
button.className = "button";
image.className = "image";
contentFrame.className = "content-frame"

button.innerText = "Getir";
textBox.innerText = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text" 
image.src = "https://fastly.picsum.photos/id/451/200/300.jpg?hmac=I8NLrhKLa1kmeJm2G28UsnA6fiV7Hg5LpGPHpLgde-M"

imageBox.appendChild(image);
contentFrame.appendChild(textBox);
contentFrame.appendChild(imageBox);

wrapperBox.appendChild(contentFrame)
wrapperBox.appendChild(button)

mainContent.appendChild(wrapperBox)


button.addEventListener("click",()=>{
    ipcRenderer("btn","button is Clicked")
})