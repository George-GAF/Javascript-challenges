let allSpans = document.querySelectorAll(".buttons span");
let results = document.querySelector(".result > span");
let theInput = document.getElementById("the-input");
let inputValue = document.getElementById("input-value");

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("check")) {
    checkItem();
  } else if (e.target.classList.contains("add")) {
    addItem();
  } else if (e.target.classList.contains("delete")) {
    deleteItem();
  } else if (e.target.classList.contains("show")) {
    showItem();
  }
});

function checkItem() {
  let isEmpty = checkInput();
  if (!isEmpty) {
    if (localStorage.getItem(theInput.value)) {
      results.innerHTML = `key <span>${
        theInput.value
      }</span><l>Found in local have value :</l><span>${localStorage.getItem(
        theInput.value
      )}</span>`;
    } else {
      results.innerHTML = `Key : <span>${theInput.value}</span> not exist in Local`;
    }
  }
}

function addItem() {
  let isEmpty = checkInput(true);
  if (!isEmpty) {
    localStorage.setItem(theInput.value, inputValue.value);
    results.innerHTML = `local storge key : <span>${theInput.value}</span> <l>with value : </l> <span>${inputValue.value}</span> Added`;
    theInput.value = "";
    inputValue.value = "";
  }
}

function deleteItem() {
  checkItem();
  if (results.textContent.search("be empty") == -1) {
    if (results.textContent.search("not exist") == -1) {
      localStorage.removeItem(theInput.value);
      results.innerHTML = `local storge key : <span>${theInput.value}</span> Deleted`;
      theInput.value = "";
      inputValue.value = "";
    }
  }
}

function showItem() {
  if (localStorage.length) {
    results.textContent = "";
    for (let [key, value] of Object.entries(localStorage)) {
      results.innerHTML += `<l>Key : </l><span>${key}</span> <l> Value : </l><span>${value}</span><br>`;
    }
  } else {
    results.textContent = "local storge is empty";
  }
}

function checkInput(isAdd = false) {
  let isEmpty = false;
  let message = "";
  if (theInput.value == "" || theInput.value == " ") {
    message = "input key can't be empty";
    isEmpty = true;
  }
  if (isAdd) {
    if (inputValue.value == "" || inputValue.value == " ") {
      if (message != "") {
        message += "<br>";
      }
      message += "input value can't be empty";
      isEmpty = true;
    }
  }
  results.innerHTML = message;
  return isEmpty;
}
