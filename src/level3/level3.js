// No cambies los nombres de las funciones.

export function devolverPrimerElemento(array) {
  // Tu código:

  return array[0];
}

export function devolverUltimoElemento(array) {
  // Tu código:

  return array[array.length - 1];
}

export function obtenerLargoDelArray(array) {
  // Tu código:

  return array.length;
}

export function incrementarPorUno(array) {
  // Tu código:

  return array.map((number) => number + 1);
}

export function agregarItemAlFinalDelArray(array, elemento) {
  // Tu código:
  let arr = array;
  arr.push(elemento);
  return arr;
}

export function agregarItemAlComienzoDelArray(array, elemento) {
  /// Tu código:
  let arr = array;
  arr.unshift(elemento);
  return arr;
}

export function dePalabrasAFrase(palabras) {
  // Tu código:

  return palabras.join(" ");
}

export function arrayContiene(array, elemento) {
  // Tu código:

  return array.includes(elemento);
}

export function agregarNumeros(numeros) {
  // Tu código:

  return numeros.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
}

export function promedioResultadosTest(resultadosTest) {
  // Tu código:
  let sum = resultadosTest.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  let prom = sum / resultadosTest.length;
  return prom;
}

export function numeroMasGrande(numeros) {
  // Tu código:

  return Math.max(...numeros);
}

export function multiplicarArgumentos() {
  // Tu código:

  return;
}

export function cuentoElementos(arreglo) {
  // Tu código:

  return arreglo.filter((n) => n > 18).length;
}

export function diaDeLaSemana(numeroDeDia) {
  // Tu código:
  switch (numeroDeDia) {
    case 1:
      return "Es fin de semana";
    case 7:
      return "Es fin de semana";
    case 3:
      return "Es dia Laboral";
    case 2:
      return "Es dia Laboral";
    default:
      return "es un dia (?";
  }
}

export function empiezaConNueve(n) {
  // Tu código:

  return n.toString().charAt(0) == 9 ? true : false;
}

export function todosIguales(arreglo) {
  // Tu código:

  return arreglo.every((n) => n === arreglo[0]);
}

export function mesesDelAño(array) {
  // Tu código:

  return array.includes("Marzo") &&
    array.includes("Noviembre") &&
    array.includes("Enero")
    ? ["Marzo", "Noviembre", "Enero"]
    : "No se encontraron los meses pedidos";
}

export function mayorACien(array) {
  // Tu código:

  return array.filter((n) => n > 100);
}

export function breakStatement(numero) {
  // Tu código:
  let arr = [];
  for (let index = 0; index < 10; index++) {
    if (index != numero) {
      numero = numero + 2;
      arr[index] = numero;
    } else {
      return "Se interrumpió la ejecución";
    }
  }
  return arr;
}

export function continueStatement(numero) {
  // Tu código:
  let arr = [];
  for (let index = 0; index < 10; index++) {
    if (index === 5) {
      continue;
    }
    numero = numero + 2;
    arr[index] = numero;
  }
  return arr.filter((n) => n != undefined);
}
