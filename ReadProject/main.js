const prag = `
T-carrier technologies were first invented by AT&T in order to provision a system that allowed lots of phone calls to travel across a single cable. Every individual phone call was made over individual pairs of copper wire before Transmission System 1, the first T-carrier specification, called T1 for short. With the T1 specification, AT&T invented a way to carry up to 24 simultaneous phone calls across a single piece of twisted pair copper. Years later, this same technology was repurposed for data transfers. Each of the 24 phone channels was capable of transmitting data at 64 kilobits per second, making a single T1 line capable of transmitting data at 1.544 megabits per second. Over the years, the phrase T1 has come to mean any twisted pair copper connection capable of speeds of 1.544 megabits per second, even if it doesn't strictly follow the original Transmission System 1 specification.
Originally, T1 technology was only used to connect different telecom company sites to each other and to connect these companies to other telecom companies. But with the rise of the Internet as a useful business tool in the 1990s, more and more businesses started to pay to have T1 lines installed at their offices to have faster Internet connectivity. More improvements to the T1 line were made by developing a way of multiple T1s to act as a single link. So a T3 line is 28 T1s, all multiplexed, achieving a total throughput speed of 44.736 megabits per second.
You'll still find T-carrier technologies in use today, but they've usually been surpassed by other broadband technologies. For small business offices, cable broadband or fiber connections are now way more common since they're much cheaper to operate. For inter-ISP communications, different fiber technologies have all replaced older copper-based ones.`;
let ana = document.getElementById("ana");
let wordarray = prag.split(" ");
let container = document.getElementById("cont");
let plus = document.getElementById("plus");
let mins = document.getElementById("mins");

document.addEventListener("click", (e) => {
  if (e.target.id == "plus" || e.target.id == "mins") {
    let fSize = window
      .getComputedStyle(container, null)
      .getPropertyValue("font-size");
    fSize = fSize.slice(0, fSize.length - 2);
    let fSizeToInt = parseInt(fSize);
    if (e.target.id == "plus") {
      fSizeToInt++;
    } else if (e.target.id == "mins") {
      fSizeToInt--;
    }
    container.style.fontSize = `${fSizeToInt}px`;
  }
});

let selectedWord = 0;
let uderlineWord = 0;
wordarray.forEach((w) => {
  let span = document.createElement("span");
  let text = document.createTextNode(w);
  let space = document.createElement("l");
  space.textContent = " ";
  //span.setAttribute("title", w);
  span.appendChild(text);

  container.appendChild(span);
  container.appendChild(space);
  span.onclick = () => {
    span.classList.remove("words-dou");
    span.classList.toggle("word-sp");

    calcAna();
  };
  span.ondblclick = () => {
    span.classList.add("words-dou");
    span.classList.remove("word-sp");

    calcAna();
    if (document.selection && document.selection.empty) {
      document.selection.empty();
    } else if (window.getSelection) {
      var sel = window.getSelection();
      sel.removeAllRanges();
    }
  };
});

container.onpointerup = getSelectedText;

function getSelectedText() {
  let selectedText = "";

  // window.getSelection
  if (window.getSelection) {
    selectedText = window.getSelection();
  }
  // document.getSelection
  else if (document.getSelection) {
    selectedText = document.getSelection();
  }
  // document.selection
  else if (document.selection) {
    selectedText = document.selection.createRange().text;
  } else return;
}

function calcAna() {
  let spanArray = Array.from(container.children);
  setTimeout(() => {
    let t = spanArray.filter((s) => s.classList.contains("word-sp"));
    selectedWord = t.length;
    document.getElementById(
      "sele"
    ).textContent = `Selected words ${selectedWord}`;
  }, 0);
  setTimeout(() => {
    let t = spanArray.filter((s) => s.classList.contains("words-dou"));
    uderlineWord = t.length;
    document.getElementById(
      "uder"
    ).textContent = `Underline words ${uderlineWord}`;
  }, 0);
}

let anatext = document.createTextNode(`word count ${wordarray.length}`);
ana.appendChild(anatext);
