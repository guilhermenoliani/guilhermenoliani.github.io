// AÇÕES
let navMobile = document.querySelector("#nav-mobile-header");
navMobile.addEventListener("click", () => {
  let asideMobile = document.querySelector("aside");
  asideMobile.style.width = "100vw";
});

let closeNavMobile = document.querySelector("#menu-close");
closeNavMobile.addEventListener("click", () => {
  let asideMob = document.querySelector("aside");
  asideMob.style.width = "0vw";
});

let gitHub = document.querySelector("#button-ola button");
gitHub.addEventListener("click", () => {
  let linkGitHub = "https://github.com/guilhermenoliani";
  window.open(linkGitHub);
});
