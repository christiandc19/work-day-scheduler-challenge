var californiaTime = document.querySelector("#currentDay");
var currentTime = moment();


californiaTime.textContent = currentTime.format("MMM DD, YYY - hh:mm:ss a");

var rightNow = moment().format("MMMM Do, YYYY - hh:mm:ss a");
console.log(rightNow);

var tomorrow = moment().add(1, "day").format("dddd, MM-D-YYYY [at] hh:mm:ss A");
console.log(tomorrow);

var pastDate = moment("12-01-1999", "MM-DD-YYYY").format("dddd, MM/DD/YY");
console.log(pastDate);