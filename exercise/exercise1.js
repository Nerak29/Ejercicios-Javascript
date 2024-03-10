let arr = ["This", "is", "a", "sentence."];

function printOutString(arr) {
   let oracion = arr.join(" ");
   console.log(oracion);
}
document.getElementById("resultado").textContent = arr.join(" ");
printOutString(arr);
