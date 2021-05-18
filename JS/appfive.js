function showhide(but) {
  let pass = document.getElementById("passwordfield");
  let type = pass.getAttribute("type");

  if (type === "password") {
    pass.setAttribute("type", "text");
    but.textContent = "Hide";
  } else {
    pass.setAttribute("type", "password");
    but.textContent = "Show";
  }
}
