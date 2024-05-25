

document.getElementById('buscar').addEventListener('click', (e) => {
    e.preventDefault()

    let buscar = document.getElementById('busco').value;
    const token = '20047269-4fb1ae037afe7e12d1ec60bdb';
    let actual = 1;
    const url = `https://pixabay.com/api/?key=${token}&q=${buscar}&page=${actual}`;
    let panel_imagenes = document.getElementById('area_imagenes');
    
    if (panel_imagenes.hasChildNodes) {
        panel_imagenes.innerHTML = null
    }


    fetch(url).then(response => response.json())
    .then(data =>  mostrarImagenes(data.hits))

    function mostrarImagenes(imagenes) {
        for(let imagen of imagenes) {
            let img = document.createElement('img')
            img.src = imagen.webformatURL
            img.alt = "foto";
            panel_imagenes.appendChild(img)
        }
    }
})