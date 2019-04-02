require("./bootstrap");

import "./assets/css/styles.css";
import './assets/scss/index.scss'
import Vue from 'vue'
import App from './App.vue'
import SlidesPortfolio from './components/SlidesPortfolio.vue'
import SlidesHome from './components/SlidesHome.vue'
import ModalOrder from './components/ModalOrder.vue'
import Menu from './components/Menu.vue'
import Header from './components/Header.vue'
import Preview from './components/Preview.vue'
import HeaderWidthBack from './components/HeaderWidthBack.vue'
import HeaderMenuMobile from './components/HeaderMenuMobile.vue'
import Footer from './components/Footer.vue'
import VueRouter from 'vue-router'
import router from './routes'
import VueMq from 'vue-mq'
import VueGallerySlideshow from 'vue-gallery-slideshow'
import Info from './components/Info.vue'
import Album from './components/Album.vue'
import Vue2TouchEvents from 'vue2-touch-events'

Vue.use(Vue2TouchEvents);

window.EventBus = new Vue();

Vue.component('Info', Info);
Vue.component('album', Album);
Vue.component('slidesPortfolio', SlidesPortfolio);
Vue.use(VueRouter);
Vue.component('VueGallerySlideshow', VueGallerySlideshow);
Vue.component('slidesHome', SlidesHome);
Vue.component('modal-order', ModalOrder);
Vue.component('my-menu', Menu);
Vue.component('my-header', Header);
Vue.component('headerWidthBack', HeaderWidthBack);
Vue.component('headerMenuMobile', HeaderMenuMobile);
Vue.component('my-footer', Footer);
Vue.component('preview', Preview);


Vue.use(VueMq, {
  breakpoints: {
    mobile: 450,
    tablet: 900,
    laptop: 1250,
    desktop: Infinity,
  }
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
});
