'use strict';

function BinarioADecimal(num) {
   
var numBinarios = num.split('').reverse();

var decimal =0;
   for(var i=numBinarios.length-1; i>=0; i--){
     decimal+= numBinarios[i]*Math.pow(2,i);
   }
   return decimal;
}

function DecimalABinario(num) {
   let binario =[];
   while (num>=1){
   let residuo = Math.trunc(num%2);
   
     num = num / 2;
     binario.unshift(residuo);
   }
   return binario.join('');
   
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
