'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let factores = [1] // guardo el 1 de entrada porq siempre va estar en las operaciones de factoreo
  let divisor = 2 // porque es el numero mas pequeno con el que empezamos a dividir 
  while(num > 1){
    if(num % divisor === 0){ // eje si quiero hacer 15%2 NO lo puedo hacer porque esa operacion NO me da cero.
      factores.push(divisor) // porq debo ir guardando todos sus divisores
      num = num / divisor
    }
    else {
      divisor ++
    } 
  }
return factores;
}

function bubbleSort(array) {
 
  for(let i = 0; i<array.length; i++){ // que haga un recorrido iniciando en la posicion 0
    for(let j = i+1; j<array.length; j++){ // j arranca en una posicion dsps de i
      if(array[i] > array[j]){ // es decir que el valor que esta en i sea mayor al valor que esta em J, MUEVO ESE VALOR DE I HACIA EL FINAL DEL ARRAY.
        let aux = array[i] // para ir guardando en un sitio el valor que voy a ir moviendo, este es el valor q compare antes y como es mayo lo saco y guardo aqui, para luego moverlo.
          array[i] = array[j] // con el aux saque el valor de i, ahora J se mueve a donde estaba i.
          array[j] = aux; // ahora aux va tomar el valor de J 
      }
    }
  }
return array;
}
      

  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:





function insertionSort(array) { // arranca a comparar de atras para delante.
  for(let i =1; i<array.length; i++){
    let j = i-1 // porq necesito que la posicion de j vaya avanzando pero detras de i.
    let aux = array[i]
    while(j>=0 && aux < array[j]){
      array[j+1] = array[j] // array[j] va a pisar el valor que traia array[j+1]
      j--
    }
    array[j+1] = aux
  }
return array;
}
// Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
// array [9, 3, 2, 5, 8, 1]
        //  i
        //   j
  for (let i=0; i<array.length; i++){
    let min = i; // 0

    for (let j= i+1; j<array.length; j++){
      if(array[j] < array[min]){ // 3<9 ? si
        min = j; // ahora min ocupa la posicion de J, MIN = [1]
      } // y va avanzando j una posicion, porque ingresa de nuevo al bucle.
    }
// entonces cuando ya no hayan mas posiciones para mover a J pasa lo siguiente:

    if(i !== min){ // i =[0] i nunca avanzo, min quedo con la posicion [5]. array[min], array[5]=9, son distintos? si
      let aux = array[i] // aux = 9, nueve es lo que tengo en la posicion de i[0]
      array[i] = array[min] // array[i] = 1 , array[1]=9 lo vas a cambiar por lo que hay en la posicion de array[min]= array[5]=1. es decir cambias el 9 por el 1.
      array[min] = aux // ahora array[min] vale 1, entones ese 1 va ser igual a lo q habia en aux, aux tenia un valor de 9, alli vas a colocar el 1.
    }
  }
return array
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
