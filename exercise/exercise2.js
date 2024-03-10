/*Write a function that:
•	Takes in an array of numbers.
•	Doubles the value of each number in the array.
•	Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]*/

let num = [1,2,3,4,5,6,7,8,9]

const doubleNum = (element) => element * 2

    let double = num.map(doubleNum);
    document.getElementById("resultado").textContent = double;
    console.log( num );
    console.log( double );

