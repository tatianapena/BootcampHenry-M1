'use strict';

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor 
  (tener en cuenta el caso particular de una lista de un solo nodo
     y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad:
   el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo 
   cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al 
   ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
function LinkedList() {
  this.head = null;
}

function Node(value) { // esto es la info que tendra cada nodo que se crea.
  this.value = value;
  this.next = null;
}

LinkedList.prototype.add = function (value) {
  let newNode = new Node(value); // esto es para crear cada nodo. Esto se le dice instanciar un nodo.
       // Current es mi puntero y arranca en la cabecerea.
  if(!this.head) this.head = newNode // es lo mismo que si colocaramos this.head === null. Aca entra una sola vez para enganchar el primer nodo
                                   // Head { Node: { value: 5, next: null}}. esto quiere decir head crea un nodo y apunte alli.
  else {
    let current = this.head; // porque desde aqui arranca mi apuntador desde head. Current es mi apuntador.
    while(current.next){ // es lo mismo si dejaramos current.next !== null 
      current = current.next
    }
    current.next = newNode;
  }
}

LinkedList.prototype.remove = function(){ // no recibe paramentros porq siempre va a eliminar el ultimo nodo.
  
  // caso de la lista vacia:
  if(!this.head) return null; // esto es lo mismo this.head === null
  
  // caso de que haya un solo nodo:
  let current = this.head;
  if(!current.next){ //estoy parado en mi primer Nodo, si no hay un next, es decir si next no tiene nada, quiere decir que no hay mas nodo.
    let aux = this.head.value;  // al head hay que eliminarle su nodo, pero ese nodo que se elimina hay que mostrarle su valor antes de eliminarlo. eso pide el ejercicio.
                           // entonces ese valor lo debo guardar en una variable antes de eliminar mi nodo.
    this.head = null; // ya guarde mi variable ahora si puedo eliminar head. ya no esta mirando a nodo si no a null.
    return aux;
  }

  // Caso para elminar el ultimo nodo.
 while(current.next.next){ // debo ir mirando 2 next hacia delante, mientras existan estos 2 next va seguir iterando.
  current = current.next; // mi current es todo, son todos mis nodos. Head { Node: { value: 5, next: Node {value: 4, next}}}
 }
 // que sucede cuando se corta el while, es decir, cuando encuentre un null: y cuando yo encuentre ese null, debo eliminar ese nodo.
 let aux = current.next.value; // antes de eliminar al nodo, debo guardarle su valor en una variable. Current.next es mi ultimo nodo.
 current.next = null; // aqui elimino el nodo.
 return aux;
}

// De esta manera va a funcionar el search si es un valor lo que busca.
LinkedList.prototype.search = function(arg){
  let current = this.head;// current es this.head, pero que es this head?, Head es lo sgte objeto {Node{value: 9, next: Node{ value:7, next: Node {value: 2, next: null}}}
 
while (current) {
    if(typeof arg === 'function'){ // arg es una funcion, si no lo es, pasa directamente al else. Ya que arg es un value.
      if(arg(current.value)) return current.value; 
    } 
    else {
      if(current.value === arg) return arg; // current.value es igual al valor que estoy buscando?No. 
    }              
    current = current.next //entonces current va ser igual al sgte nodo y asi sucesivamente hasta que lo encuntre y lo arroja.
  }
  return null; // si no encuentra el valor que le doy dentro de los nodos, pues retorna null
}

let miLista = new LinkedList();
miLista.add(2);
miLista.add(3);
miLista.remove();
miLista.search(2);



/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
function HashTable() { // esta es una funcion constructora y adentro siempre debe tener la palabra this acompañado de las variables a utilizar
  this.array = [] // aqui voy armar como especie de una tabla con dos columnas: bucket (num de posiciones de almacenamiento dentro del array, y la otra columna corresponde a clave y valor)
  this.numBuckets = 35 // numero total de posiciones que va a tener nuestro array
}

// este metodo hash me dice en que posicion guardo mi key. me dice en que posicion.
HashTable.prototype.hash = function (key){ // de esta manera es como se le agrega un metodo a una funcion constructora
  let hash = 0;
  for (let i = 0; i<key.length ; i++){
    hash += key.charCodeAt(i)
  }
  return hash % this.numBuckets //como no me puede dar un num > 35 (total de posiciones de mi bucket)entonces debo hacer lo sgte:
    //con un modulo: retorname hashCount % numBuckets si hago esta operacion me estoy quedando con el residuo y ese valor es la posicion que va obtener dentro del bucket.
    // ejemplo si al aplicarle el charCodeAt a mi string me dio unos nums estos los sume y los guarde en hashCount.
    // luego hago por ejemplo si la suma me dio 28 % 35 (numBuckets) = 28. entonces esa es la posicion donde se va 
    // almacenar dentro de mi bucket.
}

// este metodo se encarga de generar y guardar el key:value en la posicion que le corresponde:
HashTable.prototype.set = function(key, value){ // metodo que guarda las cosas en el bucket correcto.
  if(typeof key !== 'string') throw TypeError('Keys must be string')
  
  let index = this.hash(key) // aqui invoco al metodo hash para saber donde guardar mi key, y le creo una variable para guardar esa info.
   // siguiendo el ejemplo anterior el hash me arrojo 28 ese numero lo guardo en esta variable let index.
  if(!this.array[index]) this.array[index] = {} // aqui voy averiguar si en la posicion 28 de mi array hay otro string o si ESTA VACIA. se coloca !para negar lo que tengo dentro del if.
  // si no hay ningun valor adentro del parentesis, entonces:en esa posicion como no hay nada, le creo un objeto.               
  
  this.array[index][key]= value // ahora como hago para agregar en esa posicion del index mi key(propiedad) y mi value. Como le agrego propiedades a un objeto o como accedo a ellas a traves de los []
}

HashTable.prototype.get = function(key){
  let index = this.hash(key)
  return this.array[index][key]
}

HashTable.prototype.hasKey = function(key){
  let index = this.hash(key);
  return !!this.array[index][key] // de esta maner me verifica de una si dentro de mi posicion exite ya la key, retorna true y si no false.
}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Node,
   LinkedList,
   HashTable,
};
