let myResources = [];
const descriptionInput = document.getElementById("description");
const inputBtn = document.getElementById("input-btn");
const listElement = document.getElementById("listElement");
const bankTabBtn = document.getElementById("bankTab-btn");
const clearBtn = document.getElementById("clear-btn");
const resourcesFromLocalStorage = JSON.parse(
  localStorage.getItem("myResources")
);

//if true make the function equal to the array
if (resourcesFromLocalStorage) {
  myResources = resourcesFromLocalStorage;
  showLinks(myResources);
}

bankTabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    // since only one tab should be active and in the current window at once the return variable should only have one entry
    let activeTab = tabs[0];
    let activeTabId = activeTab.id;
  });
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myResources.push(descriptionInput.value); //input is added to array
    descriptionInput.value = ""; //the input box is cleared/emptied
    myResources.push(tabs[0].url);
    localStorage.setItem("myResources", JSON.stringify(myResources));
    showLinks(myResources);
  });
});

function showLinks(resources) {
  //start with an empty string to house the inputs
  let listItems = "";

  for (let i = 0; i < resources.length; i++) {
    if (i % 2 === 0) {
      // concatenates all of the inputs together into an array
      listItems += `<li>${resources[i]}</li>`;
    } else {
      // concatenates all of the window tab links together into the array
      listItems += `
      <li>
      <a href = '${resources[i]}' target = '_blank'> ${resources[i]}
      </a>
      </li>
      `;
    }
  }
  //replaces the html with the whole list of inputs
  listElement.innerHTML = listItems;
}

clearBtn.addEventListener("click", function () {
  localStorage.clear(); //clear local storage
  myResources = []; //clear out the array
  showLinks(myResources); //clear out the DOM by activating this function which is now using an empty array
});

// function linkLabel(label) {
//   //start with an empty string to house the inputs
//   let labels = "";
//   for (let i = 0; i < label.length; i++) {
//     // concatenates all of the inputs together into an array
//     labels += `<li>${label[i]}</li>`;
//   }
//   //replaces the html with the whole list of inputs
//   listElement.innerHTML = labels;
// }
