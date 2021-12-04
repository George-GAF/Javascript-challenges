let inp = document.querySelector("#inp");
let but = document.querySelector("div button");
let result = document.querySelector(".result");

let finalList = [];

but.onclick = function () {
  if (inp.value != "" && inp.value.search(" ") == -1) {
    finalList = [...new Set(getPos(inp.value))];
    result.style.display = "block";
    result.innerHTML = "";

    for (let i = 0; i < finalList.length; i++) {
      setTimeout(() => {
        result.innerHTML += `${i + 1}- ${finalList[i]}<br>`;
        scrollTo(0, document.body.scrollHeight);
      }, 500);
    }
  } else {
    inp.setAttribute("placeholder", "This Filed Requierd");
  }
};

inp.onfocus = function () {
  inp.setAttribute("placeholder", "Enter word");
};

function getPos(word) {
  let words = [word];
  let t = generWords(word);
  words.push(...t);
  t.forEach((a) => {
    words.push(...generWords(a));
  });
  return words;
}

function generWords(word) {
  let b = Array.from(word);
  let ws = [];
  for (let i = 0; i < b.length - 1; i++) {
    let t = b[i + 1];
    b[i + 1] = b[i];
    b[i] = t;
    ws.push(b.join(""));
  }
  return ws;
}

/*
abc
acb
bac
bca
cab
cba
*/
