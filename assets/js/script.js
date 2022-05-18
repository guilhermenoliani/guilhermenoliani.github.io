//Funções querySelector
const qS = (el) => document.querySelector(el);
const qsAll = (el) => document.querySelectorAll(el);

qS("#header--container-logo img").addEventListener("click", () => {
  window.scrollTo(0);
});

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
