const btnMenu = document.getElementById('bienvenidx');
btnMenu.addEventListener('click', event => {

    let personx = prompt('Ingresa tu nombre', "Harry Potter");
    if (personx != null) {
        document.getElementById('saludo').innerHTML =
            'Bienvenidx ' + personx + '!¿Con hambre?¡'
    };
});
const btnLugar = document.getElementById('ubicacion');
btnLugar.addEventListener('click', event => {

    let lugar = prompt('Ingresa tu ubicacion', "Insurgentes Sur");
    if (lugar != null) {
        document.getElementById('lugar').innerHTML=
            'Ubicacion ' + lugar + '!¿Que te gustaria comer hoy?¡'
    };
});
var test = document.getElementById("precio");


// this handler will be executed only once when the cursor moves over the unordered list
test.addEventListener("mouseenter", function (event) {
    // highlight the mouseenter target
    event.target.style.color = "purple";

    // reset the color after a short delay
    setTimeout(function () {
        event.target.style.color = "";
    }, 500);
}, false);
// this handler will be executed every time the cursor is moved over a different list item
test.addEventListener("mouseover", function (event) {
    // highlight the mouseover target
    event.target.style.color = "orange";

    // reset the color after a short delay
    setTimeout(function () {
        event.target.style.color = "";
    }, 500);
}, false);