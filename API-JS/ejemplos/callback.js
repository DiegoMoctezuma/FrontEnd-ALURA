function uno (dos) {
    console.log("uno");
    setTimeout(dos, 2000);
}   

function dos (tres) {
    console.log("dos");
    setTimeout(tres, 2000);
}

function tres (cuatro) {
    console.log("tres");
    setTimeout(cuatro, 2000);
}

function cuatro (cinco) {
    console.log("cuatro");
    setTimeout(cinco, 2000);
}
function cinco () {
    console.log("cinco");
}

// Callback hell
/* setTimeout(
    () => uno(
        () => dos(
            () => tres(
                () => cuatro(
                    () => cinco()
                )
            )
        )  
    ) , 5000
); */

setTimeout(() => uno(dos),5000);

// Función anónima
const nombre = function (){
    console.log("Nombre");
};
nombre();

//Arrow function
const persona = () => {
    console.log("Persona");
}
persona();