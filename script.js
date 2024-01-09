
function randomColor(){
    let hex = "0123456789ABCFEF";
    let color = "#";
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
}
let changerColor;
let startColor = function starColorChange(){
    if(!changerColor){   changerColor = setInterval(()=>{
        let body = document.querySelector("body");
         body.style.backgroundColor = randomColor();
     },100)}
  
}

let stopColor = function stopColorChange(){
    clearInterval(changerColor);
    changerColor=null;
}

document.querySelector("#start").addEventListener("click",startColor);
document.querySelector("#stop").addEventListener("click",stopColor);