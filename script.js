const icone = document.querySelector(".icon");
const menu = document.querySelector(".menu");
const menu1 = document.querySelector(".menu1");
const social = document.querySelector(".social-mobile");

function ativar() {
  menu.classList.toggle("ativo");
  menu1.classList.toggle("ativo");
  social.classList.toggle("ativo");
}

icone.addEventListener("click", ativar);
