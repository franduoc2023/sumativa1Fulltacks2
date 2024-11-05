function botomImagen(stage) {
    const imageContainer = document.getElementById('imageContainer');
    let variableImage = document.getElementById('variableImage');
    let variableText = document.getElementById('variableText');

     if (!variableImage) {
        variableImage = document.createElement('img');
        variableImage.id = 'variableImage';
        imageContainer.appendChild(variableImage);
    }
    if (!variableText) {
        variableText = document.createElement('p');
        variableText.id = 'variableText';
        imageContainer.appendChild(variableText);
    }
     const imageMap = {
        diseno: 'img/diseñoproyecto.jpg',
        preparacion: 'img/images.jpg',
        instalacion: 'img/instalacion.jpg',
        conexion: 'img/conexion.jpg',
        inspeccion: 'img/inspeccion.jpg'
    };

    const textMap = {
        diseno: ' El proyecto se encuentra en su primera etapa estamos realizando la cotizacion ',
        preparacion:'Estamos realizando el tablero y la construccion de perfiles de montaje '

    };

    variableImage.src = imageMap[stage] || '';
    variableText.textContent = textMap[stage] || '';

    imageContainer.style.display = variableImage.src ? 'flex' : 'none';
}

if (localStorage.getItem('isLoggedIn') !== 'true') {
    alert("Inicia sesion");
    window.location.href = "login.html";  
}