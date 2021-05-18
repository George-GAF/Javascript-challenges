let textarea = document.getElementById("textarea");
textarea.oninput = () => {
  let counter = document.getElementById("counter");
  let wordArray = [];
  let len = 0;
  len = textarea.value.length;
  let textValue = textarea.value.trim();
  wordArray = textValue.split(" ");
  let netChar = getCharAccountInStringArray(wordArray);

  let maxChar = textarea.getAttribute("maxlength");

  counter.innerHTML = `words number : ${wordArray.length}<br>
  char number-include space : ${len}<br>
  char number-without space : ${netChar}<br>
  space number : ${len - netChar}<br>
  current state : ${len}/${maxChar}<br>
  char avalible : ${maxChar - len}`;
};

let plceholderValue = textarea.getAttribute("placeholder");

textarea.onfocus = () => {
  textarea.setAttribute("placeholder", "");
};
textarea.onblur = () => {
  textarea.setAttribute("placeholder", plceholderValue);
};

function getCharAccountInStringArray(array) {
  let num = 0;
  for (let i of array) {
    num += i.length;
  }
  return num;
}
