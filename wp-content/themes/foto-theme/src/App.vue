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
        categories: [],
        articlesByCategories: [],
        albumsByCatalogs: [],
        isCatalogsUploaded: false,
        isAlbumsUploaded: false,
        isPostsUploaded: false,
        isArticlesCategoriesUploaded: false,
        initialHeight: window.innerHeight + window.scrollY,
        isScrolledAlready: false,
        isJustScrolled: false,
        isAtThePageTop: true,
        isAtThePageBottom: false,
        deltaY: 0,
        scrollableRoutePaths: [
          '/portfolio',
          '/blog',
          '/contacts',
          '/aboutUs'
        ],
        switchableRoutePaths: [
          '/',
          '/portfolio',
          '/aboutUs',
          '/blog',
          '/contacts',
        ],
      }
    },
    methods: {
      setInitialScrollData() {
        this.isScrolledAlready = false;
        this.initialHeight = window.innerHeight + window.scrollY;
        this.isAtThePageTop = true;
        this.isAtThePageBottom = false;

        // if just scrolled than set isJustScrolled to true
        // and then set to false with 100ms delay
        this.isJustScrolled = true;
        setTimeout(() => { this.isJustScrolled = false }, 100);
        this.deltaY = 0;
      },
      switchRoute(where, comparePathIndex) {
        let route = this.routes[this.routeIndex + where].path;

        if (
            this.switchableRoutePaths.includes(this.currentRoutePath) &&
            this.currentRoutePath != this.switchableRoutePaths[comparePathIndex] &&
            this.switchableRoutePaths.includes(route)
        ) {
          setTimeout(() => {
            this.$router.push(route);
          }, 0);
          this.setInitialScrollData();
        }
      },
      nextRoute() {
        this.switchRoute(1, (this.switchableRoutePaths.length - 1));
      },
      prevRoute() {
        this.switchRoute(-1, 0);
      },
      onWheel(event) {
        // fire only if not just scrolled (for purposes of good UX on
        // switching components on scroll)
        if (!this.isJustScrolled) {
          // get delta of scroll event and add it to aggregate property deltaY
          let delta = event.deltaY;
          this.deltaY += parseInt(delta);

          let positionY = window.innerHeight + window.scrollY;
          let scrollHeight = document.body.scrollHeight;

          // we at the top of the page
          if (positionY <= this.initialHeight) {
            this.isAtThePageTop = true;
          }

          // if delta positive it's mean that we definitely not at the top of the page
          if (delta > 0) {
            this.isAtThePageTop = false;
          }

          // we at the bottom of the page
          if (positionY >= scrollHeight) {
            this.isAtThePageBottom = true;
          }

          // if overall deltaY more than 150px then switch component
          if (Math.abs(this.deltaY) > 150) {
            // if we on scrollable page then switch if we at the bottom or at the top
            // else switch on sign of delta
            if (this.scrollableRoutePaths.includes(this.currentRoutePath)) {
              if (delta < 0 && this.isAtThePageTop) {
                this.prevRoute();
              }

              if (delta > 0 && this.isAtThePageBottom) {
                this.nextRoute();
              }
            } else {
              if (delta > 0 && this.routeIndex < this.routes.length - 1) {
                this.nextRoute();
              }

              if (delta < 0 && this.routeIndex > 0) {
                this.prevRoute();
              }
            }
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
      },
      setCategories() {
        let articlesByCategory = {};

        _.each(this.posts, post => {
          post.article_category = _.find(this.categories, ['id', post.article_category[0]]);
          post.title.rendered = post.title.rendered.replace(/&#038;/g, '&');

          if (articlesByCategory.hasOwnProperty(post.article_category.id)) {
            articlesByCategory[post.article_category.id].posts.push(post);
          } else {
            articlesByCategory[post.article_category.id] = {category: post.article_category.id, posts: [post]};
          }
        });

        this.articlesByCategories = _.values(articlesByCategory);

        _.each(this.articlesByCategories, article => {
          article.category = _.find(this.categories, ['id', article.category]);
        });

        window.posts = this.posts;
        window.articlesCategories = this.articlesByCategories;
      },
      getArticlesCategories() {
        axios
                .get(
                        SETTINGS.API_BASE_PATH + "article_category?per_page=100"
                )
                .then(response => {
                  this.isArticlesCategoriesUploaded = true;
                  this.categories = response.data;
                })
                .catch(e => {
                  console.log(e);
                });
      },
      getArticles() {
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
      },
      getAlbums() {
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
      },
      getCatalogs() {
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
      },
      checkIsAllDataUploaded() {
        let checkIsUploaded = setInterval(() => {
          if (this.isCatalogsUploaded && this.isAlbumsUploaded && this.isPostsUploaded && this.isArticlesCategoriesUploaded) {
            this.setCatalog();
            this.setCategories();
            clearInterval(checkIsUploaded);
          }
        }, 100);
      },
    },
    computed: {
      routes: function () {
        return this.$router.options.routes;
      },
      routeIndex: function () {
        return this.routes.findIndex(item => item.path === this.$route.path);
      },
      currentRoutePath: function () {
        if (this.routes[this.routeIndex]) {
          return this.routes[this.routeIndex].path;
        }

        return '';
      },
    },
    mounted() {

      this.getCatalogs();
      this.getAlbums();
      this.getArticles();
      this.getArticlesCategories();

      this.checkIsAllDataUploaded();
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
