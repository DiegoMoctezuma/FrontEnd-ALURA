import EsUnCuil from "./validar-cuil.js";
import MayorDeEdad from "./validar-edad.js";
import { tiposError, mensajes } from "./custom-errors.js";

const camposFormulario = document.querySelectorAll('[required]');
const formulario = document.querySelector('[data-formulario]');

formulario.addEventListener('submit', evento => {
    evento.preventDefault();

    const listaRespuesta = {
        nombre: evento.target.elements["nombre"].value,
        email: evento.target.elements["email"].value,
        identificacion: evento.target.elements["identificacion"].value,
        cuil: evento.target.elements["cuil"].value,
        fecha_nacimiento: evento.target.elements["fecha_nacimiento"].value
    }

    localStorage.setItem('registro', JSON.stringify(listaRespuesta));
    window.location.href = "./abrir-cuenta-form-2.html";
})

camposFormulario.forEach(campo => {
    campo.addEventListener('blur', () => verificarCampo(campo));
    campo.addEventListener('invalid', evento => {
        evento.preventDefault();
    });
});

function verificarCampo(campo){
    let mensaje = "";
    campo.setCustomValidity("");

    if(campo.name === "cuil" && campo.value.length >= 11){
        EsUnCuil(campo);
    } else if(campo.name === "fecha_nacimiento"){
        MayorDeEdad(campo);
    }
    // console.log(campo.validity);

    tiposError.forEach(error => {
        if(campo.validity[error]){
            mensaje = mensajes[campo.name][error];
        }
    });

    const mensajeError = campo.parentNode.querySelector('.mensaje-error');
    const inputCheck = campo.checkValidity();

    if(!inputCheck){
        mensajeError.textContent = mensaje;
    }else {
        mensajeError.textContent = "";
    }
}