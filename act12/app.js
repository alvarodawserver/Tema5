//Elementos
let dni = document.getElementById("dni_input")
let fnac = document.getElementById("fnac_input")
let email = document.getElementById("email_input")
let pag = document.getElementById("pagina_input")
let psw = document.getElementById("psw_input")
let conf_psw = document.getElementById("conf_psw_input")
let nombre = document.getElementById("nombre_input")




function validar_campo(){
    check_dni();
}




function check_dni(){
    if(!dni.checkValidity()){
        if(dni.validity.valueMissing){
            dni.setCustomValidity('Debe introducir un DNI válido')
        }
        if(dni.validity.patternMismatch){
            dni.setCustomValidity('No ha introducido bien el DNI')
        }
    }else{
        let numeros = document.getElementById("dni_input").value.split('.');
        let numeros_sin_letra = []
        let letras_dni = ['T,R,W,A,G,M,Y,F,P,D,X,B,N,J,Z,S,Q,V,H,L,C,K,E'];
        numeros.forEach(num => {
            for (let i = 0; i < num.length; i++) {
                if(!isNaN(num[i])){
                    numeros_sin_letra.push(num[i]);
                }
            }
        });
        let suma = numeros_sin_letra.reduce((acc,curr) => acc + curr )
        let letra = numeros[2].split('-')[1]
        for (let i = 0; i < letras_dni.length; i++) {
            if(letras_dni[parseInt(suma) % 23] === letra){
                return true
            }
        }

    }
}

function check_nombre(){
    if(!nombre.checkValidity()){
        if(nombre.validity.valueMissing){
            nombre.setCustomValidity('Debe introducir un DNI válido')
        }
        if(nombre.validity.patternMismatch){
            nombre.setCustomValidity('No ha introducido bien el DNI')
        }
    }
}

function check_fnac(){

}





document.querySelectorAll("input").forEach(input => {
    input.addEventListener('blur',function(){
        validar_campo(this)
    })

    input.addEventListener("focus",function(){
        return;
    })
})



let pattrn = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1]){2}\/(0[1-9]|1[0-2]){2}\/[0-9]{4}/
let str = '01/11/2000'
console.log(pattrn.test(str))
document.getElementById("guardar").addEventListener("click",check_dni);
