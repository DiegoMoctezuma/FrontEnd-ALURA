
const formulario = document.querySelector('[data-formulario]');

function CrearVideo(evento){
    evento.preventDefault();

    const titulo = formulario.querySelector('[data-titulo]').value;
    const url = formulario.querySelector('[data-url]').value;
    const imagen = formulario.querySelector('[data-imagen]').value;

    const descripcion = Math.floor(Math.random() * 1000).toString();
}

formulario.addEventListener('submit',evento => CrearVideo(evento));