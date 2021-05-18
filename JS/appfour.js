let speedlist = document.getElementById("speedlist");

for (let i = 0; i < 10; i++) {
  let option = document.createElement("option");
  option.setAttribute("value", `${1000 - i * 100}`);
  option.textContent = i + 1;
  speedlist.appendChild(option);
}

speedlist.onchange = () => {
  let speedvalue = getSpeedValue(speedlist);
  starttyping(speedvalue);
};

function getSpeedValue(list) {
  return list.options[list.selectedIndex].value;
}

function starttyping(speed = 100) {
  let writenText =
    "My name george anwer i love programing this is make me in good mood";
  let div = document.getElementById("showtext");
  let i = 0;
  div.textContent = "";
  let writer = setInterval(() => {
    speedlist.setAttribute("disabled", "true");
    div.textContent += writenText[i];
    i++;
    if (i == writenText.length) {
      clearInterval(writer);
      speedlist.removeAttribute("disabled");
    }
  }, speed);
}

starttyping();
