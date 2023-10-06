import i18Obj from "./translate.js";

const portfolio_btn = document.querySelectorAll(".portfolio__btn");
const portfolioImgs = document.querySelectorAll(".portfolio__img");
const ruLanguage = document.querySelector(".RU");
const engLanguage = document.querySelector(".EN");
const hoverImage = document.querySelectorAll(".hover");

const menu = document.querySelector(".menu__mobile");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");
const mobileMenu = document.querySelector(".humberger__menu");
const desktopMenu = document.querySelector(".menu");

hoverImage.forEach((element) => {
  const hoverImageSrc = element.dataset.hover;

  element.addEventListener("mouseover", function () {
    element.src = hoverImageSrc;
  });

  element.addEventListener("mouseout", () => {
    element.src = element.dataset.src;
  });
});

ruLanguage.addEventListener("click", function () {
  getTranslate("ru");
});

engLanguage.addEventListener("click", function () {
  getTranslate("en");
});

portfolio_btn.forEach(function (element) {
  element.addEventListener("click", function () {
    switch (element.textContent) {
      case "Winter":
      case "Зима":
        portfolio_btn.forEach((el) => {
          el.classList.remove("active");
        });
        element.classList.add("active");
        portfolioImgs.forEach((item, i) => {
          item.src = `/img/portfolio-image/winter/${i + 1}.jpg`;
        });
        break;

      case "Spring":
      case "Весна":
        portfolio_btn.forEach((el) => {
          el.classList.remove("active");
        });
        element.classList.add("active");
        portfolioImgs.forEach((item, i) => {
          item.src = `/img/portfolio-image/spring/${i + 1}.jpg`;
        });
        break;
      case "Summer":
      case "Лето":
        portfolio_btn.forEach((el) => {
          el.classList.remove("active");
        });
        element.classList.add("active");
        portfolioImgs.forEach((item, i) => {
          item.src = `/img/portfolio-image/summer/${i + 1}.jpg`;
        });
        break;
      case "Autumn":
      case "Осень":
        portfolio_btn.forEach((el) => {
          el.classList.remove("active");
        });
        element.classList.add("active");
        portfolioImgs.forEach((item, i) => {
          item.src = `/img/portfolio-image/autumn/img${i + 1}.jpg`;
        });
        break;
    }
  });
});

//translating

function getTranslate(lang) {
  document.querySelectorAll(["[data-i101]"]).forEach((el) => {
    const attributeName = el.getAttribute("data-i101");
    el.textContent = i18Obj[lang][attributeName];
    if (el.placeholder) {
      // if elements contains placeholder then change him
      el.placeholder = i18Obj[lang][attributeName];
      el.textContent = "";
    }
  });
}

//nav menu smooth scroll

const links = document.querySelectorAll(".menu__item-link");
links.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    const id = item.getAttribute("href"); // get link id
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

if (window.innerWidth < 1024) {
  console.log("123");
  mobileMenu.classList.remove("hidden");
  desktopMenu.classList.add("hidden");
}
function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

const contactLinks = document.querySelectorAll(".contact__click");
contactLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector("#contact").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});
