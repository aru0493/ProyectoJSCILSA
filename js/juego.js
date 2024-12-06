const ancho = 400;
const alto = 600;

let mapaDelTesoro = {
    x: obtenerNumAl(ancho),
    y: obtenerNumAl(alto)
};

let imagen = document.querySelector('.imagen');
let distanciaUsuario = document.getElementById('distancia');
let clicks = 0;

imagen.addEventListener('click', function(e) {
    clicks ++;
    let distancia = ObtenerDistancia(e, mapaDelTesoro)
    let distanciaClick = ObtenerDistanciaClick(distancia);
    
    distanciaUsuario.innerHTML = `<h2> ${distanciaClick}</h2>`

    if(distancia < 20){
        alert(`Has encontrado el tesoro en ${clicks} clicks!`)
        window.location.href = '../dom.html';
    }
})