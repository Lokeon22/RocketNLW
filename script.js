const icone = document.querySelector(".icon");
const menu = document.querySelector(".menu");
const menu1 = document.querySelector(".menu1");
const social = document.querySelector(".social-mobile");
const close = document.querySelector(".oi");
const burguer = document.querySelector(".icon img");
const numeros = document.querySelector(".cliente1 h3");
const segundoNumero = document.querySelector(".segundo");
const terceiroNumero = document.querySelector(".terceiro");

function menuMobile() {
  menu.classList.toggle("ativo");
  menu1.classList.toggle("ativo");
  social.classList.toggle("ativo");
  close.classList.toggle("ativo");
  burguer.classList.toggle("remove");
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

(window.onload = cliente()), especialistas(), anos();
