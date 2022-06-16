let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteLastBtn = document.getElementById("delete-last-btn");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

//if true make the function equal to the array
if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

tabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    // since only one tab should be active and in the current window at once
    // the return variable should only have one entry
    let activeTab = tabs[0];
    let activeTabId = activeTab.id;
  });
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(inputEl.value); //input is added to array list
    inputEl.value = ""; //the input box is cleared/emptied
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});

function render(leads) {
  //start with an empty string to house the inputs
  let listItems = "";

  for (let i = 0; i < leads.length; i++) {
    if (i % 2 === 0) {
      listItems += `<li>${leads[i]}</li>`;
    } else {
      // concatenates all of the inputs together into an array
      listItems += `<li>
    <a href = '${leads[i]}' target = '_blank'> ${leads[i]}
    </a>
    </li>`;
    }
  }
  //replaces the html with the whole list of inputs
  ulEl.innerHTML = listItems;
}

function linkLabel(label) {
  //start with an empty string to house the inputs
  let labels = "";
  for (let i = 0; i < label.length; i++) {
    // concatenates all of the inputs together into an array
    labels += `<li>${label[i]}</li>`;
  }
  //replaces the html with the whole list of inputs
  ulEl.innerHTML = labels;
}

deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear(); //clear local storage
  myLeads = []; //clear out the array
  render(myLeads); //clear out the DOM by activating this function which is now using an empty array
});
