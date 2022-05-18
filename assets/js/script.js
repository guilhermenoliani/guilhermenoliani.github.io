//Funções querySelector
const qS = (el) => document.querySelector(el);
const qsAll = (el) => document.querySelectorAll(el);

projetosJson.map((item, index) => {
  let projectsItem = qS("#port--container-item").cloneNode(true);

  projectsItem.querySelector("#informations h1").innerHTML = item.name;
  projectsItem.querySelector("#informations p").innerHTML = item.desc;
  projectsItem.querySelector("#port-image--container img").src = item.img;

  projectsItem.querySelector("#github").addEventListener("click", () => {
    window.open(item.link);
  });

  projectsItem.querySelector("#showsite").addEventListener("click", () => {
    window.open(item.site);
  });

  qS("#porfolio--container").append(projectsItem);
});
