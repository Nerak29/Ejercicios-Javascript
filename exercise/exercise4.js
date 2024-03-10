/*let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.*/

let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

const array = student1Courses.concat(student2Courses);//unir
const resultado = array.filter(array  => array.length > 9 ); 

document.getElementById("resultado").textContent = resultado

console.log(array);
console.log(resultado);


