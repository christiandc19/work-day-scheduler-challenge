var task1 = document.querySelector(".textarea");
var save9 = document.querySelector("#save9am")

var californiaTime = document.querySelector("#currentDay");
var currentTime = moment();
californiaTime.textContent = currentTime.format("MMM, DD, YYY - hh:mm:ss a");

function saveTask9() {

console.log(task1);
}


save9.addEventListener("click", saveTask9)