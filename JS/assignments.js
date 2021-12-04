let h1 = document.createElement("h1");
let result = document.querySelector(".result");
let elzero = document.createTextNode("GAF-GEORGE");
h1.appendChild(elzero);
document.body.insertBefore(h1, result);
h1.className = "elzero";
/*
h1.style.color = "blue";
h1.style.fontSize = "80px";
h1.style.fontWeight = "bold";
h1.style.textAlign = "center";
h1.style.fontFamily = "Arial";
*/
let arr = [9, 6, 1, 5, 52, 50, 81, 84, 10, 4, 3, 2, 523, 54, 99, 58, 8, 20, 56];
function bubbleAlg(array) {
  let arr = Array.from(array);
  let steps = 0;
  let activeSteps = 0;
  result.innerHTML = `<h2>Bubble Algorithms</h2><br>before sorting ${arr}<br>`;
  //console.log(`before sorting ${arr}`);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i != j) {
        ++steps;
        if (arr[i] < arr[j]) {
          activeSteps++;
          result.innerHTML += `${
            activeSteps.toString().length == 1 ? 0 : ""
          }${activeSteps} - switch lowest ${arr[i]} with biggest ${arr[j]}<br>`;
          // console.log(`switch lowest ${arr[i]} with bigest ${arr[j]}`);
          let t = arr[j];
          arr[j] = arr[i];
          arr[i] = t;
        }
      }
    }
  }
  result.innerHTML += `after sorting ${arr}<br>`;
  result.innerHTML += `test steps needed ${steps} actual moveing ${activeSteps}<br>`;
  //console.log(`after sorting ${arr}`);
  //console.log(`test steps needed ${steps} actual moveing ${activeSteps}`);
}

function selectionSortalg(array) {
  let arr = Array.from(array);
  let steps = 0;
  let activeSteps = 0;
  result.innerHTML += `<br>**********************************************************<br><br>`;
  result.innerHTML += `<h2>Selection Sort Algorithms</h2><br>before sorting ${arr}<br>`;
  //console.log(`before sorting ${arr}`);
  for (let i = 0; i < arr.length; i++) {
    let index;
    let min = arr[i];
    for (let j = i; j < arr.length; j++) {
      ++steps;
      if (min > arr[j]) {
        min = arr[j];
        index = j;
        // console.log(`switch lowest ${arr[i]} with bigest ${arr[j]}`);
      }
    }
    activeSteps++;
    result.innerHTML += `${
      activeSteps.toString().length == 1 ? 0 : ""
    }${activeSteps} - switch biggest ${arr[i]} with lowest ${
      arr[index]
    } AFTER : ${arr}<br>`;
    arr[index] = arr[i];
    arr[i] = min;
  }
  result.innerHTML += `after sorting ${arr}<br>`;
  result.innerHTML += `test steps needed ${steps} actual moveing ${activeSteps}<br>`;
}

function mergeSortalg(array) {
  let arr = Array.from(array);
  let steps = 0;
  let activeSteps = 0;
  result.innerHTML += `<br>**********************************************************<br><br>`;
  result.innerHTML += `<h2>Merge Sort Algorithms</h2><br>before sorting ${arr}<br>`;
  //console.log(`before sorting ${arr}`);
  if (arr.length == 1) {
    return;
  }

  let left = arr.slice(0, arr.length / 2);
  let right = arr.slice(arr.length / 2);

  mergeSortalg(left);
  mergeSortalg(right);

  for (let l = 0; l > right.length; l++) {}

  // console.log(left);
  //console.log(right);
  /*
  result.innerHTML += `${
    activeSteps.toString().length == 1 ? 0 : ""
  }${activeSteps} - switch biggest ${arr[i]} with lowest ${
    arr[index]
  } AFTER : ${arr}<br>`;
*/
  result.innerHTML += `after sorting ${arr}<br>`;
  result.innerHTML += `test steps needed ${steps} actual moveing ${activeSteps}<br>`;
}

bubbleAlg(arr);
selectionSortalg(arr);
mergeSortalg(arr);
