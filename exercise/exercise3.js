/*Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.*/

const numeros = [5, 8, 20, 3, 15 ]
const inicio = 0;
 const suma = numeros.reduce((acumulador, valor) => acumulador + valor, inicio);
const partida = 1
 const producto = numeros.reduce((acumulador, valor) => acumulador * valor, partida);
 
 document.getElementById("resultado").textContent = suma;
 document.getElementById("resultadoproduct").textContent = producto;

 console.log("La suma del array es: " + suma);
console.log("El producto del array es: " + producto);



