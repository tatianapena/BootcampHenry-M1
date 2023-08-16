'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length <=1 ) return array;

  let pivote = array[Math.floor(Math.random() * array.length)];
  let left = [];
  let right = [];
  let igual = [];

  
  for(let i =0; i<array.length; i ++){
    if(array[i]<pivote) left.push(array[i]);

    else if (array[i] > pivote) right.push(array[i]);

    else if (array[i] === pivote) igual.push(array[i]);
  }

return quickSort(left).concat(igual).concat(quickSort(right));
}

function mergeSort(array) { // EJE: [9,7,3,1,5,2,6] 7/2 = 3.5 MATH.FLOOR = 3
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:


  if(array.length < 2 ) return array; //CASO DE CORTE. porque lo minimo es que quede 1 elemento dentro del array. Si hay mas de 1 es que hacemos recursion y llamamos a la funcion MERGE SORT
  const mitad = Math.floor(array.length / 2) // 7/2 = 3.5 Math.floor = 3
  let left = array.slice(0, mitad) // el metodo slice corta el array y me da uno nuevo. empieza en la posicion 0 y lo corta en 3, pero el ultimo no lo incluye.
  let right = array.slice(mitad)// si le paso un solo parametro no va tener q cortar, o la otra opcion es: (mitad, array.length)inicia en la mitad que es = 3 y va hasta el final y el ultimo no lo incluye. array.length= 7, pero va a llegar hasta el indice 6.
   
  array = [] // quedo vacio porque sus elementos los parti en 2 y los guarde en let left y left right

  left = mergeSort(left)
  right = mergeSort(right)

  while(left.length && right.length){ // mientras que mi array de la izq tenga elemento y mi array de la derecha tenga elementos los voy a comparar.
    if(left[0]<right[0]){ // comparo los valores de los indices ceros
      array.push(left.shift()) // porque lo saco al que me de menor entre ambos valores del indice cero y lo pusheo en un nuevo array.
    }
    else {
      array.push(right.shift())
    }
  }
// ahora concateno. porque ya acabe la comparacion.:
array = array.concat(left, right)
  //okey probemos ahora
return array;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
