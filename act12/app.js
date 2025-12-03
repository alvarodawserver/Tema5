function check_dni(){
    let numeros = document.getElementById("dni_input").value.split('.');
    let numeros_sin_letra = []
    numeros.forEach(num => {
        for (let i = 0; i < num.length; i++) {
            if(!isNaN(num[i])){
                numeros_sin_letra.push(num[i]);
            }
            
        }
    });
    let letra = numeros[2].split('-')[1]
    alert(numeros_sin_letra)
}

document.getElementById("guardar").addEventListener("click",check_dni);