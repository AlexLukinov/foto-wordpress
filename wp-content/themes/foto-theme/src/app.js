
require("./bootstrap");

import "./assets/css/styles.css";
import './assets/scss/index.scss'
import Vue from 'vue'
import App from './App.vue'
import Portfolio from "./components/Portfolio.vue";
import SlidesPortfolio from './components/SlidesPortfolio.vue'
import HeaderWithBack from './components/HeaderWithBack.vue'
import SlidesHome from './components/SlidesHome.vue'
import ModalOrder from './components/ModalOrder.vue'
import Menu from './components/Menu.vue'
import Post from './components/Post.vue'
import PostContent from './components/PostContent.vue'
import Header from './components/Header.vue'
import Preview from './components/Preview.vue'
import HeaderMenuMobile from './components/HeaderMenuMobile.vue'
import Footer from './components/Footer.vue'
import VueRouter from 'vue-router'
import router from './routes'
import VueMq from 'vue-mq'
import Info from './components/Info.vue'
import Album from './components/Album.vue'
import Vue2TouchEvents from 'vue2-touch-events'

router.beforeEach(function (to, from, next) {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100);

  if (to.path == '/') {
    document.body.style['overflow-y'] = "hidden";
  } else {
    document.body.style['overflow-y'] = "scroll";
  }

  next();
});

Vue.use(Vue2TouchEvents);
Vue.use(VueRouter);
Vue.use(VueMq, {
  breakpoints: {
    mobile: 450,
    tablet: 900,
    laptop: 1250,
    desktop: Infinity,
  }
});

window.EventBus = new Vue();

Vue.component('info', Info);
Vue.component('post', Post);
Vue.component('post-content', PostContent);
Vue.component('album', Album);
Vue.component('slides-portfolio', SlidesPortfolio);
Vue.component('portfolio', Portfolio);
Vue.component('slides-home', SlidesHome);
Vue.component('modal-order', ModalOrder);
Vue.component('my-menu', Menu);
Vue.component('my-header', Header);
Vue.component('header-with-back', HeaderWithBack);
Vue.component('header-menu-mobile', HeaderMenuMobile);
Vue.component('my-footer', Footer);
Vue.component('preview', Preview);


const app = new Vue({
  el: '#app',
  render: h => h(App),
  router: router
});
