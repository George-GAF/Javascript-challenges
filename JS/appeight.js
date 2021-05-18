// get page element
let container = document.getElementById("container");
let fullscreen = document.getElementById("full-screen");
let startgame = document.getElementsByTagName("button")[0];
let cardslist = document.createElement("ul");

let succ = document.getElementById("succ");
let fail = document.getElementById("fail");

let cardinface = 0;

let columns = 5;
let rows = 4;
let userName = "";
let slots = [];

let errornumword = "Error number :";
let errornum = 0;

startgame.onclick = () => {
  fullscreen.style.display = "none";
  setNameInHeader();
};

function setNameInHeader() {
  userName = prompt("enter your name");
  let namefield = document.getElementById("name");
  namefield.textContent = `Hello : ${userName}`;
}

function setcards() {
  for (let i = 0; i < columns * rows; i++) {
    let li = document.createElement("li");
    let rank = setrandrank((columns * rows) / 2);
    li.setAttribute("rank", rank);
    li.setAttribute("match", "undone");
    li.textContent = rank + 1;
    li.className = "card-back";
    li.onclick = clickedcard;
    cardslist.appendChild(li);
  }
  container.appendChild(cardslist);
}

function setrandrank(len) {
  let num;
  do {
    num = Math.floor(Math.random() * len);
  } while (repeatinarry(slots, num) > 1);
  slots.push(num);
  return num;
}

function repeatinarry(array, item) {
  let rep = 0;
  for (let i of array) {
    if (i === item) {
      ++rep;
    }
  }
  return rep;
}

function setstage() {
  cardslist.style.gridTemplateColumns = `repeat(${columns}, ${100 / columns}%)`;
  cardslist.style.gridTemplateRows = `repeat(${rows}, ${100 / rows}%)`;
}

function clickedcard() {
  if (this.getAttribute("match") != "done") {
    if (this.classList.contains("card-front")) {
      cardinface -= 2;
    }

    if (cardinface === 2) {
      resetallcard();
      cardinface = 0;
    }

    ++cardinface;
    flipcard(this);
    switchcardface(this);
    checkmatch();

    if (iswin()) {
      setTimeout(() => {
        alert("Congrate, you are win");
        restgame();
      }, 1000);
    }
  }
}

function checkmatch() {
  let cards = Array.from(cardslist.children);
  let allfront = cards.filter(
    (card) =>
      card.classList.contains("card-front") &&
      card.getAttribute("match") != "done"
  );
  if (allfront.length === 2) {
    if (allfront[0].getAttribute("rank") === allfront[1].getAttribute("rank")) {
      allfront[0].setAttribute("match", "done");
      allfront[1].setAttribute("match", "done");
      succ.play();
    } else {
      seterrornum();
      fail.play();
    }
  }
}

function iswin() {
  let cards = Array.from(cardslist.children);
  let cardmatch = cards.filter((card) => card.getAttribute("match") === "done")
    .length;
  /*
  for (let i of cardslist.children) {
    if (i.getAttribute("match") == "done") {
      ++cardmatch;
    }
  }*/
  if (cardmatch == columns * rows) {
    return true;
  } else {
    return false;
  }
}

function seterrornum() {
  let error = document.getElementById("fall-num");
  errornum++;
  error.textContent = `${errornumword} ${errornum}`;
}

function resetallcard() {
  for (let i of cardslist.children) {
    let mat = i.getAttribute("match");
    if (mat != "done") i.className = "card-back";
  }
}

function restgame() {
  for (let i of cardslist.children) {
    i.setAttribute("match", "undone");
    i.className = "card-back";
  }
  errornum = 0;
  let error = document.getElementById("fall-num");
  error.textContent = `${errornumword} ${errornum}`;
}

function flipcard(card) {
  card.classList.toggle("flip-card");
}

function switchcardface(card) {
  card.classList.toggle("card-back");
  card.classList.toggle("card-front");
}

setcards();
setstage();
