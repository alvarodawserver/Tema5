//Elementos
let dni = document.getElementById("dni_input")
let fnac = document.getElementById("fnac_input")
let email = document.getElementById("email_input")
let pag = document.getElementById("pagina_input")
let psw = document.getElementById("psw_input")
let conf_psw = document.getElementById("conf_psw_input")
let nombre = document.getElementById("nombre_input")









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







document.getElementById("guardar").addEventListener("click",check_dni);