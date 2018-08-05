const btnMostrarUbi = document.getElementById('mostrarUbi');
btnMenu.addEventListener('click', event => {
    let output = document.getElementById('map');
    //verificar si soprta geolocalizacion
    if (navigator.geolocation) {
        output.innerHTML = `<p>Tu navegador soporta Geolocalizacion</p>`;
    } else {
        output.innerHTML = `<p>Tu navegador  NO soporta Geolocalizacion</p>`;
    };
    //funciones que recibe como parametro el metodo getcurrenposition
    const localizacion = (posicion) => {
        let latitude = posicion.coords.latitude;
        console.log(latitude);
        let longitude = posicion.coords.longitude;
        console.log(longitude);
        output.innerHTML = "<p>latitude: "+latitude+"<br>longitude: "+longitude+"</p>";
    };

    const error = () => {
        output.innerHTML = `<p>No se pudo obtener tu ubicacion</p>`;
    }
    //pasamos como parametros la localizacion y error
    navigator.geolocation.getCurrentPosition(localizacion, error);


});