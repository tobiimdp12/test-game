// No cambies los nombres de las funciones.

export function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Tu código:
  let response = "";

  if (x > y) {
    response = x;
  } else {
    response = y;
  }
  return response;
}

export function mayoriaDeEdad(edad) {
  // Tu código:
  let response = "Not allowed";
  if (edad >= 18) {
    response = "Allowed";
  }
  return response;
}

export function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico.
  // Tu código:
  let response = "Offline";
  if (status === 1) {
    response = "Online";
  }

  if (status === 2) {
    response = "Away";
  }

  if (status === 3) {
    response = "Offline";
  }

  return response;
}

export function saludo(idioma) {
  // Tu código:
  let response = "Hola!";

  switch (idioma) {
    case "aleman":
      response = "Guten Tag!";
      break;
    case "ingles":
      response = "Hello!";
      break;
    case "mandarin":
      response = "Ni Hao!";
      break;
    case "frances":
      response = "Hola!";
      break;
  }
  return response;
}

export function colors(color) {
  //Usar el statement Switch.
  // Tu código:
  let response = "Color not found";

  switch (color) {
    case "blue":
      response = "This is blue";
      break;
    case "red":
      response = "This is red";
      break;
    case "green":
      response = "This is green";
      break;
    case "orange":
      response = "This is orange";
      break;
    case "pink":
      response = "Color not found";
      break;
  }
  return response;
}

export function esDiezOCinco(numero) {
  // Tu código:
  let response = false;

  if (numero === 5 || numero === 10) {
    response = true;
  }
  return response;
}

export function estaEnRango(numero) {
  // Tu código:
  let response = false;
  if (numero > 20 && numero < 50) {
    response = true;
  }
  return response;
}

export function esEntero(numero) {
  // Tu código:

  return Number.isInteger(numero);
}

export function fizzBuzz(numero) {
  // Tu código:
  let response = "";

  if (numero % 3 === 0) {
    response = "fizz";
  }
  if (numero % 5 === 0) {
    response = "buzz";
  }

  if (numero % 3 === 0 && numero % 5 === 0) {
    response = "fizzbuzz";
  }
  if (numero % 3 !== 0 && numero % 5 !== 0) {
    response = numero;
  }

  return response;
}

export function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos.
  // Tu código:
  let response=false;
  if (num1 > num2 && num1 > num3 && num1 > 0) {
    response = "Número 1 es mayor y positivo";
  }

  if (num1 < 0 || num2 < 0 || num3 < 0) {
    response = "Hay negativos";
  }

  if (num3 > num2 && num3 > num1 && num3 > 0) {
    response = num3 + 1;
  }

  if (num3 === 0 || num2 === 0 || num1 === 0) {
    response = "Error";
  }
  return response;
}

export function esPrimo(n) {
  /// Tu código:
  if (n <= 1) return false;

  for (let i = 2; i <= n - 1; i++) if (n % i == 0) return false;

  return true;
}

export function esVerdadero(valor) {
  // Tu código:
  let response;

  if (valor === true) {
    response = "Soy verdadero";
  } else {
    response = "Soy falso";
  }
  return response;
}

export function tablaDelSeis() {
  // Tu código:
  let tablaDel6 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  tablaDel6 = tablaDel6.map((num) => {
    return num * 6;
  });

  return tablaDel6;
}

export function tieneTresDigitos(numero) {
  // Tu código:
  let response = false;
  if (numero >= 100 && numero <= 999) {
    response = true;
  }
  return response;
}

export function doWhile(numero) {
  //Usar el bucle do ... while.
  let i = 0;
  do {
    numero += 5;
    i++;
  } while (i < 8);
  return numero;
}
