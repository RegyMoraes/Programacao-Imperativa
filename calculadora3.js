//calculadora3.js
//Função adicionar
function adicionar (a, b) {
   return a + b;
}
   console.log (adicionar (3,3)); 

   //Função subtrair
function subtrair (a, b) {
   return a - b;
}
   console.log (subtrair(3,3)); 

    //Função Multiplicar
function multiplicar (a, b) {
    return a * b;
 }
    console.log (multiplicar(3,3)); 

     //Função Dividir
function dividir (a, b) {
    return a / b;
 }
    console.log (dividir(3,3)); 
// calculadora 2 
    console.log("Teste de Operações");
    console.log(adicionar (1,100)); 
    console.log(subtrair (100,4)); 
    console.log(multiplicar(50,2)); 
    console.log(dividir(100,2)); 
    
//calculadora 3
function NumeroQuadrado(a){
    return Math.pow(a,a);
}
console.log(NumeroQuadrado(4))

function Media3Numeros(a, b, c) {
    return adicionar (adicionar(a,b),c) /3;
}
console.log(Media3Numeros (15, 18, 23));

function CalcularPorcentagem(a, b){
    return multiplicar (a, dividir(b, 100));
    }
console.log (CalcularPorcentagem (300, 15));

function GeradorPorcentagem(a, b){
    return dividir(b, multiplicar(a, 100));
    }
console.log(GeradorPorcentagem (2,200)+ "%") ;