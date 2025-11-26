let caja = document.getElementById("caja")
let x =0 ;
let y = 0;
document.addEventListener("keydown",(e) =>{
    switch(e.key){
        case 'ArrowUp':
        case '8':caja.style.top = (y -= 5) + "px";break;
        
        case 'ArrowDown':
        case '2':caja.style.top = (y += 5) + "px";break;
        
        case 'ArrowLeft':
        case '4':caja.style.left = (x -= 5) + "px";break;
        
        case 'ArrowRight':
        case '6':caja.style.left = (x += 5) + "px";break;
    }
})
