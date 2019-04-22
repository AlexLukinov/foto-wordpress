require("./bootstrap");

import './assets/scss/index.scss'
import Vue from 'vue'
import App from './App.vue'
import Services from "./components/Services.vue";
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
import switchByScroll from './SwitchComponentsByScrollMixin'
import vueTopprogress from 'vue-top-progress'

Vue.use(vueTopprogress);
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

router.beforeEach(function (to, from, next) {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 0);

  if (to.path == '/') {
    document.body.style['overflow-y'] = "hidden";
  } else {
    document.body.style['overflow-y'] = "scroll";
  }

  // if (to.path.includes('post') || to.path.includes('album')) {
  EventBus.$emit('ROUTE_CHANGED');
  // }

  next();
});

Vue.component('info', Info);
Vue.component('post', Post);
Vue.component('post-content', PostContent);
Vue.component('album', Album);
Vue.component('slides-portfolio', SlidesPortfolio);
Vue.component('services', Services);
Vue.component('slides-home', SlidesHome);
Vue.component('modal-order', ModalOrder);
Vue.component('my-menu', Menu);
Vue.component('my-header', Header);
Vue.component('header-with-back', HeaderWithBack);
Vue.component('header-menu-mobile', HeaderMenuMobile);
Vue.component('my-footer', Footer);
Vue.component('preview', Preview);


window.MainApp = new Vue({
  el: '#app',
  mixins: [switchByScroll],
  render: h => h(App),
  router: router
});
