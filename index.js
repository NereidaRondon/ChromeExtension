let myLeads = [];
const inputElement = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulElement = document.getElementById("ul-element");

//when that id is clicked, the function is trigered
inputBtn.addEventListener("click", function () {
  myLeads.push(inputElement.value);
  renderLeads();
  inputElement.value = "";
});

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
  ulElement.innerHTML = listItems;
}
