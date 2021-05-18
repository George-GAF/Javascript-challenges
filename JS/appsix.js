let up = document.getElementById("goup");
let divcreate = [false, false, false, false];

onscroll = () => {
  if (pageYOffset >= 400) {
    up.style.display = "block";
  } else {
    up.style.display = "none";
  }
  console.log(pageYOffset);
  if (pageYOffset > 1000 && pageYOffset < 1100) {
    createDivWithText("in 1000 deep", 0);
  } else if (pageYOffset > 2000 && pageYOffset < 2100) {
    createDivWithText("in 2000 deep", 1);
  } else if (pageYOffset > 3000 && pageYOffset < 3100) {
    createDivWithText("in 3000 deep", 2);
  } else if (pageYOffset > 3400) {
    createDivWithText("in 4000 deep", 3);
  }
};

up.onclick = () => {
  scrollTo(0, 0);
};

function createDivWithText(text, index) {
  if (divcreate[index]) {
    return;
  }
  let div = document.createElement("div");
  div.textContent = text;
  div.style.height = "1000px";
  div.style.display = "flex";
  div.style.alignItems = "flex-end";
  div.style.justifyContent = "center";

  document.body.appendChild(div);
  divcreate[index] = true;
}
