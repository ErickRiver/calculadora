/***** MUESTRA EN PANTALLA LO PRESIONADO EN TECLADO *****/

const botones = document.querySelectorAll('input[type="button"].boton.numero');
var pantalla = document.getElementById("pantalla");

botones.forEach(boton => {
  boton.addEventListener('click', function () {
    const valor = this.value;
    pantalla.value += valor;
  });
});

document.addEventListener("keydown", function (event) {
  var key = event.key;

  // Verifica si se presionó una tecla numérica del 0 al 9 o un signo.
  if (/^[0-9.]$/.test(key)) {
    // Obtiene todos los botones con la clase "boton" y el valor correspondiente.
    var botones = document.querySelectorAll(".boton[value='" + key + "']");

    // Itera sobre los botones y simula el clic en cada uno de ellos.
    botones.forEach(function (boton) {
      boton.click();
    });
  }
});

var n1, n2
var operador;
var botonesOperadoresBasicos = document.querySelectorAll(".boton.operadorBasico");
var botonesOperadores = document.querySelectorAll(".boton.operador");

// Agrega un controlador de eventos de clic a cada botón
botonesOperadoresBasicos.forEach(function (boton) {
  boton.addEventListener("click", function () {
    n1 = parseFloat(pantalla.value);
    operador = this.value;
    console.log("NUMERO 1 " + n1 + "\nOPERADOR " + operador);
    pantalla.value = "";
  });
});

botonesOperadores.forEach(function (boton) {
  boton.addEventListener("click", function () {
    n1 = parseFloat(pantalla.value);
    operador = this.value;
    pantalla.value = "";
    if (operador == "x²") {
      pantalla.value = alCuadrado();
    } else if (operador == "%") {
      pantalla.value = porcentaje();
    }
  });
});

const botonResultado = document.querySelector('.boton.resultado');

botonResultado.addEventListener('click', function () {
  n2 = parseFloat(pantalla.value);
  operaciones();
  n1 = 0;
  n2 = 0;
  operador = "";
});

function operaciones() {
  switch (operador) {
    case "+":
      pantalla.value = sumar();
      break;
    case "-":
      pantalla.value = restar();
      break;
    case "x":
      pantalla.value = multiplicar();
      break;
    case "÷":
      pantalla.value = dividir();
      break;
    default:
      break;
  }
}

/***** OPERACIONES *****/
function sumar() {
  return n1 + n2;
}

function restar() {
  return n1 - n2;
}

function multiplicar() {
  return n1 * n2;
}

function dividir() {
  return n1 / n2;
}

function alCuadrado() {
  return n1 * n1;
}

function porcentaje() {
  return n1 / 100;
}

/***** LIMPIA LA PANTALLA *****/
const limpiar = document.querySelector('.boton.clear');

limpiar.addEventListener('click', function () {
  limpiarPantalla();
});

document.addEventListener("keydown", function (event) {
  if (event.key === "C" || event.key === "c") {
    limpiarPantalla();
  }
});

function limpiarPantalla() {
  document.getElementById("pantalla").value = "";
}

/***** BORRAR ULTIMO CARACTER *****/
const borrar = document.querySelector('.boton.borrar');

document.addEventListener("keydown", function (event) {
  if (event.keyCode === 8) {
    borrarNumero();
  }
});

borrar.addEventListener('click', function () {
  borrarNumero();
});

function borrarNumero() {
  var cadena = pantalla.value;
  pantalla.value = cadena.slice(0, -1);
}

/***** CAMBIA EL TEMA DE LA CALCULADORA *****/
var tema = document.getElementById("tema");
var body = document.querySelector("body");
var calculadora = document.getElementById("calculadora");
var estadoWhite = false; // Variable de estado
var botoness = document.getElementsByClassName('boton');

tema.addEventListener("click", function () {
  // Si la clase 'white' ya está presente, la eliminamos, si no, la añadimos
  if (estadoWhite) {
    calculadora.classList.remove('white');
    pantalla.classList.remove('white');
    document.body.classList.remove("white");
    for (var i = 0; i < botoness.length; i++) {
      botoness[i].classList.remove('white');
    }
  } else {
    document.body.classList.add("white");
    calculadora.classList.add('white');
    pantalla.classList.add('white');
    for (var i = 0; i < botoness.length; i++) {
      botoness[i].classList.add('white');
    }
  }
  // Cambiamos el estado
  estadoWhite = !estadoWhite;
});