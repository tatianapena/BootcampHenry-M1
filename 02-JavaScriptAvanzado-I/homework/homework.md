# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1; // contexto global
var a = 5;
var b = 10;
var c = function (a, b, c) {
   var x = 10; 
   console.log(x);// x =1, luego entra a la funcion y se sobreescribe x = 10 
   console.log(a);// a = 8 , porque el valor se encuentra en el contexto global donde se pasa por parametro.
   var f = function (a, b, c) {
      b = a; //b= 8
      console.log(b); // b= 8
      b = c; // b=10
      var x = 5; // x = 5
   };
   f(a, b, c); // a = 8 b = 9 c = 10. b es = 9 porque el valor sale del contexto global que es pasado por parametros.
   console.log(b); // b = 9
};
c(8, 9, 10);
console.log(b); // b = 10
console.log(x); // x = 1
```

```javascript
console.log(bar); // bar= undefinded
console.log(baz); // baz = error
foo(); // hola xq es hoisting: ejecutar una funcion antes de definirla.
function foo() {
   console.log('Hola!'); // hola
}
var bar = 1; // bar= undefinded
baz = 2; // no funciona xq no existe 
```

```javascript
var instructor = 'Tony';
if (true) {
   var instructor = 'Franco';
}
console.log(instructor); // franco
```

```javascript
var instructor = 'Tony';
console.log(instructor); // tony
(function () {
   if (true) {
      var instructor = 'Franco';
      console.log(instructor); // franco
   }
})();
console.log(instructor); // tony
```

```javascript
var instructor = 'Tony';
let pm = 'Franco';
if (true) {
   var instructor = 'The Flash';
   let pm = 'Reverse Flash';
   console.log(instructor); // 'The Flash'
   console.log(pm); // 'Reverse Flash'
}
console.log(instructor); // 'The Flash' porq el var no conoce las implementaciones de bloque / scope de bloque. y ademas porque el var esta dentro de un IF y no dentro de una funcion para respetarla.
console.log(pm); // franco
```

### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" // = 2
"2" * "3" // = 6
4 + 5 + "px" // 9px por el orden en el que se ejecuta la operacion, es decir, por la precedencia. Primero va de izquierda a derecha, primero hace la opeacion matematica de suma y luego hace la concatenacion.
"$" + 4 + 5 // $45 aqui en este caso primero hace la concatenacion $4 + 5 = $45
"4" - 2 // 2
"4px" - 2 // nan porque estan intentando sumar una palabra con un numero 
7 / 0 // infinity
{}[0] // undefined
parseInt("09") // 9
5 && 2 // 2 porque cuando se comparan 2 elementos siempre devuelve el de la derecha cuando son TRue.
2 && 5 // 5
5 || 0 // 5 cuando es el O devuelve el de la izquierda
0 || 5 // 5 porque 0 se toma como falso
[3]+[3]-[10] // cuando hay un array que suma siempre se concatenan,(33). Pero luego si realiza la operacion matematica de la resta 33-10= 23
3>2>1 // 3>2: si, entonces (true)>1 : false
[] == ![] // True, porque la igualdad es solo de == y no una igualdad estricta de ===

```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a); // undefined, porque se ejecuto a una variable sin ser definida antes.
   console.log(foo()); // 2, porque hoisting permite acceder a una funcion antes que sea definida.

   var a = 1;
   function foo() {
      return 2; // undefined
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
   if (food) {
      var snack = 'Friskies';
      return snack; // 'Friskies
   }
   return snack; // 'Meow Mix'
}

getFood(false); // undefined porque la funcion la hace falsa la condicion
```

### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname; //'Aurelio De Rosa'
      },
   },
};

console.log(obj.prop.getFullname()); //'Aurelio De Rosa'

var test = obj.prop.getFullname;

console.log(test()); // undefined
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() { 
  console.log(1); // 1. ejecuta esto
  setTimeout(function () { 
     console.log(2); // 4. por ultimo realiza esta operacion, porque se va a esperar 1 segundo.
  }, 1000);
  setTimeout(function () { 
     console.log(3); // 3. queda esperando los 1000 segundos hasta mostrarla por consola. esta tiene 0 segundos pero de todos modos va a la pila aunque se ejecute inmediatamente.
  }, 0);
  console.log(4); // 2. ejecuta esto
}

printing(); // el content global : 1 4 3 2
```

</br >

---

## **✅ FEEDBACK**

### Usa este [**formulario**](https://docs.google.com/forms/d/e/1FAIpQLSe1MybH_Y-xcp1RP0jKPLndLdJYg8cwyHkSb9MwSrEjoxyzWg/viewform) para reportar tus observaciones de mejora o errores. Tu feedback es muy importante para seguir mejorando el modelo educativo.
