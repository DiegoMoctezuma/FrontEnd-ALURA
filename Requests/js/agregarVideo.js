import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector('[data-formulario]');

async function CrearVideo(evento){
    evento.preventDefault();

    const titulo = formulario.querySelector('[data-titulo]').value;
    const url = formulario.querySelector('[data-url]').value;
    const imagen = formulario.querySelector('[data-imagen]').value;

    const descripcion = Math.floor(Math.random() * 1000).toString();

    try{
        await conexionAPI.AgregarVideo(titulo,descripcion,url,imagen);
        window.location.href = "../pages/envio-concluido.html";
    }catch(e){
        alert(e);
    }

}

formulario.addEventListener('submit',evento => CrearVideo(evento));