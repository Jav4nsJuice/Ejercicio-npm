// alert("Presiona OK si estas list@ para empezar con javascript");
const nombre = document.querySelector('#nombre-input');
const form = document.querySelector('#saludador-form');
const form_edad = document.querySelector('#saludador-con-edad-form');
const edad = document.querySelector('#edad-input');
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


