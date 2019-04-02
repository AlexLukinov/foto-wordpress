<template>
  <div id="app" @wheel="onWheel">
    <transition name="router-anim">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {
      onWheel(event) {
        var delta = event.deltaY;
        var routes = this.$router.options.routes;
        var idx = routes.findIndex(item => item.path === this.$route.path);


        if (routes[idx].path != '/portfolio') {
          if (delta > 0 && idx < routes.length - 1) {
            this.$router.push(routes[idx + 1])
          }
          if (delta < 0 && idx > 0) {
            this.$router.push(routes[idx - 1])
          }
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
  .router-anim-enter-active {
    animation: going 2s;
    animation-delay: .5s;
    opacity: 0;
  }
  .router-anim-leave-to {
    animation: coming 2s;
  }

  @keyframes going {
    0% {
      -webkit-clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
      clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
    }
    100% {
      -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }

  }
  /*@keyframes coming {
      from {
          transform: translateX(-210px);
          opacity: 0;
      }
      to {
          transform: translateX(0);
          opacity: 1;
      }
  }*/
  @keyframes coming {
    0% {
      -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }
    100% {
      -webkit-clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
      clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
    }
  }

</style>
