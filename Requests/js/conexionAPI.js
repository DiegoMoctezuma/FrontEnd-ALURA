async function ListarVideos(){
    const conexion = await fetch('http://localhost:3001/videos');
    const dataConexion = await conexion.json();

    // console.log(dataConexion);
    return dataConexion;
}
// ListarVideos();

async function AgregarVideo(titulo, descripcion, url, imagem){
    const conexion = await fetch('http://localhost:3001/videos',{
        method: 'POST',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            titulo: titulo,
            descripcion: `${descripcion} mil visualizaciones`,
            url: url,
            imagem: imagem
        })
    });
    const conexionConvertida = await conexion.json();
    return conexionConvertida;
}

export const conexionAPI = {
    ListarVideos, AgregarVideo
}