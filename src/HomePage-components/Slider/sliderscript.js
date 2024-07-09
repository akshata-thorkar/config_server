// src/components/swiperInit.js
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function animateText(slide) {
  const animatedTextElements = slide.querySelectorAll('.animated-text');
  animatedTextElements.forEach((element) => {
    element.style.opacity = 0; // Reset opacity to 0
    element.style.animation = 'none'; // Reset animation

    // Force reflow
    void element.offsetWidth;

    // Apply the animation again
    element.style.animation = 'fadeInUp 1s forwards';
  });
}

export function initializeSwiper() {
  const swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    effect: 'fade',
    on: {
      init: function () {
        animateText(this.slides[this.activeIndex]);
      },
      slideChangeTransitionStart: function () {
        animateText(this.slides[this.activeIndex]);
      },
    },
  });

  return swiper;
}
