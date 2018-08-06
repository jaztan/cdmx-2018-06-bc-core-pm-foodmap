const menu = document.getElementById('menu');
let miMenu = document.getElementById('mi-menu');
miMenu.addEventListener('change', event=> {
    console.log(event.target.value);
    let tacos = document.getElementById('mi-menu').value;
    let eleccion =document.getElementById('eleccion');
    eleccion.innerHTML ="<p>Tu has elegido tacos de: "+tacos+"</p>";

});

   