// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('main-nav');

  navToggle.addEventListener('click', function () {
    if (mainNav.style.display === 'flex') {
      mainNav.style.display = '';
    } else {
      mainNav.style.display = 'flex';
      mainNav.style.flexDirection = 'column';
      mainNav.style.gap = '10px';
      mainNav.style.position = 'absolute';
      mainNav.style.top = '70px';
      mainNav.style.right = '20px';
      mainNav.style.background = 'white';
      mainNav.style.padding = '12px';
      mainNav.style.borderRadius = '10px';
      mainNav.style.boxShadow = '0 6px 18px rgba(8,15,30,0.08)';
    }
  });
});

// Form submit feedback (Formspree handles delivery)
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', function () {
    setTimeout(function(){
      alert('Merci — votre message a été envoyé. Nous vous répondrons rapidement.');
    }, 300);
  });
}


// Mentions légales toggle
const showLegal = document.getElementById('showLegal');
const legalSection = document.getElementById('legal');
const closeLegal = document.getElementById('closeLegal');

showLegal.addEventListener('click', function(e){
  e.preventDefault();
  legalSection.style.display = 'block';
  legalSection.scrollIntoView({behavior: "smooth"});
});

closeLegal.addEventListener('click', function(){
  legalSection.style.display = 'none';
});
