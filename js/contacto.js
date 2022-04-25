const mensajesIniciales = document.querySelectorAll('span');
mensajesIniciales.forEach((span) =>{
    span.innerHTML = ""
});
const campoTexto = document.querySelector('textarea');
function validar(input){
    //dataset obtiene informacion de todos los data, y especificamos con tipo
    const tipoDeInput = input.dataset.tipo;
    const campoTexto = document.querySelector('textarea');
    if(input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = " ";
    }else{
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    }
    if(campoTexto.validity.valid){
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = " ";
    }else{
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    }
}

const inputs = document.querySelectorAll('input');
inputs.forEach((input) => {
    input.addEventListener('blur', (input) => {
        validar(input.target);
    });
});

campoTexto.addEventListener('blur', (evento)=> {
    validar(evento.target);
});

function mostrarMensajeDeError(tipoDeInput, input){
    let mensaje = "";
    tipoDeErrores.forEach( (error) => {
        if(input.validity[error]){
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    })
    return mensaje;
}
const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
];

const mensajesDeError = {
    nombre: {
        valueMissing: "El campo nombre no puede estar vacio"
    },
    email: {
        valueMissing: "El campo email no puede estar vacio",
        typeMismatch: "El correo no es válido"
    },
    asunto: {
        valueMissing: "El campo asunto no puede estar vacio"
    },
    mensaje: {
        valueMissing: "El campo mensaje no puede estar vacio"
    },

}