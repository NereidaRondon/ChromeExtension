//let myLeads = [];
let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputElement = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulElement = document.getElementById("ul-element");

//when that id is clicked, the function is trigered
inputBtn.addEventListener("click", function () {
  myLeads.push(inputElement.value);
  console.log(myLeads)
})

//consoles the inputs in the array
for (let i = 0; i < myLeads.length; i++) {
document.createElement("li")
  ulElement.innerHTML += "<li>" myLeads[i] + "</li>";
  //create element
  //set text content
  // append to ul
}
