let imagen = document.getElementById("imagen");
let monico = document.getElementById("monico");
let offsetX,offsetY;
let agarrando = false;

imagen.addEventListener("dragstart",e=>{
    e.preventDefault()
})

imagen.addEventListener("mousedown",e =>{
    offsetX = e.clientX - imagen.offsetLeft;
    offsetY = e.clientY - imagen.offsetTop;
    monico.setAttribute("src","macaco.jpg")
    agarrando = true;
})

imagen.addEventListener("mousemove",e =>{
    if(agarrando){
        imagen.style.left = `${e.clientX - offsetX}px`
        imagen.style.top = `${e.clientY - offsetY}px`;
        console.log(e.clientX)
        console.log(e.clientY)
    }
})


imagen.addEventListener('mouseup', () => {
    agarrando = false;
    monico.setAttribute("src","images.jpeg")
    imagen.style.cursor = 'move'; 
});

