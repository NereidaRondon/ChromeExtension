let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
console.log(leadsFromLocalStorage);

//when that id is clicked, the function is trigered
inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));

  renderLeads();
});

//if true make the function equal to the array
if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  renderLeads();
}

function renderLeads() {
  //empty string to house the inputs
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
