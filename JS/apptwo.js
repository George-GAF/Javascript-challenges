let input = document.getElementById("input");
let result = document.getElementById("result");

input.oninput = () => {
  captext(input.value);
};

function captext(text) {
  if (text === "") return;
  let array = text.trim().split(" ");
  let newText = [];
  for (let i of array) {
    newText.push(i[0].toUpperCase() + i.substring(1).toLowerCase());
  }
  result.textContent = newText.join(" ");
}
