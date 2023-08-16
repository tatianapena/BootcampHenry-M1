'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera 
  de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). 
  Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) { // esta es la info que se necesita para crear mi arbol
   this.value = value //nodo
   this.left = null
   this.right = null 
}
BinarySearchTree.prototype.insert = function (value){
   if (value < this.value){ // hacia la izquierda del arbol se analizan los numero menoresa al nodo
      if(this.left){ // tengo algun valor en mi izquierda? si es asi, es decir que esta ocupada
         this.left.insert(value) // solo entro y hago recursion solo si la rama esta ocupada, es decir, que inicio mi funcion, value<this.root?
      }
      else { // entro aqui si no tengo ningun valor en la izquierda y es cuando lo creo.
         this.left = new BinarySearchTree(value)
      }
   }
   else { // si es mayor o igual entro a la derecha
      if(this.right){ // si a la derecha hay un valor? si es asi , se hace recursion.
         this.right.insert(value) // entro aqui y hago recursion
      }
      else { // si no hay ningun valor
         this.right = new BinarySearchTree(value) // aqui creo mi arbol
      }
   }
}

BinarySearchTree.prototype.size = function (){
   if(this.left === null && this.right === null) return 1; // porque siempre el arbol inicia con un valor, x eso lo minimo que puede retornar es null.
   
   if(this.left !== null && this.right === null) return 1 + this.left.size();

   if(this.right !== null && this.left === null) return 1 + this.right.size();

   if(this.left !== null && this.right !== null) return 1 + this.left.size() + this.right.size();

}

BinarySearchTree.prototype.contains = function(value){
   if(this.value === value) return true; // compara el valor que le estoy dando con el valor que esta en mi pirmer arbol que es con el que inicia
                                         // si no es asi pasa al sgte if.
   if(value > this.value){ // el valor que le doy es mayor al que esta en mi arbol? si es asi entra en este if (derecha)
      if(this.right === null) return false; // la derecha esta vacia? No, si la respuesta es no, hago recursion, vuelvo a llamar a la fn BinarySearchTree.prototype.contains, e ingreso nuevamente
      return this.right.contains(value)
   }
   if (value < this.value){ // aca igual si no se cumple el anterior if, salta aqui. y revisa la izquierda ya que si el numero es menor que el de mi arbol revisara por aqui.
      if(this.left === null) return false;
      return this.left.contains(value)
   }
}

BinarySearchTree.prototype.depthFirstForEach = function(cb, pedido){

   // cb = function (value){
   //    let array = [];
   //    array.push(value)
   // }

   if(pedido === 'in-order' || pedido === undefined){
      if(this.left) this.left.depthFirstForEach(cb,pedido);
      cb(this.value);
      if(this.right) this.right.depthFirstForEach(cb,pedido);
   }

   if(pedido === 'pre-order'){
      cb(this.value);
      if(this.left) this.left.depthFirstForEach(cb,pedido);
      if(this.right) this.right.depthFirstForEach(cb,pedido);
   }

   if(pedido === 'post-order'){
      if(this.left) this.left.depthFirstForEach(cb,pedido);
      if(this.right) this.right.depthFirstForEach(cb,pedido);
      cb(this.value);
   }
}

BinarySearchTree.prototype.breadthFirstForEach = function(cb, array = []){
   if(this.left!== null){ // si a la izquierda hay un valor agregamelo a mi array.
      array.push(this.left)
   }
   if(this.right!==null){ // si a la derecha hay un valor agregamelo a mi array.
      array.push(this.right)
   }
   cb(this.value);

   if(array.length > 0){ // mi array de arriba que he ido llenando con el cb(this.value), es mayor a cero, es decir hay algun valor adentro? Si 
      array.shift().breadthFirstForEach(cb,array) // como es si mi respuesta, entonces sacaque el ultimo valor del array y le aplicamos la fn de recursion
   } // y asi entre a esta funcion nuevamente.

}

// const miArbol = new BinarySearchTree(5) // este es el valor de arranque de mi root
// miArbol.insert(2)

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
