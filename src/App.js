// alert("Presiona OK si estas list@ para empezar con javascript");
const nombre = document.querySelector('#nombre-input');
const form = document.querySelector('#saludador-form');
const form_edad = document.querySelector('#saludador-con-edad-form');
const form_genero = document.querySelector('#saludador-con-genero-form');
const edad = document.querySelector('#edad-input');
const genero = document.querySelector('#genero-input');
var hoy = new Date();
const form_tiempo = document.querySelector('#saludador-con-tiempo-form');
var hora = hoy.getHours()
// alert(hora)

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

form_tiempo.addEventListener("submit", (event) => {
    if(edad.value <= 21){
        if(genero.value == "Masculino"){
            if(hora>= 5 && hora < 12){
                alert("Buenos Dias Joven " + nombre.value);
            }
            if(hora >= 12 && hora < 18){
                alert("Buenos Tardes Joven " + nombre.value);
            }
            if(hora >=18 && hora < 5){
                alert("Buenos Noches Joven " + nombre.value);
            }
        }else{
            if(genero.value == "Femenino"){
                if(hora>= 5 && hora < 12){
                    alert("Buenos Dias Señorita " + nombre.value);
                }
                if(hora >= 12 && hora < 18){
                    alert("Buenos Tardes Señorita " + nombre.value);
                }
                if(hora >=18 && hora < 5){
                    alert("Buenos Noches Señorita " + nombre.value);
                }
            }else{
                alert("Genero invalido. Inserte Masculino o Femenino");
            }
        }
    }else{
        if(edad.value <=60){
            if(genero.value == "Masculino"){
                if(hora>= 5 && hora < 12){
                    alert("Buenos Dias Señor " + nombre.value);
                }
                if(hora >= 12 && hora < 18){
                    alert("Buenos Tardes Señor " + nombre.value);
                }
                if(hora >=18 && hora < 5){
                    alert("Buenos Noches Señor " + nombre.value);
                }
            }else{
                if(genero.value == "Femenino"){
                    if(hora>= 5 && hora < 12){
                        alert("Buenos Dias Señora " + nombre.value);
                    }
                    if(hora >= 12 && hora < 18){
                        alert("Buenos Tardes Señora " + nombre.value);
                    }
                    if(hora >=18 && hora < 5){
                        alert("Buenos Noches Señora " + nombre.value);
                    }
                }else{
                    alert("Genero invalido. Inserte Masculino o Femenino");
                }
            }
        }
        else{
            if(genero.value == "Masculino"){
                if(hora>= 5 && hora < 12){
                    alert("Buenos Dias Don " + nombre.value);
                }
                if(hora >= 12 && hora < 18){
                    alert("Buenos Tardes Don " + nombre.value);
                }
                if(hora >=18 && hora < 5){
                    alert("Buenos Noches Don " + nombre.value);
                }
            }else{
                if(genero.value == "Femenino"){
                    if(hora>= 5 && hora < 12){
                        alert("Buenos Dias Doña " + nombre.value);
                    }
                    if(hora >= 12 && hora < 18){
                        alert("Buenos Tardes Doña " + nombre.value);
                    }
                    if(hora >=18 && hora < 5){
                        alert("Buenos Noches Doña " + nombre.value);
                    }
                }else{
                    alert("Genero invalido. Inserte Masculino o Femenino");
                }
            }
        }
    }   
});
