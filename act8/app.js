document.getElementById("sobre").addEventListener("click",()=>{
    window.location.href = "google.com";
})
//Act 12
document.getElementById("enviar").addEventListener("click",()=>{
    let div_colores = document.getElementById('colores').querySelectorAll('input');
    div_colores.forEach(color => {
        if(color.checked){
            switch(color.value){
                case 'rojo':document.getElementById("cuerpo").style.backgroundColor = 'red';break;
                case 'verde':document.getElementById("cuerpo").style.backgroundColor = 'green';break;
                case 'azul':document.getElementById("cuerpo").style.backgroundColor = 'blue';break;
                case 'default':document.body.style.backgroundColor = 'white';break;
            }
        }
    });
})
//Dias elegidos
const checkbox_dias = document.getElementById("dias_disponible").querySelectorAll('input');
let dia_elegido = "";
checkbox_dias.forEach(dia => {
    dia.addEventListener("click",()=>{
        if(dia.checked){
            dia_elegido = dia.value
            console.log(dia_elegido)
        }else{
            dia_elegido = null;
        }
    })
})
//////


document.getElementById("enviar").addEventListener("click",seleccionar);


document.getElementById("enviar").addEventListener("click",mail);


//document.getElementById("enviar").addEventListener("click",mail,false)

//8 y 9
function mail(){
    const formulario = document.getElementById("formulario")
    const profesor = document.getElementById("asigs").value;
    formulario.action = `mailto:${profesor}@gmail.com`;
}
//10
function seleccionar(){
    alert(dia_elegido)   
}

