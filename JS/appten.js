let input = document.querySelector(".get-repos input");
let getButton = document.querySelector(".get-button");
let reposData = document.querySelector(".show-data");
let nodatamessage = document.querySelector(".show-data span");

getButton.onclick = () => {
  getRepos();
};

input.value = "George-GAF";

function getRepos() {
  if (input.value == "") {
    swal("username field requierd", "");
  } else {
    fetch(`https://api.github.com/users/${input.value}/repos`)
      .then((res) => {
        return res.json();
      })
      .then((repos) => {
        nodatamessage.style.display = "none";

        let all = Array.from(reposData.children);
        all = all.filter((i) => i.classList.contains("repo-main-div"));
        if (all.length != 0) {
          all.forEach((i) => i.remove());
        }

        repos.forEach((repo) => {
          let mainDiv = document.createElement("div");

          let t = repo.name;
          let name = document.createTextNode(t.split("_").join(" "));
          mainDiv.appendChild(name);

          let url = document.createElement("a");

          let urlText = document.createTextNode("Visite");
          url.appendChild(urlText);
          url.href = `http://github.com/${input.value}/${repo.name}`;
          url.setAttribute("target", "_blank");
          mainDiv.appendChild(url);

          let dateDiv = document.createElement("div");
          let date = repo.created_at.substring(0, 10);
          let time = repo.created_at.substring(11, 19);

          let dateText = document.createTextNode(`${date} ${time}`);
          dateDiv.appendChild(dateText);
          mainDiv.appendChild(dateDiv);
          reposData.appendChild(mainDiv);

          mainDiv.className = "repo-main-div";
          dateDiv.className = "date-div";
        });
      });
  }
}
