const mySection = document.querySelectorAll(".section");
const myLink = document.querySelectorAll(".js-link");

function scrollPage() {
  mySection.forEach((item) => {
    let top = window.scrollY; // pegar a posição da barra de rolagem
    let offSet = item.offsetTop - 110; // pega a posição inicial de cada section
    let heightSection = item.offsetHeight; //pega a altura de cada section
    let idSection = item.getAttribute("id"); // pega o id de cada section

    if (top >= offSet && top < offSet + heightSection) {
      myLink.forEach((item) => {
        item.classList.remove("active");
        document
          .querySelector(`.nav a[href*='${idSection}']`)
          .classList.add("active");
      });
    }
  });
}

window.addEventListener("scroll", scrollPage);

function clickMenu(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute("href");
  const section = document.querySelector(href);
  let topSection = section.offsetTop; // pega a posição inicial de cada section

  window.scrollTo({
    top: topSection,
    behavior: "smooth",
  });
}

myLink.forEach((link) => {
  link.addEventListener("click", clickMenu);
});

const linkBackTop = document.getElementById("link-back-top");

linkBackTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

function ocultarBtn() {
  if (window.scrollY > 45) {
    linkBackTop.style.display = "flex";
  } else {
    linkBackTop.style.display = "none";
  }
}

document.addEventListener("scroll", ocultarBtn);

//FUNÇÕES PARA JANELAS DE MODAL

function openModalHtml() {
  const modal = document.getElementById("modal-window-html");
  modal.classList.add("open");

  modal.addEventListener("click", (e) => {
    if (e.target.id == "modal-window-html" || e.target.id == "close") {
      modal.classList.remove("open");
      localStorage.fechaModal = "modal-window-html";
    }
  });
}

function openModalCss() {
  const modal = document.getElementById("modal-window-css");
  modal.classList.add("open");

  modal.addEventListener("click", (e) => {
    if (e.target.id == "modal-window-css" || e.target.id == "close") {
      modal.classList.remove("open");
      localStorage.fechaModal = "modal-window-css";
    }
  });
}

function openModalJava() {
  const modal = document.getElementById("modal-window-java");
  modal.classList.add("open");

  modal.addEventListener("click", (e) => {
    if (e.target.id == "modal-window-java" || e.target.id == "close") {
      modal.classList.remove("open");
      localStorage.fechaModal = "modal-window-java";
    }
  });
}

function openModalPostgres() {
  const modal = document.getElementById("modal-window-postgres");
  modal.classList.add("open");

  modal.addEventListener("click", (e) => {
    if (e.target.id == "modal-window-postgres" || e.target.id == "close") {
      modal.classList.remove("open");
      localStorage.fechaModal = "modal-window-postgres";
    }
  });
}

function openModalJavaScript() {
  const modal = document.getElementById("modal-window-java-script");
  modal.classList.add("open");

  modal.addEventListener("click", (e) => {
    if (e.target.id == "modal-window-java-script" || e.target.id == "close") {
      modal.classList.remove("open");
      localStorage.fechaModal = "modal-window-java-script";
    }
  });
}

function openModalTecInfo() {
  const modal = document.getElementById("modal-window-tec-info");
  modal.classList.add("open");

  modal.addEventListener("click", (e) => {
    if (e.target.id == "modal-window-tec-info" || e.target.id == "close") {
      modal.classList.remove("open");
      localStorage.fechaModal = "modal-window-tec-info";
    }
  });
}

function openModalSystemsDevelopment() {
  const modal = document.getElementById("modal-window-systems-development");
  modal.classList.add("open");

  modal.addEventListener("click", (e) => {
    if (
      e.target.id == "modal-window-systems-development" ||
      e.target.id == "close"
    ) {
      modal.classList.remove("open");
      localStorage.fechaModal = "modal-window-systems-development";
    }
  });
}

function openModalFullStack() {
  const modal = document.getElementById("modal-window-full-stack");
  modal.classList.add("open");

  modal.addEventListener("click", (e) => {
    if (e.target.id == "modal-window-full-stack" || e.target.id == "close") {
      modal.classList.remove("open");
      localStorage.fechaModal = "modal-window-full-stack";
    }
  });
}

const btnMenuMobile = document.getElementById("js-btn-menu");
const clickItem = document.querySelector(".main-menu");

clickItem.addEventListener("click", () => {
  document.documentElement.classList.remove("open-menu");
  btnMenuMobile.classList.remove("is-active");
});

btnMenuMobile.addEventListener("click", () => {
  document.documentElement.classList.toggle("open-menu");
  btnMenuMobile.classList.toggle("is-active");
});
