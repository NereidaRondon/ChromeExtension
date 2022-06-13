let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
console.log(leadsFromLocalStorage);
//if true make the function equal to the array
if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  renderLeads();
}

deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear(); //clear local storage
  myLeads = []; //clear out the array
  renderLeads(); //clear out the DOM by activating this function which is now using an empty array
});
//when Bank button is clicked,
inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value); //input is added to array list
  inputEl.value = ""; //the input box is cleared/emptied
  localStorage.setItem("myLeads", JSON.stringify(myLeads));

  renderLeads();
});

function renderLeads() {
  //start with an empty string to house the inputs
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    // concatenates all of the inputs together into an array
    listItems += `<li>
    <a href = '${myLeads[i]}' target = '_blank'> ${myLeads[i]}
    </a>
    </li>`;
  }
  //replaces the html with the whole list of inputs
  ulEl.innerHTML = listItems;
}
