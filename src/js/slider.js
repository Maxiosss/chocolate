let swiperCards = new Swiper('.product-slider', {
    loop: true,
    grabCursor: true, 

    keyboard: {
        enabled: true,
      },
    pagination: {
      el: '.swiper-pagination',
      clicable:true, 
      
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });