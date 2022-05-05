import {
  icone,
  menu,
  menu1,
  social,
  close,
  burguer,
  numeros,
  segundoNumero,
  terceiroNumero,
  content,
  bg,
  body,
  header,
  cards,
} from "./elements.js";

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

window.onscroll = function onScroll() {
  if (scrollY > 180) {
    return cliente(), especialistas(), anos();
  }
};

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

function eventNotMobile() {
  if (window.screen.width >= 500 && window.screen.height >= 768) {
    (window.onload = cliente()), especialistas(), anos();
  }
}

function cardUp() {
  cards.forEach((card) => {
    card.addEventListener("mouseover", () => {
      card.classList.add("up");
      card.classList.remove("notup");
    });
  });
}

function cardNotup() {
  cards.forEach((card) => {
    card.addEventListener("mouseout", () => {
      card.classList.remove("up");
      card.classList.add("notup");
    });
  });
}

(onload = eventNotMobile()), cardUp(), cardNotup();
