let swiperCards = new Swiper('.product-slider', {
  grabCursor: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  keyboard: {
    enabled: true,
  },

  freeMode: true,
  autoplay: {
    delay: 2000,
    stopOnLastSlide: false,
    disableonInteraction: true,
  },

  speed: 750,

  breakpoints: {
    375: {
      slidesPerView: 1,
      grabCursor: true,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      grabCursor: true,
      spaceBetween: 16,
    },
    1200: {
      slidesPerView: 4,
      grabCursor: true,
      spaceBetween: 18,
    },
  },
});
