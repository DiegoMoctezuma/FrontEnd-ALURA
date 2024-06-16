const url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=27";

// Then and catch
function listaImagenes(){
    fetch(url)
    .then(response => response.json())
    .then(datosImagenes => {
        console.log(datosImagenes);

        const card = document.querySelector("[data-ul]");
        datosImagenes.forEach(imagen => {
            const contenido = `
            <li class="card">
                <img class="card__image" src="${imagen.url}" alt="imagen">
                <h3 class="card__title">${imagen.title}</h3>
            </li>
            `
            card.innerHTML += contenido;
        }); 
    })
    .catch(error => console.log(error));
}

//Async and await
async function listaImagens(){
    try{
        let fetchImagen = await fetch(url);
        let datosImagenes = await fetchImagen.json();

        const card = document.querySelector("[data-ul]");
        datosImagenes.forEach(imagen => {
            const contenido = `
            <li class="card">
                <img class="card__image" src="${imagen.url}" alt="imagen">
                <h3 class="card__title">${imagen.title}</h3>
            </li>
            `
            card.innerHTML += contenido;
        }); 
    }
    catch(error){
        console.log(error);
    }
}
listaImagens();