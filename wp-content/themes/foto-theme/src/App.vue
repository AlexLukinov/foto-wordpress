<template>
    <div id="app" v-touch:swipe.top="onSwipeUp" v-touch:swipe.bottom="onSwipeDown" @wheel="onWheel">
        <div class="loading-background" v-if="isLoading"></div>
        <vue-topprogress ref="topProgress" color="#dacfb1"></vue-topprogress>
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
                isLoading: true,
                albums: [],
                posts: [],
                categories: [],
                postsByCategories: [],
                albumsByCatalogs: [],
                isCatalogsUploaded: false,
                isAlbumsUploaded: false,
                isPostsUploaded: false,
                isPostsCategoriesUploaded: false,
            }
        },
        methods: {
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
                let postsByCategory = {};

                _.each(this.posts, post => {
                    post.article_category = _.find(this.categories, ['id', post.article_category[0]]);
                    post.title.rendered = post.title.rendered.replace(/&#038;/g, '&');

                    if (postsByCategory.hasOwnProperty(post.article_category.id)) {
                        postsByCategory[post.article_category.id].posts.push(post);
                    } else {
                        postsByCategory[post.article_category.id] = {category: post.article_category.id, posts: [post]};
                    }
                });

                this.postsByCategories = _.values(postsByCategory);

                _.each(this.postsByCategories, post => {
                    post.category = _.find(this.categories, ['id', post.category]);
                });

                window.posts = this.posts;
                window.categories = this.postsByCategories;
            },
            getPostsCategories() {
                axios
                    .get(
                        SETTINGS.API_BASE_PATH + "article_category?per_page=100"
                    )
                    .then(response => {
                        this.isPostsCategoriesUploaded = true;
                        this.categories = response.data;
                    })
                    .catch(e => {
                        console.log(e);
                    });
            },
            getPosts() {
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
                    if (this.isCatalogsUploaded && this.isAlbumsUploaded && this.isPostsUploaded && this.isPostsCategoriesUploaded) {
                        this.setCatalog();
                        this.setCategories();
                        clearInterval(checkIsUploaded);
                    }
                }, 100);
            },
            handleLoading() {
                this.$refs.topProgress.start();
                this.isLoading = true;

                setTimeout(() => {
                    this.$refs.topProgress.done();
                    this.isLoading = false;
                }, 2000)
            }
        },
        mounted() {
            this.handleLoading();

            EventBus.$on('ROUTE_CHANGED', () => {
                this.handleLoading();
            });

            this.getCatalogs();
            this.getAlbums();
            this.getPosts();
            this.getPostsCategories();

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
