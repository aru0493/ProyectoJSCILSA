function obtenerNumAl(limite) {
    return Math.floor(Math.random() * limite);
} 

function ObtenerDistancia(e, objetivo){
    let diferenciaX = e.offsetX - objetivo.x;
    let diferenciaY = e.offsetY - objetivo.y;
    return Math.sqrt((diferenciaX * diferenciaX) + (diferenciaY * diferenciaY));
}

function ObtenerDistanciaClick (distancia) {

    if (distancia < 30){
        return "Realmente cerca!"
    }else if (distancia < 50 && distancia > 30){
        return "Muy cerca";
    }else if (distancia < 80 && distancia > 50){
        return "Cerca";
    }else if (distancia < 100 && distancia > 80){
        return "Lejos"
    }else if (distancia < 180 && distancia > 100){
        return "Bastante lejos"
    } else if (distancia < 250 && distancia > 180){
        return "Muy lejos!"
    } else {
        return " Muy, muy lejos!"
    }

}