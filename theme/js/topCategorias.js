//Top Cateogrias
document.addEventListener('DOMContentLoaded', (event) => {
    var swiper = new Swiper('.cat-vitrine.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 1,
        centeredSlides: false,
        preventClicks :true,
        watchSlidesProgress: true,
        navigation: {
            nextEl: '.cat-vitrine.swiper-container .swiper-button-next',
            prevEl: '.cat-vitrine.swiper-container .swiper-button-prev',
          },
        pagination: {
            el: '.cat-vitrine.swiper-container .swiper-pagination',
            clickable: true,
        },

        breakpoints: { 
            319: {
                slidesPerView: 2.5,
                spaceBetween: 5,
                centeredSlides: false,
            },
            400: {
                slidesPerView: 3,
                spaceBetween: 5,
                centeredSlides: false,
            },
            490: {
                slidesPerView: 3,
                spaceBetween: 20,
                centeredSlides: false,
            },
            630: {
                slidesPerView: 3,
                spaceBetween: 20,
                centeredSlides: false,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 5,
                centeredSlides: false,
            },
            820: {
                slidesPerView: 4,
                spaceBetween: 10,
                centeredSlides: false,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 0,
                centeredSlides: false,
            },
            1150: {
                slidesPerView: 6,
                spaceBetween: 40,
                centeredSlides: false,
                navigation: {
                    nextEl: '.cat-vitrine.swiper-container .swiper-button-next',
                    prevEl: '.cat-vitrine.swiper-container .swiper-button-prev',
                  }
            },
            1820: {
                slidesPerView: 6,
                spaceBetween: 40,
                centeredSlides: false,
                navigation: {
                    nextEl: '.cat-vitrine.swiper-container .swiper-button-next',
                    prevEl: '.cat-vitrine.swiper-container .swiper-button-prev',
                  }
            }
        },
        
        loop: false,
    });
});
//Top Cateogrias