import * as mainFuncs from "./modules/functions.js";

mainFuncs.isWebp();
import {animations} from './modules/animations.js'
import {burger} from './modules/burger.js'
import {priceBlock} from './modules/priceBlock.js'

animations()
burger('.burger','.menu-mob__list');
priceBlock('.salmon-oil__list.volume-list>*','.salmon-oil__price.price-block>.price-block__value')
priceBlock('.deer-antler__list.volume-list>*','.deer-antler__price.price-block>.price-block__value')
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