const icone = document.querySelector(".icon");
const menu = document.querySelector(".menu");
const menu1 = document.querySelector(".menu1");
const social = document.querySelector(".social-mobile");
const close = document.querySelector(".oi");
const burguer = document.querySelector(".icon img");
const numeros = document.querySelector(".cliente1 h3");
const segundoNumero = document.querySelector(".segundo");
const terceiroNumero = document.querySelector(".terceiro");
const content = document.querySelector(".container");
const bg = document.querySelector(".clientes-bg");
const body = document.querySelector("body");
const header = document.querySelector("header");

function menuMobile() {
  menu.classList.toggle("ativo");
  menu1.classList.toggle("ativo");
  social.classList.toggle("ativo");
  close.classList.toggle("ativo");
  burguer.classList.toggle("remove");
  content.classList.toggle("desableContent");
  bg.classList.toggle("desableContent");
  body.classList.toggle("desableScroll");
  header.classList.toggle("bg-header");
}

function cliente() {
  let numbers = Number(numeros.textContent);
  setTimeout(() => {
    if (numbers <= 3400) {
      numeros.textContent = String(numbers + 110);
    }

    cliente();
  }, 100);
}

function especialistas() {
  let second = Number(segundoNumero.textContent);
  setTimeout(() => {
    if (second <= 14) {
      segundoNumero.textContent = second + 1;
    }
    especialistas();
  }, 220);
}

function anos() {
  let three = Number(terceiroNumero.textContent);
  setTimeout(() => {
    if (three <= 9) {
      terceiroNumero.textContent = three + 1;
    }
    anos();
  }, 350);
}

icone.addEventListener("click", () => {
  menuMobile();
});

function onScroll() {
  if (scrollY > 180) {
    return cliente(), especialistas(), anos();
  }
}

function eventNotMobile() {
  if (window.screen.width >= 500 && window.screen.height >= 768) {
    (window.onload = cliente()), especialistas(), anos();
  }
}
eventNotMobile();
