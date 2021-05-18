let input = document.querySelector(".add-task input"),
  addbutton = document.querySelector(".add-task .plus"),
  taskcontent = document.querySelector(".tasks-content"),
  notaskmessage = document.querySelector(".no-tasks-message"),
  taskcount = document.querySelector(".tasks-count span"),
  taskcompleted = document.querySelector(".tasks-completed span"),
  allfunbutton = document.querySelector(".all-fun"),
  deleteall = document.querySelector(".all-fun .delete-all"),
  completeall = document.querySelector(".all-fun .complete-all");
let lastid = 0;
const idkey = "lastId";
window.onload = () => {
  input.focus();
};

addbutton.onclick = () => {
  if (input.value == "") {
    swal("Did you click wrong?", "nothing to add frinde,add same data to add!");
  } else {
    let taskisrepeated = checkreaptedtasks(input.value);
    if (taskisrepeated) {
      return;
    }
    notaskmessage.style.display = "none";
    let element = createtaskelement(input.value);
    let taskid = newtaskid();
    element.setAttribute("task-id", taskid);
    savetaskinlocal(`${taskid}text`, input.value);
    savetaskinlocal(`${taskid}state`, "");
    input.value = "";
    input.focus();
    let count = changecounter("task-box", taskcount);
    shownotaskmessage(count);
    setallfunbuttonstate();
  }
};

function settaskid() {
  lastid = localStorage.getItem(idkey);
  if (lastid == null) {
    lastid = 0;
  }
}

function newtaskid() {
  lastid++;
  savetaskinlocal(idkey, lastid);
  return lastid;
}

settaskid();

function createtaskelement(text) {
  let taskspan = document.createElement("span");
  let deletebut = document.createElement("span");
  let tasktext = document.createTextNode(text);
  let delbuttext = document.createTextNode("Delete");

  taskspan.className = "task-box";
  deletebut.className = "delete";

  taskspan.appendChild(tasktext);
  deletebut.appendChild(delbuttext);
  taskspan.appendChild(deletebut);

  taskcontent.appendChild(taskspan);
  return taskspan;
}

deleteall.onclick = () => {
  let tasks = gettasklist();
  tasks.forEach((t) => {
    let id = t.getAttribute("task-id");
    t.remove();
    localStorage.removeItem(`${id}text`);
    localStorage.removeItem(`${id}state`);
  });

  setallfunbuttonstate();
  changecounter("task-box", taskcount);
  shownotaskmessage(0);
};

completeall.onclick = () => {
  let tasks = gettasklist();

  let currentfun = completeall.textContent;
  if (currentfun === "Complete All") {
    completeall.textContent = "UnComplete All";
    tasks.forEach((t) => {
      let id = t.getAttribute("task-id");
      t.classList.add("finished");
      savetaskinlocal(`${id}state`, "finished");
    });
  } else if (currentfun === "UnComplete All") {
    completeall.textContent = "Complete All";
    tasks.forEach((t) => {
      let id = t.getAttribute("task-id");
      t.classList.remove("finished");
      savetaskinlocal(`${id}state`, "");
    });
  }

  changecounter("finished", taskcompleted);
};

function gettasklist() {
  let tasks = Array.from(taskcontent.children);
  tasks = tasks.filter((t) => t.classList.contains("task-box"));
  return tasks;
}

function setallfunbuttonstate() {
  if (taskcontent.children.length >= 3) {
    allfunbutton.style.display = "block";
    setTimeout(() => {
      deleteall.style.opacity = 1;
      completeall.style.opacity = 1;
    }, 10);
  } else {
    deleteall.style.opacity = 0;
    completeall.style.opacity = 0;
    setTimeout(() => {
      allfunbutton.style.display = "none";
    }, 1000);
  }
}

function changecounter(classname, counter) {
  let temp = Array.from(taskcontent.children);
  let tasks = temp.filter((t) => t.classList.contains(classname));
  counter.textContent = tasks.length;
  return tasks.length;
}

function shownotaskmessage(taskscount) {
  if (taskscount === 0) {
    notaskmessage.style.display = "block";
  } else {
    notaskmessage.style.display = "none";
  }
}

document.addEventListener("click", function (e) {
  if (e.target.className == "delete") {
    let tasks = gettasklist();

    let rank = e.target.parentNode.getAttribute("task-id");

    localStorage.removeItem(`${rank}text`);
    localStorage.removeItem(`${rank}state`);

    e.target.parentNode.remove();
    let count = changecounter("task-box", taskcount);
    shownotaskmessage(count);
    setallfunbuttonstate();
    input.focus();
  }

  if (e.target.classList.contains("task-box")) {
    e.target.classList.toggle("finished");
    let rank = e.target.getAttribute("task-id");

    if (e.target.classList.contains("finished")) {
      savetaskinlocal(`${rank}state`, "finished");
    } else {
      savetaskinlocal(`${rank}state`, "");
    }
    changecounter("finished", taskcompleted);
  }
});

function checkreaptedtasks(newtask) {
  let tasks = gettasklist();
  let isreapted = false;
  tasks.forEach((t) => {
    let text = t.childNodes[0].textContent;
    if (text == newtask) {
      swal("task exsit", "can't add reapted tasks");
      isreapted = true;
    }
  });
  return isreapted;
}

function savetaskinlocal(key, value) {
  localStorage.setItem(key, value);
}

function gettaskfromlocal(key) {
  return localStorage.getItem(key);
}

function getalltaskfromstorge() {
  let len = localStorage.length;
  if (len > 0) {
    let alltext = [];

    for (let i = 0; i < len; i++) {
      let k = localStorage.key(i);
      if (k.search("text") != -1) {
        alltext.push(k);
        alltext.sort();
      }
    }
    alltext.forEach((t) => {
      let text = gettaskfromlocal(t);
      let taskspan = createtaskelement(text);
      let id = t.replace("text", "");
      taskspan.setAttribute("task-id", id);
      let state = gettaskfromlocal(`${id}state`);
      if (state != "") taskspan.classList.add(state);
    });

    input.value = "";
    input.focus();
    let count = changecounter("task-box", taskcount);

    shownotaskmessage(count);
    changecounter("finished", taskcompleted);
    setallfunbuttonstate();

    let taall = gettasklist();
    let comall = taall.filter((t) => t.classList.contains("finished"));
    if (taall.length == comall.length) {
      completeall.textContent = "UnComplete All";
    }
  }
}

getalltaskfromstorge();
