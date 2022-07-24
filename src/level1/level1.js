// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

export function devolverString(string) {
  // Tu código:

  return string.toString();
}

export function suma(num1, num2) {
  // Tu código:
  let result = parseInt(num1 + num2);
  return result;
}

export function resta(num1, num2) {
  // Tu código:
  let result = parseInt(num1 - num2);
  return result;
}

export function multiplica(num1, num2) {
  // Tu código:
  let result = parseInt(num1 * num2);
  return result;
}

export function divide(num1, num2) {
  // Tu código:
  let result = parseFloat(num1 / num2);
  return result;
}

export function sonIguales(num1, num2) {
  // Tu código:

  return num1 === num2;
}

export function tienenMismaLongitud(str1, str2) {
  // Tu código:

  return str1.length === str2.length;
}

export function menosQueNoventa(num) {
  // Tu código:

  return num < 90;
}

export function mayorQueCincuenta(num) {
  // Tu código:

  return num > 50;
}

export function obtenerResto(x, y) {
  // Tu código:

  return x % y;
}

export function esPar(num) {
  // Tu código:

  return num % 2 === 0;
}

export function esImpar(num) {
  // Tu código:

  return num % 2 !== 0;
}

export function elevarAlCuadrado(num) {
  // Tu código:

  return num * num;
}

export function elevarAlCubo(num) {
  // Tu código:

  return num * num * num;
}

export function elevar(num, exp) {
  // Tu código:

  return Math.pow(num, exp);
}

export function redondearNumero(num) {
  // Tu código:

  return Math.round(num);
}

export function redondearHaciaArriba(num) {
  // Tu código:

  return Math.ceil(num);
}

export function numeroRandom() {
  // Tu código:

  return Math.random();
}

export function esPositivo(num) {
  // Tu código:
  let response = "";

  if (num > 0) {
    response = "Es positivo";
  } else if (num < 0) {
    response = "Es negativo";
  } else {
    response = false;
  }
  return response;
}

export function agregarSimboloExclamacion(str) {
  // Tu código:

  return str + "!";
}

export function combinarNombres(firstName, lastName) {
  // Tu código:

  return firstName + " " + lastName;
}

export function obtenerSaludo(name) {
  // Tu código:

  return `Hola ${name}!`;
}

export function obtenerAreaRectangulo(base, alt) {
  // Tu código:

  return base * alt;
}

export function retornarPerimetro(lado) {
  // Tu código:

  return lado * 4;
}

export function areaDelTriangulo(base, altura) {
  // Tu código:

  return (base * altura) / 2;
}

export function deEuroAdolar(euros) {
  //Supongamos que 1 euro equivale a 1.20 dólares.
  // Tu código:
  const dolarValue = 1.2;
  return euros * dolarValue;
}

export function esVocal(letra) {
  // Tu código:
  let response = "";
  if (letra.length > 1) {
    response = "Dato incorrecto";
  }
  if (
    letra === "a" ||
    letra === "e" ||
    letra === "i" ||
    letra === "o" ||
    letra === "u"
  ) {
    response = "Es vocal";
  } else {
    response = "Dato incorrecto";
  }

  return response;
}
