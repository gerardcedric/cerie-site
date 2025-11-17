document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.realisations-swiper', {
    loop:true,
    slidesPerView:1,
    spaceBetween:20,
    pagination:{ el:'.swiper-pagination', clickable:true },
    navigation:{ nextEl:'.swiper-button-next', prevEl:'.swiper-button-prev' },
    breakpoints:{768:{slidesPerView:2},1100:{slidesPerView:3}}
  });
  GLightbox({ selector: '.glightbox' });
});
