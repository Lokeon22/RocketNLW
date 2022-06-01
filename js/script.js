import {
  icone,
  numeros,
  segundoNumero,
  terceiroNumero,
  body,
  cards,
  serv,
  arrow,
  darkmoon,
  darklight,
  luamobile,
  lampadamobile,
} from "./elements.js";

function darkmodeDesktopMobile() {
  darkmoon.addEventListener("click", () => {
    body.classList.toggle("dark");
    darkmoon.classList.toggle("hiden");
    darklight.classList.toggle("showdark");
  });

  darklight.addEventListener("click", () => {
    body.classList.toggle("dark");
    darkmoon.classList.toggle("hiden");
    darklight.classList.toggle("showdark");
  });

  luamobile.addEventListener("click", () => {
    body.classList.toggle("dark");
    luamobile.classList.toggle("hiden");
    lampadamobile.classList.toggle("showdark");
  });

  lampadamobile.addEventListener("click", () => {
    body.classList.toggle("dark");
    luamobile.classList.toggle("hiden");
    lampadamobile.classList.toggle("showdark");
  });
}

serv.forEach((item) => {
  if (window.screen.width <= 768 && window.screen.height >= 768) {
    item.addEventListener("click", () => {
      return MenuMobile();
    });
  }
});

function MenuMobile(tag) {
  const elements = document.querySelectorAll(tag);
  this.ativar = (element) => {
    elements.forEach((i) => {
      i.classList.toggle(element);
    });
  };
  this.remove = (element) => {
    elements.forEach((i) => {
      i.classList.remove(element);
    });
  };
}

let menu = new MenuMobile(".menu");
let menu1 = new MenuMobile(".menu1");
let social = new MenuMobile(".social-mobile");
let close = new MenuMobile(".oi");
let burguer = new MenuMobile(".icon img");
let content = new MenuMobile(".container");
let bg = new MenuMobile(".clientes-bg");
let bodyFunction = new MenuMobile("body");
let headerFunction = new MenuMobile("header");

function menuexec() {
  if (scrollY > 180) {
    return cliente(), especialistas(), anos();
  }
}

function setasumir() {
  if (scrollY > 550) {
    arrow.classList.add("show");
  } else {
    arrow.classList.remove("show");
  }
}

function backtotop() {
  arrow.addEventListener("click", () => {
    window.scroll(0, 0);
  });
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
  menu.ativar("ativo");
  menu1.ativar("ativo");
  social.ativar("ativo");
  close.ativar("ativo");
  burguer.ativar("remove");
  content.ativar("desableContent");
  bg.ativar("desableContent");
  bodyFunction.ativar("desableScroll");
  headerFunction.ativar("bg-header");
});

function eventNotMobile() {
  if (window.screen.width >= 500 && window.screen.height >= 768) {
    (window.onload = cliente()), especialistas(), anos();
  }
}

function cardUp() {
  cards.forEach((card) => {
    card.addEventListener("mouseover", () => {
      card.classList.add("up"), card.classList.remove("notup");
    });
    card.addEventListener("mouseout", () => {
      card.classList.remove("up"), card.classList.add("notup");
    });
  });
}

let slidebottom = {
  distance: "50%",
  origin: "bottom",
  duration: 750,
};

let slidetop = {
  distance: "50%",
  origin: "top",
  duration: 750,
};

ScrollReveal().reveal(
  `.cards-services, .about-bg, .about-image, .about-text h2, .about-text p`,
  slidebottom
);

ScrollReveal().reveal(
  `.about-bg, .about-image, .about-text h1, .about-text h2, .about-text p, .contact-bg, .contact-text h2, .contact-icons p, endress-icon, email-icon, .botao2`,
  slidetop
);

window.onscroll = () => {
  menuexec();
  setasumir();
  backtotop();
};

(onload = eventNotMobile()), cardUp(), darkmodeDesktopMobile();
