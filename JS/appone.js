document.body.classList.add(localStorage.getItem("maincolor") || "red");

let el = document.querySelectorAll(".color-swicth li");
let classeslist = [];

for (let i = 0; i < el.length; i++) {
  classeslist.push(el[i].getAttribute("data-color"));
  el[i].addEventListener(
    "click",
    function () {
      document.body.classList.remove(...classeslist);

      document.body.classList.add(this.getAttribute("data-color"));
      localStorage.setItem("maincolor", this.getAttribute("data-color"));
    },
    false
  );
}

console.log(localStorage.getItem("maincolor"));
