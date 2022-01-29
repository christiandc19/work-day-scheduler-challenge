
var californiaTime = document.querySelector("#currentDay");


var currentTime = moment();
californiaTime.textContent = currentTime.format('MMMM Do YYYY, h:mm:ss a'); // January 28th 2022, 11:52:38 pm
var currentHour = moment().format('h'); // January 28th 2022, 11:52:38 pm
var am = true;

// create elements for timeblock
function showSched() {
    // $(".container").empty();
    var officeHours = 9;

    for (var i = 1; i < 10; i++) {
      var containerRow = $("<div class='row'>");
      var hourBox = $("<div class='col-1 hour time-block'>");
      if (am) {
        hourBox.text(officeHours+ ":00AM");
      } else {
        hourBox.text(officeHours + ":00PM");
      }

      var taskBox = $("<textarea class='col-10 description textarea' id='text-area'>");
      taskBox.addClass("description-" + i);
      
      if(officeHours == currentHour) {
        taskBox.addClass("present");
      } else  if (officeHours > currentHour){
        taskBox.addClass("future");
      } else {
        taskBox.addClass("past");
      }

      var btnBox = $("<button class='col-1 time-block saveBtn' id='btn-box'>Save</button>" );

      // Append Container Elements
      $(".container").append(containerRow);
      containerRow.append(hourBox);
      containerRow.append(taskBox);
      containerRow.append(btnBox);
      officeHours++;
      
      if (officeHours > 12) {
        officeHours = 1;
        am = false;
        officeHours++;

      }
    
    // save-item functon in a closure function

    function saveFunc(index) {
      btnBox.click(function() {

        var taskContainer = $(".description-" + index); //get the value of the textarea
        var task = $(".description-" + index).val(); //get the value of the textarea

        if(index === 1){
        console.log(task);        
        localStorage.setItem("task1", task)

        } else if (index === 2) {
          console.log(task);
          localStorage.setItem("task2", task)        
        }  else if (index === 3) {
          localStorage.setItem("task3", task)
        }  else if (index === 4) {
          localStorage.setItem("task4", task)
        }  else if (index === 5) {
          localStorage.setItem("task5", task)
        }  else if (index === 6) {
          localStorage.setItem("task6", task)
        }  else if (index === 7) {
          localStorage.setItem("task7", task)
        }  else if (index === 8) {
          localStorage.setItem("task8", task)
        }  else if (index === 9) {
          localStorage.setItem("task9", task)
        } 

      });
    }
    saveFunc(i);
  }
}
showSched();


function getVal() {
  var getTask9am = localStorage.getItem("task1");
  document.querySelector(".description-1").innerHTML = getTask9am;

  var getTask10am = localStorage.getItem("task2");
  document.querySelector(".description-2").innerHTML = getTask10am;
  console.log(getTask10am);

  var getTask11am = localStorage.getItem("task3");
  document.querySelector(".description-3").innerHTML = getTask11am;
  console.log(getTask11am);

  var getTask12pm = localStorage.getItem("task4");
  document.querySelector(".description-4").innerHTML = getTask12pm;
  console.log(getTask12pm);

  var getTask1pm = localStorage.getItem("task5");
  document.querySelector(".description-5").innerHTML = getTask1pm;
  console.log(getTask1pm);

}
getVal();



// // SAVE TO LOCAL STORAGE FUNCTION
// function saveItems() {
//     var Task9am = document.getElementById("textarea9").value;
//     localStorage.setItem("task", Task9am);

//     var Task10am = document.getElementById("textarea10").value;
//     localStorage.setItem("task10", Task10am);

//     var Task11am = document.getElementById("textarea11").value;
//     localStorage.setItem("task11", Task11am)

//     var Task12nn = document.getElementById("textarea12").value;
//     localStorage.setItem("task12", Task12nn)

//     var Task1pm = document.getElementById("textarea1").value;
//     localStorage.setItem("task1", Task1pm)

//     var Task2pm = document.getElementById("textarea2").value;
//     localStorage.setItem("task2", Task2pm)

//     var Task3pm = document.getElementById("textarea3").value;
//     localStorage.setItem("task3", Task3pm)

//     var Task4pm = document.getElementById("textarea4").value;
//     localStorage.setItem("task4", Task4pm)
    
//     var Task5pm = document.getElementById("textarea5").value;
//     localStorage.setItem("task5", Task5pm)
//   }

// // RETRIEVE FROM LOCAL STORAGE FUNCTION
//   getSavedItems = () => {
//     var gettask9 = localStorage.getItem("task");
//     document.getElementById("textarea9").innerHTML = gettask9;

//     var gettask10 = localStorage.getItem("task10");
//     document.getElementById("textarea10").innerHTML = gettask10;

//     var gettask11 = localStorage.getItem("task11");
//     document.getElementById("textarea11").innerHTML = gettask11;
 
//     var gettask12 = localStorage.getItem("task12");
//     document.getElementById("textarea12").innerHTML = gettask12;

//     var gettask1 = localStorage.getItem("task1");
//     document.getElementById("textarea1").innerHTML = gettask1;

//     var gettask2 = localStorage.getItem("task2");
//     document.getElementById("textarea2").innerHTML = gettask2;

//     var gettask3 = localStorage.getItem("task3");
//     document.getElementById("textarea3").innerHTML = gettask3;

//     var gettask4 = localStorage.getItem("task4");
//     document.getElementById("textarea4").innerHTML = gettask4;

//     var gettask5 = localStorage.getItem("task5");
//     document.getElementById("textarea5").innerHTML = gettask5;
// }
//   getSavedItems();


//   save9.addEventListener("click", saveItems)
//   save10.addEventListener("click", saveItems)
//   save11.addEventListener("click", saveItems)
//   save12.addEventListener("click", saveItems)
//   save1.addEventListener("click", saveItems)
//   save2.addEventListener("click", saveItems)
//   save3.addEventListener("click", saveItems)
//   save4.addEventListener("click", saveItems)
//   save5.addEventListener("click", saveItems)


//var save9 = document.querySelector("#save9am") // 9:00 AM Save Button
// var save10 = document.querySelector("#save10am") // 10:00 AM Save Button
// var save11 = document.querySelector("#save11am") // 11:00 AM Save Button
// var save12 = document.querySelector("#save12nn") // 12:00 NN Save Button
// var save1 = document.querySelector("#save1pm") // 1:00 PM Save Button
// var save2 = document.querySelector("#save2pm") // 2:00 PM Save Button
// var save3 = document.querySelector("#save3pm") // 3:00 PM Save Button
// var save4 = document.querySelector("#save4pm") // 4:00 PM Save Button
// var save5 = document.querySelector("#save5pm") // 5:00 PM Save Button








//   9:00 AM
//   <div class="row">
//     <p class="timeBlockItem col-1 border border-info text-center" id="text-9am">9:00AM</p>
//     <textarea class="timeBlockItem col-10 border border-info textarea1" name="" id="textarea9" cols="30" rows="10"></textarea>
//     <button class="timeBlockItem saveBtn col-1 border border-info" id="save9am">Save</button>
//   </div>
// <!-- 10:00 AM -->
// <div class="row ">
//   <p class="timeBlockItem col-1 border border-info text-center" id="text-10am">10:00AM</p>
//   <textarea class="timeBlockItem col-10 border border-info textarea1" name="" id="textarea10" cols="30" rows="10"></textarea>
//   <button class="timeBlockItem saveBtn col-1 border border-info" id="save10am">Save</button>
// </div>
// <!-- 11:00 AM -->
// <div class="row ">
//   <p class="timeBlockItem col-1 border border-info text-center" id="task1am">11:00AM</p>
//   <textarea class="timeBlockItem col-10 border border-info textarea1" name="" id="textarea11" cols="30" rows="10"></textarea>
//   <button class="timeBlockItem saveBtn col-1 border border-info" id="save11am">Save</button>
// </div>
// <!-- 12:00 NN -->
// <div class="row ">
//   <p class="timeBlockItem col-1 border border-info text-center" id="task2nn">12:00NN</p>
//   <textarea class="timeBlockItem col-10 border border-info textarea1" name="" id="textarea12" cols="30" rows="10"></textarea>
//   <button class="timeBlockItem saveBtn col-1 border border-info" id="save12nn">Save</button>
// </div>

// <!-- 1:00 PM -->
// <div class="row ">
//   <p class="timeBlockItem col-1 border border-info text-center" id="taskpm">1:00PM</p>
//   <textarea class="timeBlockItem col-10 border border-info textarea1" name="" id="textarea1" cols="30" rows="10"></textarea>
//   <button class="timeBlockItem saveBtn col-1 border border-info" id="save1pm">Save</button>
// </div>

// <!-- 2:00 PM -->
// <div class="row ">
//   <p class="timeBlockItem col-1 border border-info text-center" id="text2pm">2:00PM</p>
//   <textarea class="timeBlockItem col-10 border border-info textarea1" name="" id="textarea2" cols="30" rows="10"></textarea>
//   <button class="timeBlockItem saveBtn col-1 border border-info" id="save2pm">Save</button>
// </div>

// <!-- 3:00 PM -->
// <div class="row ">
//   <p class="timeBlockItem col-1 border border-info text-center" id="text3pm">3:00PM</p>
//   <textarea class="timeBlockItem col-10 border border-info textarea1" name="" id="textarea3" cols="30" rows="10"></textarea>
//   <button class="timeBlockItem saveBtn col-1 border border-info" id="save3pm">Save</button>
// </div>

// <!-- 4:00 PM -->
// <div class="row ">
//   <p class="timeBlockItem col-1 border border-info text-center" id="text4pm">4:00PM</p>
//   <textarea class="timeBlockItem col-10 border border-info textarea1" name="" id="textarea4" cols="30" rows="10"></textarea>
//   <button class="timeBlockItem saveBtn col-1 border border-info" id="save4pm">Save</button>
// </div>

// <!-- 5:00 PM -->
// <div class="row ">
//   <p class="timeBlockItem col-1 border border-info text-center" id="text5pm">5:00PM</p>
//   <textarea class="timeBlockItem col-10 border border-info textarea1" name="" id="textarea5" cols="30" rows="10"></textarea>
//   <button class="timeBlockItem saveBtn col-1 border border-info" id="save5pm">Save</button>
// </div>


