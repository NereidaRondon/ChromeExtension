// //let myLeads = [];
// let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
// const inputElement = document.getElementById("input-el");
// const inputBtn = document.getElementById("input-btn");
// const ulElement = document.getElementById("ul-element");

// //when that id is clicked, the function is trigered
// inputBtn.addEventListener("click", function () {
//   myLeads.push(inputElement.value);
//   console.log(myLeads)
// })

// //consoles the inputs in the array
// for (let i = 0; i < myLeads.length; i++) {
// document.createElement("li")
//   ulElement.innerHTML += "<li>" myLeads[i] + "</li>";
//   //create element
//   //set text content
//   // append to ul
// }
console.log(5);
var monthNumber = 5;
let text;

switch (monthNumber) {
  case 0:
    text = "January";
    break;
  case 1:
    text = "February";
    break;
  case 2:
    text = "March";
    break;
  case 3:
    text = "April";
    break;
  case 4:
    text = "May";
    break;
  case 5:
    text = "June";
    break;
  case 6:
    text = "July";
    break;
  case 7:
    text = "August";
    break;
  case 8:
    text = "September";
    break;
  case 9:
    text = "October";
    break;
  case 10:
    text = "November";
    break;
  case 11:
    text = "December";
    break;
  default:
    text = "Invalid Month";
}
