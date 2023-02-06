// Swiper 7.4.1
import './vendor/swiper.js';

const staffCarousel = document.querySelector('.staff__slider-container');
const reviewsSlider = document.querySelector('.reviews__carousel-wrapper');

function runStaffSlider() {
  if (staffCarousel) {
    const swiper = new Swiper(staffCarousel, {
      slidesPerView: 4,
      spaceBetween: 40,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      navigation: {
        nextEl: '.staff__button--next',
        prevEl: '.staff__button--prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 'auto',
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 40,
          slidesPerGroup: 1,
        },
      },
    });
  }
}

function runReviewsSlider() {
  if (reviewsSlider) {
    const swiper = new Swiper(reviewsSlider, {
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      loop: false,
      navigation: {
        nextEl: '.reviews__button--next',
        prevEl: '.reviews__button--prev',
      },
    });
  }
}

export {runStaffSlider, runReviewsSlider};
