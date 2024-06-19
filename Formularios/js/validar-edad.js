export default function MayorDeEdad(campo){
    const fechaNacimiento = new Date(campo.value);
    
    if(!ValidarEdad(fechaNacimiento)){
        campo.setCustomValidity("Debes ser mayor de edad para registrarte.");
    }
}

function ValidarEdad(fecha){
    const fechaActual = new Date();
    const fechaMas18 = new Date(fecha.getUTCFullYear()+18, fecha.getUTCMonth(), fecha.getUTCDate());
    
    return fechaActual >= fechaMas18;
}