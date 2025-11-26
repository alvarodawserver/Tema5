


document.addEventListener("mousedown",(e) =>{
    switch(e.button){
        case 0: 
            e.preventDefault();
            alert("Boton izquierdo deshabilitado")
        break;
        case 1: 
            e.preventDefault()
            alert("Boton central deshabilitado")
        break;
        case 2: 
            e.preventDefault()
            alert("Boton derecho deshabilitado")
        break;

    }
})