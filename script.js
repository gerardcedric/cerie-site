// =========================
// SCRIPT GLOBAL – CERIE ÉLECTRICITÉ
// =========================

document.addEventListener("DOMContentLoaded", () => {

  // =========================
  // MENU MOBILE
  // =========================

  const nav = document.getElementById("nav");
  const navToggle = document.getElementById("navToggle");

  if (nav && navToggle) {

    // Ouvrir / Fermer le menu
    navToggle.addEventListener("click", () => {
      nav.classList.toggle("active");
      document.body.classList.toggle("no-scroll", nav.classList.contains("active"));
    });

    // Ferme le menu quand on clique sur un lien
    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("active");
        document.body.classList.remove("no-scroll");
      });
    });

    // Fermer le menu si on clique à l’extérieur
    document.addEventListener("click", (e) => {
      if (!nav.contains(e.target) && !navToggle.contains(e.target)) {
        nav.classList.remove("active");
        document.body.classList.remove("no-scroll");
      }
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
