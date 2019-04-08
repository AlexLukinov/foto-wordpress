<template>
  <div id="app" @wheel="onWheel">
    <transition name="router-anim" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import axios from 'axios';
  import SETTINGS from "./settings";

  export default {
    data() {
      return {
        catalogs: [],
        albums: [],
        posts: [],
        albumsByCatalogs: [],
        isCatalogsUploaded: false,
        isAlbumsUploaded: false,
        isPostsUploaded: false,
      }
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
      },
      setCatalog() {
        let albumsByCatalog = {};

        _.each(this.albums, album => {
          album.catalog = _.find(this.catalogs, ['id', album.catalog[0]]);
          album.title.rendered = album.title.rendered.replace(/&#038;/g, '&');

          if (albumsByCatalog.hasOwnProperty(album.catalog.id)) {
            albumsByCatalog[album.catalog.id].albums.push(album);
          } else {
            albumsByCatalog[album.catalog.id] = {catalog: album.catalog.id, albums: [album]};
          }
        });

        this.albumsByCatalogs = _.values(albumsByCatalog);
        _.each(this.albumsByCatalogs, catalog => {
          catalog.catalog = _.find(this.catalogs, ['id', catalog.catalog]);
        });

        window.catalogs = this.albumsByCatalogs;
        window.albums = this.albums;
        window.posts = this.posts;
      }
    },
    mounted() {
      axios
              .get(
                  SETTINGS.API_BASE_PATH + "catalog?per_page=100"
              )
              .then(response => {
                  this.isCatalogsUploaded = true;
                  this.catalogs = response.data;
              })
              .catch(e => {
                console.log(e);
              });

      axios
              .get(
                  SETTINGS.API_BASE_PATH + "album?per_page=100"
              )
              .then(response => {
                this.isAlbumsUploaded = true;
                this.albums = response.data;
              })
              .catch(e => {
                console.log(e);
              });
      axios
              .get(
                      SETTINGS.API_BASE_PATH + "article?per_page=100"
              )
              .then(response => {
                this.isPostsUploaded = true;
                this.posts = response.data;
              })
              .catch(e => {
                console.log(e);
              });

      let checkIsUploaded = setInterval(() => {
        if (this.isCatalogsUploaded && this.isAlbumsUploaded && this.isPostsUploaded) {
          this.setCatalog();
          clearInterval(checkIsUploaded);
        }
      }, 100);
    }
  }
</script>

<style lang="scss" scoped>

  .router-anim-enter-active {
    animation: going 2s;
  }
  .router-anim-leave-to {
    animation: coming 1s;
  }

  @keyframes going {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }

  }
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
