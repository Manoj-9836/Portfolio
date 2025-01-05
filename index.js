/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName("skills__content"),
  skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }
  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification__active");
    });
    target.classList.add("qualification__active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification__active");
    });
    tab.classList.add("qualification__active");
  });
});

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*==================== DARK LIGHT THEME ====================*/

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    const totalSlides = slides.length;
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    document.querySelector('.slides').style.transform = `translateX(-${currentSlide * 100}%)`;
}

function moveSlide(direction) {
    showSlide(currentSlide + direction);
}

const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
})
//HOME
sr.reveal('.home__social', {delay: 100} )
sr.reveal('.home__img', {delay: 100} )
sr.reveal('.home__data', {delay: 100} )
sr.reveal('.home__title', {delay: 150} )
sr.reveal('.home__subtitle', {delay: 150} )
sr.reveal('.home__description', {delay: 150} )
sr.reveal('.home__scroll', {delay: 150} )

//ABOUT
sr.reveal('.section__title', {delay: 10} )
sr.reveal('.section__subtitle', {delay: 50} )
sr.reveal('.about__img', {delay: 100} )
sr.reveal('.about__data', {delay: 50} )
sr.reveal('.about__description', {delay: 100} )
sr.reveal('.about__info-title', {delay: 50} )
sr.reveal('.about__info-name', {delay: 50} )
sr.reveal('.about__buttons', {delay: 50} )

//SKILLS
sr.reveal('.skills__content', {delay: 50} )
sr.reveal('.skills__header', {delay: 100} )
sr.reveal('.skills__title', {origin:'left', delay: 100} )
sr.reveal('.skills__subtitle', {delay: 100} )
sr.reveal('.skills__list grid', {delay: 100} )

//OUALIFICATION
sr.reveal('.qualification__button', {interval: 100} )
sr.reveal('.education_title', { origin: 'left' });
sr.reveal('.education_subtitle', { origin: 'right', delay: 300 });
sr.reveal('.education_calendar', { origin: 'bottom', delay: 400 });

//TESTIMONIAL
sr.reveal('.cus1', {origin: 'left', delay: 100} )
sr.reveal('.cus2', {origin: 'left', delay: 200} )
sr.reveal('.cus3', {origin: 'left', delay: 300} )

//CONTACT ME
sr.reveal('.contact__title', {origin: 'left', delay: 100} )
sr.reveal('.contact__subtitle', {origin: 'left', delay: 200} )
sr.reveal('.contact__icon', {origin: 'left', delay: 300} )
sr.reveal('.c1', {origin: 'right', delay: 100} )
sr.reveal('.c2', {origin: 'right', delay: 150} )
sr.reveal('.c3', {origin: 'right', delay: 200} )
sr.reveal('.c4', {origin: 'right', delay: 250} )
sr.reveal('.contact_btn', {origin: 'left', delay: 300} )

//FOOTER
sr.reveal('.footer__title', {origin: 'left', delay: 100} )
sr.reveal('.footer__subtitle', {origin: 'left', delay: 200} )
sr.reveal('.footer__link', {delay: 300} )
sr.reveal('.footer__socials', {origin: 'right', delay: 100} )
sr.reveal('.footer__copy', {delay: 150} )
