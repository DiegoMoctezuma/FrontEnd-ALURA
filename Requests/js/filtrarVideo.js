import { conexionAPI } from "./conexionAPI.js";
import CrearCard from "./mostrarVideos.js";

async function filtrarVideo(evento){

    evento.preventDefault();

    const datosBusqueda = document.querySelector('[data-busqueda]').value;
    const busqueda = await conexionAPI.BuscarVideos(datosBusqueda);
    // console.log(busqueda);

    const lista = document.querySelector('[data-lista]');
    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }

    busqueda.forEach(video => lista.appendChild(CrearCard(video.titulo, video.descripcion, video.url, video.imagem)));

    if(busqueda.length === 0){
        lista.innerHTML = `<h2 class="mensaje__titulo">No fueron encontrado elementos para "${datosBusqueda}"</h2>`;
    }
}

const botonBusqueda = document.querySelector('[data-boton-busqueda]');
botonBusqueda.addEventListener('click', evento => filtrarVideo(evento));

//Enter
const datosBusqueda = document.querySelector('[data-busqueda]');
datosBusqueda.addEventListener('keyup', function(e){
    var key = e.key;
    if (key === 'Enter') {
        filtrarVideo(e)
    }
});