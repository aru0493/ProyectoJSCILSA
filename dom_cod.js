/***************************************/
/*Ingresar nombre y apellido por PROMPT*/
/***************************************/
var nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s'-]{2,50}$/;
var nuevoalumno = prompt("Ingresa tu nombre.");
var lastname = prompt("Ingresa tu apellido.");

listaalumnos = ["Laura", "Daniel", "Monica", "Susana", "Nahuel"]

if (listaalumnos.includes(nuevoalumno)) {
        alert("El visitante ya esta en la lista")
} else {
        listaalumnos.push(nuevoalumno)
}

/*******************************************/
/*Nombre ingresado en mensaje de bienvenida*/
/*******************************************/

window.onload = function () {

        if (nombreRegex.test(nuevoalumno) && nombreRegex.test(lastname)) {
                var info = document.getElementById("infopag");
                info.innerHTML = "Bienvenido/a " + nuevoalumno + "! Gracias por utilizar nuestra página web";
        } else {
                alert("Ingrese un nombre válido")
                location.reload();
        }

        /************************************************************/
        /*Crear elemento y Número de enlaces que tiene la página*****/
        /************************************************************/
        var totalLinks = document.links.length;
        var contLinks = document.createElement("p");
        contLinks.innerHTML = "La cantidad de enlaces en esta página es: " + totalLinks;

        const contenedor = document.getElementById("infopag");
        contenedor.appendChild(contLinks);
}

/*************************************************************/
/*Añadir nuevo nombre a la lista de visitas H3 primer parrafo*/
/*************************************************************/
if (nombreRegex.test(nuevoalumno) && nombreRegex.test(lastname)) {
        var primerP = document.getElementById("primerParrafo");
        primerP.innerHTML += (("<br>") + listaalumnos.join("<br>"));
}



/*******************************************/
/*Añadir nombre a la lista mediante un botón*/
/*******************************************/

function añadirNombre() {
        var nuevaLista = document.createElement("li"),
                nuevoNombre = document.createTextNode(nuevoalumno + " " + lastname);

        nuevaLista.appendChild(nuevoNombre);
        var padre = document.getElementById("alumnos");
        padre.appendChild(nuevaLista);

        document.getElementById("bot1").style.display = "none";
        document.getElementById("bot2").style.display = "block";
}

/**********************************************/
/*Retirar nombre de la lista mediante un botón*/
/**********************************************/

function retirarNombre() {
        var eliminarLista = document.getElementsByTagName("li")[5].parentNode,
                eliminarNombre = document.getElementsByTagName("li")[5];
        eliminarLista.removeChild(eliminarNombre);

        document.getElementById("bot2").style.display = "none";
        document.getElementById("bot1").style.display = "block";
}

/****************************************************/
/*Mostramos el contenido faltante del ultimo parrafo*/
/****************************************************/

function mostrar() {
        var elemento1 = document.getElementById("adicional"),
                elemento2 = document.getElementById("leerMenos");

        elemento1.className = "visible";
        elemento2.className = "visible";

        var enlace = document.getElementById("enlace");
        enlace.className = "oculto";
}

function ocultarSpan() {
        var leerMenos = document.getElementById("adicional"),
                elemento2 = document.getElementById("leerMenos");

        leerMenos.className = "oculto";
        elemento2.className = "oculto";

        var enlace = document.getElementById("enlace");
        enlace.className = "visible";
}
/**********************************************/
/*            Funciones de la Clase4           */
/**********************************************/

function genero(gen) {
        alert("Se seleccionó el género " + gen)
}

function Compara() {
        let a = parseInt(document.getElementById("n1").value);
        let b = parseInt(document.getElementById("n2").value);

        if (a > b) {
                alert("El número " + a + " es mayor que el número " + b)
        } else if (a < b) {
                alert("El número " + b + " es mayor que el número " + a)
        } else {
                alert("Los números son iguales")
        }
}

function Suma() {
        let c = parseInt(document.getElementById("v1").value);
        let d = parseInt(document.getElementById("v2").value);
        let resultado = c + d;

        alert("La suma de los números " + c + "+" + d + " es igual a " + resultado)
}

/**********************************************/
/*            Funciones del Juego       */
/**********************************************/

function irAlJuego() {
        window.location.href = 'index.html'; // Redirige al archivo juego.html
}

/*******************************************************/
/*Funciones del para Cambiar el Color de la Página  */
/******************************************************/

document.getElementById("colorFondo").onclick = function () {
        document.body.style.backgroundColor = document.body.style.backgroundColor === "lightblue" ? "bisque" : "lightblue";
        document.body.style.color = document.body.style.color === "black" ? "brown" : "black"

        const infopag = document.getElementById("infopag");
        infopag.style.backgroundColor = infopag.style.backgroundColor === "green" ? "darkkhaki" : "green"

        const linea = document.getElementById("linea");
        linea.style.backgroundColor = linea.style.backgroundColor === "green" ? "darkkhaki" : "green"

        const contenedor = document.getElementById("contenedor");
        contenedor.style.backgroundColor = contenedor.style.backgroundColor === "lightblue" ? "bisque" : "lightblue"
}

