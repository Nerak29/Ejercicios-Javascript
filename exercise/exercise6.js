/*Realizar una función que realice el algoritmo de burbuja.
Entrada [3, 6, 12, 5, 100, 1 ]
Salida [1, 3, 5, 6, 12, 100]*/

const array = [3, 6, 12, 5, 100, 1];

function burbuja(array){
    for( let i = 0; i < array.length -1; i++){
        for( let j = 0; j < array.length -1; j++){
            if( array [j] > array[j+1]) {
                let uno = array[j]
                array[j] = array[j+1]
                array[j+1] = uno
            }
        }
    }
};

burbuja(array);
document.getElementById("resultado").textContent = array;

console.log(array);





