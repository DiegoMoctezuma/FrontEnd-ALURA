import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector('[data-lista]');

function CrearCard(titulo,descripcion,url,imagen){
    const video = document.createElement('li');
    video.className = 'videos__item';
    video.innerHTML = `
        <iframe width="100%" height="72%" src="${url}"
            title="${titulo}" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        <div class="descripcion-video">
            <img src="${imagen}" alt="logo canal alura">
            <h3>${titulo}</h3>
            <p>${descripcion}</p>
        </div>
    `;

    return video;
}

async function ListarVideos(){
    const listaAPI = await conexionAPI.ListarVideos();
    
    listaAPI.forEach(video => lista.appendChild(CrearCard(video.titulo, video.descripcion, video.url, video.imagem)));
}
ListarVideos();