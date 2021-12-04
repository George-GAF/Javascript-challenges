const cellSize = 1;

let main = document.createElement("div");
let innereye = Array.from(
  document.querySelectorAll(".head .outereye .innereye")
);
let mhead = document.querySelector(".head .mouse");
let head = document.querySelector(".head");

let divSize = 0;

main.style.width = "90%";
main.style.height = "90vh";
//main.style.borderRadius = "50%";
main.style.margin = "5vh auto";
main.style.backgroundColor = "#eee";
//main.style.position = "absolute";
//main.style.transition = ".3s";

main.style.display = "grid";
main.style.gridTemplateColumns = `repeat(auto-fit,minmax(${cellSize}px, ${cellSize}px))`;
main.style.gridTemplateRows = `repeat(auto-fit,minmax(${cellSize}px, ${cellSize}px))`;

document.body.appendChild(main);
let turn = 0;
document.onclick = function (e) {
  let cX = head.style.left;
  cX = cX.substring(0, cX.search("px"));
  //let cY = head.style.top;

  if (e.x < cX) {
    --turn;
    //console.log("mins" + turn);
  } else {
    ++turn;
    //console.log("plus" + turn);
  }

  setTimeout(() => {
    head.style.top = `${e.y}px`;
    head.style.left = `${e.x}px`;
    mhead.style.height = `100px`;
    head.style.transform = `translate(-50%, -50%) rotate(${turn}turn)`;
  }, 0);
};

document.onmousemove = function (e) {
  innereye.forEach((inn) => {
    /*let l = Math.floor((e.x / window.innerWidth) * 100);
    let t = Math.floor((e.y / window.innerHeight) * 100);
    if (t < 100) {
      inn.style.top = `${t / 2}%`;
    }
    if (l < 100) {
      inn.style.left = `${l / 2}%`;
    }*/
    const rect = inn.getBoundingClientRect();
    const hSize = inn.offsetWidth;

    let xHeadSt = rect.x + hSize / 2;
    let yHeadSt = rect.y + hSize / 2;

    let xP = Math.floor((e.x / xHeadSt) * 100);
    let yP = Math.floor((e.y / yHeadSt) * 100);

    if (yP < 200) {
      inn.style.top = `${yP / 4}%`;
    }

    if (xP < 200) {
      inn.style.left = `${xP / 4}%`;
    }
  });
  if (
    e.x > 0 &&
    e.x < window.innerWidth - 30 &&
    e.y > 0 &&
    e.y < window.innerHeight - 30
  ) {
    slaves[0].style.left = `${e.x}px`;
    slaves[0].style.top = `${e.y}px`;

    slaves.forEach((sla, i) => {
      if (i != 0) {
        setTimeout(() => {
          let t = slaves[i - 1].style.top;
          let l = slaves[i - 1].style.left;
          sla.style.left = `${l}`;
          sla.style.top = `${t}`;
        }, 0);
      }
    });
    mhead.style.height = `50px`;
  } else {
    mhead.style.height = `0px`;
  }
};

window.onresize = function () {
  //  drawDivs();
};

function emptyMain() {
  if (main.children.length != 0) {
    main.innerHTML = "";
  }
}

function getRandomColors(haveOpcity = false) {
  let ch = Array.from("0123456789abcdef");
  let color = "";
  let len = haveOpcity ? 8 : 6;
  for (let j = 0; j < len; j++) {
    let it = Math.floor(Math.random() * ch.length);
    color += ch[it];
  }
  return `#${color}`;
}

function putDivs() {
  for (let i = 1; i < divSize; i++) {
    setTimeout(() => {
      let div = document.createElement("div");
      div.style.width = `${cellSize}px`;
      div.style.height = `${cellSize}px`;
      let color = getRandomColors();
      div.style.backgroundColor = `${color}`;
      main.appendChild(div);
    }, 0);
  }
}

function drawDivs() {
  emptyMain();
  putDivs();
}

window.onload = function () {
  divSize = (main.clientWidth * main.clientHeight) / cellSize;

  //drawDivs();
};
let slaves = [];
function creatFollowMouseDivs(delay) {
  let slave = document.createElement("div");
  slave.style.width = "20px";
  slave.style.height = "20px";
  slave.className = "slave";
  let rad1 = "";
  let rad2 = "";
  for (let i = 0; i < 4; i++) {
    let n = Math.floor((Math.random() + 0.3) * 50);
    rad1 += `${n}% `;
    n = Math.floor((Math.random() + 0.32) * 45);
    rad2 += `${n}% `;
  }

  slave.style.borderRadius = `${rad1} / ${rad2}`;
  slave.style.backgroundColor = getRandomColors();
  slave.style.position = "absolute";
  slave.style.transition = ".2s";
  slave.style.top = `${delay * 200 * 30 + 30}px`;

  slave.style.left = `${delay * 200 * 30 + 30}px`;
  slave.style.transitionDelay = `${delay}s`;
  slaves.push(slave);
  document.body.appendChild(slave);
}

for (let i = 0; i < 8; i++) {
  creatFollowMouseDivs(i / 200);
}
