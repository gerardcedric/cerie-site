// =========================
// SCRIPT GLOBAL – CERIE ÉLECTRICITÉ
// =========================

document.addEventListener("DOMContentLoaded", function () {
  const nav = document.getElementById("nav");
  const navToggle = document.getElementById("navToggle");
  
  if (nav && navToggle) {
    navToggle.addEventListener("click", () => {
      nav.classList.toggle("active");
      navToggle.classList.toggle("open"); // <-- pour animer les barres
  });
  // Fermer le menu quand on clique sur un lien (sur mobile)
  const navLinks = nav.querySelectorAll("a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (nav.classList.contains("active")) {
        nav.classList.remove("active");
        navToggle.classList.remove("open"); // <-- on referme aussi l’icône
      }
    });
  });
}

  // =========================
  // SWIPER – CARROUSEL RÉALISATIONS
  // =========================

  const slider = document.querySelector(".realisations-swiper");

  if (slider && typeof Swiper !== "undefined") {
    new Swiper(".realisations-swiper", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        768: { slidesPerView: 2 },
        1100: { slidesPerView: 3 },
      },
    });
  }

  // =========================
  // GLIGHTBOX – ZOOM IMAGES
  // =========================

  if (typeof GLightbox !== "undefined") {
    GLightbox({
      selector: ".glightbox",
      touchNavigation: true,
      loop: true,
    });
  }

});




