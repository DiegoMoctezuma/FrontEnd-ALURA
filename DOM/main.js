// Variables
const html = document.querySelector('html');//Color de fondo
const botones = document.querySelectorAll('.app__card-button');//Botones    
const botonEnfoque = botones[0];//Botones para las opciones
const botonCorto = botones[1];
const botonLargo = botones[2]; 
const banner = document.querySelector('.app__image');//Imagen
const title = document.querySelector('.app__title');//Titulo
const inputMusic = document.querySelector('#alternar-musica');//Musica
const song = new Audio('sonidos/luna-rise-part-one.mp3');//Cancion

let timeSeconds = 1500;//Tiempo
let idIntervalo = null;//Intervalo
const btnTime = document.querySelector('#start-pause');//Boton de tiempo
const audioPlay = new Audio('sonidos/play.wav');//Sonido de comienzo
const audioPause = new Audio('sonidos/pause.mp3');//Sonido de pausa
const audioEnd = new Audio('sonidos/beep.mp3');//Sonido de fin
const textoIniciarPausar = document.querySelector('#start-pause span');//Texto del boton 
const imgBotonIniciarPausar = document.querySelector('.app__card-primary-butto-icon');//Imagen del boton
const temporizador = document.querySelector('#timer');//Temporizador 

//Musica
song.loop = true;
inputMusic.addEventListener('change', () => {
    if(inputMusic.checked){
        song.play();
    }else{
        song.pause();
    }
});

// Cambio de opciones
botonEnfoque.addEventListener('click', () => {
    timeSeconds = 1500;
    CambiarContexto('enfoque');
    botonEnfoque.classList.add('active');
})
botonCorto.addEventListener('click', () => {
    timeSeconds = 300;
    CambiarContexto('descanso-corto');
    botonCorto.classList.add('active'); 
})
botonLargo.addEventListener('click', () => {
    timeSeconds = 900;
    CambiarContexto('descanso-largo');
    botonLargo.classList.add('active');
})

//Funcion para cambiar el contexto
function CambiarContexto(contexto){
    MostrarTiempo();

    botones.forEach(boton => {
        boton.classList.remove('active');
    });

    html.setAttribute('data-contexto',contexto);
    banner.setAttribute('src',`imagenes/${contexto}.png`);

    switch(contexto){
        case 'enfoque':
            title.innerHTML = `
            Optimiza tu productividad,<br>
                <strong class="app__title-strong">sumérgete en lo que importa.</strong>
            `;
            break;
        case 'descanso-corto':
            title.innerHTML = `
            ¿Qué tal tomar un respiro? <br>
                <strong class="app__title-strong">¡Haz una pausa corta!</strong>
            `;
            break;
        case 'descanso-largo':
            title.innerHTML = `
            Hora de volver a la superficie <br>
                <strong class="app__title-strong">Haz una pausa larga.</strong>
            `;
            break;
    } 
}

//Temporizador
btnTime.addEventListener('click', IniciarPausarTemporizador);

const cuentaRegresiva = () => {
    if(timeSeconds <= 0){
        audioEnd.play();
        Reiniciar();
        return;
    }
    textoIniciarPausar.textContent = 'Pausar';
    imgBotonIniciarPausar.setAttribute('src','imagenes/pause.png');
    timeSeconds-=1;
    MostrarTiempo();
    // console.log("Temporizador: " + timeSeconds);
}

function IniciarPausarTemporizador(){
    if(idIntervalo){
        audioPause.play();
        Reiniciar();
        return;
    }
    idIntervalo = setInterval(cuentaRegresiva,1000);
    audioPlay.play();
}

function Reiniciar(){
    clearInterval(idIntervalo);
    idIntervalo = null;
    textoIniciarPausar.textContent = 'Comenzar';
    imgBotonIniciarPausar.setAttribute('src','imagenes/play_arrow.png');

}

function MostrarTiempo(){
    const tiempo = new Date(timeSeconds * 1000);
    const tiempoFormateado = tiempo.toLocaleTimeString('es-MX',{minute:'2-digit',second:'2-digit'});
    temporizador.innerHTML = `
        ${tiempoFormateado}
    `;
}
MostrarTiempo();    