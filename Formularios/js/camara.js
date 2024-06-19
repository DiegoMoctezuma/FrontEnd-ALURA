const botonCamara = document.querySelector('[data-video-boton]');
const camara = document.querySelector('[data-camera]');
const video = document.querySelector('[data-video]');

const botonTomarFoto = document.querySelector('[data-tomar-foto]');
const mensaje = document.querySelector('[data-mensaje]');
const canvas = document.querySelector('[data-video-canvas]');
let imgURL = '';

const botonEnviar = document.querySelector('[data-enviar]');

botonCamara.addEventListener('click',async () => {
    let iniciarVideo = await navigator.mediaDevices.getUserMedia({video: true,audio: false});

    botonCamara.style.display = 'none';
    camara.style.display = 'block';
    video.srcObject = iniciarVideo;
});

botonTomarFoto.addEventListener('click',() => {
    canvas.getContext('2d').drawImage(video,0,0,canvas.width,canvas.height);

    imgURL = canvas.toDataURL('image/jpeg');
    camara.style.display = 'none';
    mensaje.style.display = 'block';
});

botonEnviar.addEventListener('click',() => {
    const recibirDatos = localStorage.getItem('registro');
    const convertirDatos = JSON.parse(recibirDatos);

    convertirDatos.img_url = imgURL;

    localStorage.setItem('registro',JSON.stringify(convertirDatos));
    window.location.href = './abrir-cuenta-form-3.html'
});