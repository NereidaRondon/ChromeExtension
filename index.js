let myLeads = [];
const inputElement = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulElement = document.getElementById("ul-element");

//when that id is clicked, the function is trigered
inputBtn.addEventListener("click", function () {
  console.log("Button clicked");
  myLeads.push(inputElement.value);
});

//consoles the inputs in the array
for (let i = 0; i < myLeads.length; i++) {
  ulElement.innerHTML += "<li>" myLeads[i] + "<li>";
}
