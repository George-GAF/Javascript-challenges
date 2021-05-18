let h1 = document.querySelector("h1");
let ul = document.querySelector("ul");
//let container = document.querySelector("container");

let ulList = Array.from(ul.children);

/*
const list = {
  appone:{title :"",herf:""},
}
*/

window.onload = () => {
  scrollTo(0, 0);
};
setTimeout(() => {
  h1.style.opacity = 1;
  h1.style.marginLeft = "20px";
}, 500);

let index = 0;
let liEnter = setInterval(() => {
  let li = ulList[index];
  li.style.opacity = 1;
  li.style.marginLeft = "60px";
  scrollTo(0, 20 * index);

  index++;

  if (index == ulList.length) {
    clearInterval(liEnter);
    let goUp = setInterval(() => {
      scrollTo(0, pageYOffset - 10);
      if (pageYOffset <= 0) {
        clearInterval(goUp);
      }
    }, 100);
  }
}, 500);
