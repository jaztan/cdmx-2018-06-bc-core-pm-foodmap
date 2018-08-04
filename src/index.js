const btnMenu = document.getElementById('bienvenidx');
btnMenu.addEventListener('click', event => {

    let personx = prompt('Ingresa tu nombre', "Harry Potter");
    if (personx != null) {
        document.getElementById('saludo').innerHTML =
        'Bienvenido ' + personx + '!¿Con hambre?¡'
    };
});

