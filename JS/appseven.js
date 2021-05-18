// get element information
let rank = document.getElementById("rank");
let controller = document.getElementById("controller");
let imgList = document.getElementsByTagName("img");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let items = [];
let imageIndex = 0;

// set prev button event
prev.onclick = () => {
  imageIndex = imageIndex === 0 ? imgList.length - 1 : --imageIndex;

  makeActive(imageIndex, imgList.length - 1);
};
// set next button event
next.onclick = () => {
  imageIndex = imageIndex === imgList.length - 1 ? 0 : ++imageIndex;

  makeActive(imageIndex, imgList.length - 1);
};

// switch between silder
function makeActive(index, len) {
  //set slider number
  rank.textContent = `Slide #${index + 1} of ${len + 1}`;
  // init prev,next index and set value
  let p, n;
  p = index === 0 ? len : index - 1;
  n = index === len ? 0 : index + 1;
  //-------------------------------------------------------
  // add class to img tag base index value
  for (let i = 0; i < imgList.length; i++) {
    if (i === index) {
      // current img
      imgList[index].className = "active";
    } else if (i === p) {
      imgList[p].className = "imgprev";
    } else if (i === n) {
      imgList[n].className = "imgnext";
    } else {
      // remove class to hide img
      imgList[i].removeAttribute("class");
    }
  }

  // pagenation remove class and set active one
  for (let i of items) {
    i.className = "itemele";
  }
  items[index].className = "selected";
  //-------------------------------------------
}

// create pagenation
function createIndections() {
  for (let i = 0; i < imgList.length; i++) {
    let div = document.createElement("div");
    div.textContent = `${i + 1}`;
    div.className = "itemele";
    div.onclick = itemselected;
    controller.insertBefore(div, next);
    items.push(div);
  }
}
// function to sclected from pagenation
function itemselected() {
  let index = parseInt(this.textContent);
  index--;
  imageIndex = index;
  makeActive(imageIndex, imgList.length - 1);
}
// run function to set page
createIndections();
makeActive(imageIndex, imgList.length - 1);
