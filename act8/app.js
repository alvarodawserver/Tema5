document.getElementById("sobre").addEventListener("click",()=>{
    window.location.href = "google.com";
})

document.getElementById("enviar").addEventListener("click",seleccionar);



//document.getElementById("enviar").addEventListener("click",mail,false)


function mail(){
    const formulario = document.getElementById("formulario")
    const profesor = document.getElementById("asigs").value;
    formulario.action = `mailto:${profesor}@gmail.com`;
}

function seleccionar(){
    const checkbox_dias = 
    console.log(checkbox_dias)
    const dia_elegido = document.getElementById("dia");
        const dias_seleccionados = [...checkbox_dias].filter(dias => dias.checked).map(dias=>dias.value);
        console.log(dias_seleccionados)    
        if(dias_seleccionados.length > 0){
                dia_elegido.value = dias_seleccionados[dias_seleccionados.length - 1];
                console.log(dia_elegido.value)
            }else{
                dia_elegido.value = ""
            }
        };