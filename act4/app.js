document.addEventListener("mousedown",e =>{
    if(e.button == 1){
        document.body.style.backgroundColor = "#FFFF00"
    }
})

document.addEventListener("keydown",e =>{
    document.body.style.backgroundColor = "blue";
})

document.addEventListener("mousemove",e=>{
    document.body.style.backgroundColor  = "#FFFFFF";
})