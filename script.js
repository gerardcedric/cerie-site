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
// ===== Gestion des cookies et de Google Analytics =====
(function () {
  const GA_ID = 'G-YH693X2E9D';
  let analyticsLoaded = false;

  function loadAnalytics() {
    if (analyticsLoaded) return;
    analyticsLoaded = true;

    // Prépare dataLayer + gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(){ dataLayer.push(arguments); }
    window.gtag = window.gtag || gtag;

    // Ajoute le script GA4 dynamiquement
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(script);

    // Config GA4 (avec anonymisation IP)
    gtag('js', new Date());
    gtag('config', GA_ID, { 'anonymize_ip': true });
  }

  function setConsent(value) {
    try {
      localStorage.setItem('cerie_analytics_consent', value);
    } catch (e) {
      // fallback cookie si localStorage impossible
      document.cookie = 'cerie_analytics_consent=' + value + ';path=/;max-age=' + 60 * 60 * 24 * 180;
    }
  }

  function getConsent() {
    try {
      return localStorage.getItem('cerie_analytics_consent');
    } catch (e) {
      const match = document.cookie.match(/(?:^|; )cerie_analytics_consent=([^;]+)/);
      return match ? match[1] : null;
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    const banner = document.getElementById('cookie-banner');
    if (!banner) return; // sécurité si une autre page n'a pas le bandeau

    const btnAccept = document.getElementById('cookie-accept');
    const btnRefuse = document.getElementById('cookie-refuse');
    const settingsBtn = document.getElementById('cookie-settings');

    function hideBanner() {
      banner.style.display = 'none';
    }

    function showBanner() {
      banner.style.display = 'block';
    }

    const current = getConsent();

    if (current === 'accepted') {
      loadAnalytics();
      hideBanner();
    } else if (current === 'refused') {
      hideBanner();
    } else {
      // aucun choix encore => on affiche le bandeau
      showBanner();
    }

    if (btnAccept) {
      btnAccept.addEventListener('click', function () {
        setConsent('accepted');
        loadAnalytics();
        hideBanner();
      });
    }

    if (btnRefuse) {
      btnRefuse.addEventListener('click', function () {
        setConsent('refused');
        hideBanner();
      });
    }

    if (settingsBtn) {
      settingsBtn.addEventListener('click', function () {
        showBanner();
      });
    }
  });
})();





