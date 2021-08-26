// alert("Presiona OK si estas list@ para empezar con javascript");
const nombre = document.querySelector('#nombre-input');
const form = document.querySelector('#saludador-form');
const form_edad = document.querySelector('#saludador-con-edad-form');
const form_genero = document.querySelector('#saludador-con-genero-form');
const edad = document.querySelector('#edad-input');
const genero = document.querySelector('#genero-input');
// alert(nombre.value);
form.addEventListener("submit", (event) =>{
    alert("Hola: " + nombre.value + edad.value);
});

form_edad.addEventListener("submit", (event) =>{
    if(edad.value <= 18){
        alert("Hola Joven/Señorita " + nombre.value);
    }else{
        if(edad.value <=30){
            alert("Hola Señor/Señora " + nombre.value);
        }
        else{
            alert("Hola Don/Doña " + nombre.value)
        }
    }    
});

form_genero.addEventListener("submit", (event) =>{
    if(edad.value <= 18){
        if(genero.value == "Masculino"){
            alert("Hola Joven " + nombre.value);
        }else{
            if(genero.value == "Femenino"){
                alert("Hola Señorita " + nombre.value);
            }else{
                alert("Genero invalido. Inserte Masculino o Femenino");
            }
        }
    }else{
        if(edad.value <=30){
            if(genero.value == "Masculino"){
                alert("Hola Señor " + nombre.value);
            }else{
                if(genero.value == "Femenino"){
                    alert("Hola Señora " + nombre.value);
                }else{
                    alert("Genero invalido. Inserte Masculino o Femenino");
                }
            }
        }
        else{
            if(genero.value == "Masculino"){
                alert("Hola Don " + nombre.value);
            }else{
                if(genero.value == "Femenino"){
                    alert("Hola Doña " + nombre.value);
                }else{
                    alert("Genero invalido. Inserte Masculino o Femenino");
                }
            }
        }
    }    
});


