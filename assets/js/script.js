//Funções querySelector
const qS = (el) => document.querySelector(el);
const qsAll = (el) => document.querySelectorAll(el);

//Evento de click do logo, para voltar ao topo da tela
qS("#header--container-logo img").addEventListener("click", () => {
  window.scrollTo(0, 0);
});

//Função para efeito máquina de escrever HOME
function typeWrite(elemento) {
  const textoArray = elemento.innerHTML.split("");
  elemento.innerHTML = " ";
  textoArray.forEach(function (letra, i) {
    setTimeout(function () {
      elemento.innerHTML += letra;
    }, 75 * i);
  });
}
const titulo = document.querySelector(".typewriter");
typeWrite(titulo);

//Evento de click para ser direcionado ao portfólio
qS("#visitrepository button").addEventListener("click", () => {
  window.open("https://github.com/guilhermenoliani");
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
