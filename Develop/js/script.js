var save9 = document.querySelector("#save9am") // 9:00 AM Save Button
var save10 = document.querySelector("#save10am") // 10:00 AM Save Button
var save11 = document.querySelector("#save11am") // 11:00 AM Save Button
var save12 = document.querySelector("#save12nn") // 12:00 NN Save Button
var save1 = document.querySelector("#save1pm") // 1:00 PM Save Button
var save2 = document.querySelector("#save2pm") // 2:00 PM Save Button
var save3 = document.querySelector("#save3pm") // 3:00 PM Save Button
var save4 = document.querySelector("#save4pm") // 4:00 PM Save Button
var save5 = document.querySelector("#save5pm") // 5:00 PM Save Button

var californiaTime = document.querySelector("#currentDay");
var californiaHour = document.querySelector("#demo");

var currentTime = moment();
californiaTime.textContent = currentTime.format("MMM, DD, YYY - hh:mm:ss a");
californiaHour.textContent = currentTime.format("hh");

// SAVE TO LOCAL STORAGE FUNCTION
function saveItems() {
    var Task9am = document.getElementById("textarea9").value;
    localStorage.setItem("task", Task9am);

    var Task10am = document.getElementById("textarea10").value;
    localStorage.setItem("task10", Task10am);

    var Task11am = document.getElementById("textarea11").value;
    localStorage.setItem("task11", Task11am)

    var Task12nn = document.getElementById("textarea12").value;
    localStorage.setItem("task12", Task12nn)

    var Task1pm = document.getElementById("textarea1").value;
    localStorage.setItem("task1", Task1pm)

    var Task2pm = document.getElementById("textarea2").value;
    localStorage.setItem("task2", Task2pm)

    var Task3pm = document.getElementById("textarea3").value;
    localStorage.setItem("task3", Task3pm)

    var Task4pm = document.getElementById("textarea4").value;
    localStorage.setItem("task4", Task4pm)
    
    var Task5pm = document.getElementById("textarea5").value;
    localStorage.setItem("task5", Task5pm)
  }

// RETRIEVE FROM LOCAL STORAGE FUNCTION
  getSavedItems = () => {
    var gettask9 = localStorage.getItem("task");
    document.getElementById("textarea9").innerHTML = gettask9;

    var gettask10 = localStorage.getItem("task10");
    document.getElementById("textarea10").innerHTML = gettask10;

    var gettask11 = localStorage.getItem("task11");
    document.getElementById("textarea11").innerHTML = gettask11;
 
    var gettask12 = localStorage.getItem("task12");
    document.getElementById("textarea12").innerHTML = gettask12;

    var gettask1 = localStorage.getItem("task1");
    document.getElementById("textarea1").innerHTML = gettask1;

    var gettask2 = localStorage.getItem("task2");
    document.getElementById("textarea2").innerHTML = gettask2;

    var gettask3 = localStorage.getItem("task3");
    document.getElementById("textarea3").innerHTML = gettask3;

    var gettask4 = localStorage.getItem("task4");
    document.getElementById("textarea4").innerHTML = gettask4;

    var gettask5 = localStorage.getItem("task5");
    document.getElementById("textarea5").innerHTML = gettask5;
}
  getSavedItems();


  save9.addEventListener("click", saveItems)
  save10.addEventListener("click", saveItems)
  save11.addEventListener("click", saveItems)
  save12.addEventListener("click", saveItems)
  save1.addEventListener("click", saveItems)
  save2.addEventListener("click", saveItems)
  save3.addEventListener("click", saveItems)
  save4.addEventListener("click", saveItems)
  save5.addEventListener("click", saveItems)

