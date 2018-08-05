const btnMostrarUbi = document.getElementById('mostrarUbi');
btnMenu.addEventListener('click', event => {
    let output = document.getElementById('map'); 
    if(navigator.geolocation){
        output.innerHTML= `<p>Tu navegador soporta Geolocalizacion</p>`;
    }else {
        output.innerHTML= `<p>Tu navegador  NO soporta Geolocalizacion</p>`;
    };
}
);