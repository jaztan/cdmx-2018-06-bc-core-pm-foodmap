
//Bienvenida
const btnMenu = document.getElementById('bienvenidx');
btnMenu.addEventListener('click', event => {

    let personx = prompt('Ingresa tu nombre', "Harry Potter");
    if (personx != null) {
        document.getElementById('saludo').innerHTML =
            'Bienvenidx ' + personx + '!¿Con hambre?¡'
    };
});
//ubicacion
const btnLugar = document.getElementById('ubicacion');
btnLugar.addEventListener('click', event => {

    let lugar = prompt('Ingresa tu ubicacion', "Insurgentes Sur");
    if (lugar != null) {
        document.getElementById('lugar').innerHTML =
            'Ubicacion ' + lugar + '!¿Que te gustaria comer hoy?¡'
    };
});