const qS = (el) => document.querySelector(el);

aboutMe.map((item) => {
  let textAbout = item.h1;
  let h1Text = item.p;
  let aboutImage = item.img;

  qS("#image-about img").src = item.img;
  qS("#text-about h1").innerHTML = textAbout;
  qS("#text-about p").innerHTML = h1Text;
});

tecnologias.map((item) => {
  let tec = qS("#content-tecnologia").cloneNode(true);

  tec.querySelector("#content-tecnologia img").src = item.image;
  tec.querySelector("#content-tecnologia img").setAttribute("alt", item.name);
  tec
    .querySelector("#content-tecnologia img")
    .setAttribute("loading", item.loading);

  qS("#container-tecnologias").append(tec);
});

// AÇÕES
let navMobile = qS("#nav-mobile-header");
navMobile.addEventListener("click", () => {
  let asideMobile = document.querySelector("aside");
  asideMobile.style.width = "100vw";
});

let closeNavMobile = qS("#menu-close");
closeNavMobile.addEventListener("click", () => {
  let asideMob = document.querySelector("aside");
  asideMob.style.width = "0vw";
});

// ScrollReveal
ScrollReveal().reveal("#container-home", { delay: 100 });
ScrollReveal().reveal("#item-portfolio", { duration: 1000 });
