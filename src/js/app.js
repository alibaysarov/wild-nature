import * as mainFuncs from "./modules/functions.js";

mainFuncs.isWebp();


const brandSlider=new Swiper('.swiper',{
  loop:true,
  direction: 'horizontal',
  slidesPerView:4,
  centeredSlides:true,
  spaceBetween: 30,
  // loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay:true,
  mousewheel: {
    sensivity:true
  },
  speed:500,
  breakpoints:{
    992:{
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768:{
      slidesPerView: 2,
      spaceBetween: 20,
    },
    576:{
      slidesPerView: 1,
      spaceBetween: 20,
    },
    100:{
      slidesPerView: 1,
      spaceBetween: 20,
    },
  }
})