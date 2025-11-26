let imagen = document.getElementById("monico");
document.addEventListener("mousedown",e =>{
    imagen.src = "macaco.jpg";
})

document.addEventListener("mouseup",e=>{
    imagen.src = "images.jpeg";
})

