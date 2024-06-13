function PlaySound(idElemento){
    document.getElementById(idElemento).play();
}

const listaTeclas = document.querySelectorAll('.tecla');

for(let i = 0; i < listaTeclas.length; i++){
    const tecla = listaTeclas[i];
    const idTecla = `sonido_${listaTeclas[i].classList[1]}`;

    tecla.onclick = function(){ /* Funcion anónima */
        PlaySound(idTecla);
    };

    tecla.onkeydown = function(evento){
        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('activa');
        }
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('activa');
    }
}