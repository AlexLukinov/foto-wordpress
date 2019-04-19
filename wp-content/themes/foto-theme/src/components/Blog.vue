<template>
    <div class="page blog-page article">
        <header-with-back></header-with-back>
        <h3 class="h3-border-bottom blog-h3" :class="$mq">{{ blogSlides[currentNumber].header }}</h3>
        <div class="gallery" id="gallery-blog">
            <div class="image"
                 :class="$mq"
                 v-for="post in blogSlides[currentNumber].posts">
                <router-link :to="'/post/' + post.id">
                    <img :src="post.article_photo.guid"
                         :ref="post.id"
                         class="fadeImg">
                    <div class="catalog-name" :class="$mq">{{post.article_category.name}}</div>
                    <div class="photo-name" :class="$mq">{{post.title.rendered}}</div>
                </router-link>
            </div>
        </div>
        <div class="arrow-box arrow-box-footer" :class="$mq">
            <div class="arrow-around arrow-rotate" @click="prev">
                <div class="div-around"></div>
                <img class="arrow arrow-left" src="/wp-content/themes/foto-theme/src/assets/img/arrow-left.png" alt="Букетное бюро">
            </div>
            <div class="text-element current-photo">
                <span class="pagination-slide">53</span>/53
            </div>
            <div class="arrow-around arrow-rotate" @click="next">
                <img class="arrow arrow-right" src="/wp-content/themes/foto-theme/src/assets/img/arrow-right.png" alt="Букетное бюро">
                <div class="div-around"></div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                blogSlides: [
                    {
                        header: '',
                        posts: [],
                    }
                ],
                currentNumber: 0,
            }
        },
        methods: {
            setPosts: function () {
                this.blogSlides = [
                    {
                        header: 'НАШИ ИСТОРИИ И ДРУГИЕ СТАТЬИ',
                        posts: window.posts
                    },
                    {
                        header: 'НАШИ ИСТОРИИ',
                        posts: _.find(window.categories, ['category.name', 'Наши истории']).posts,
                    },
                    {
                        header: 'ДРУГИЕ СТАТЬИ',
                        posts: _.find(window.categories, ['category.name', 'Другие статьи']).posts,
                    },
                ]
            },
            initGlobalVars: function () {
                let checkIsUploaded = setInterval(() => {
                    if (window.categories && window.posts && window.posts.length && window.categories.length) {
                        clearInterval(checkIsUploaded);
                        this.setPosts();
                    }
                }, 20);
            },
            next: function () {
                if (this.currentNumber < this.blogSlides.length - 1) {
                    this.currentNumber += 1
                } else {
                    this.currentNumber = 0
                }
            },
            prev: function () {
                if (this.currentNumber > 0) {
                    this.currentNumber -= 1
                } else {
                    this.currentNumber = this.blogSlides.length - 1
                }
            },
        },
        mounted() {
            this.initGlobalVars();
            console.log(this.$route.params.category);
            switch (this.$route.params.category) {
                case 'all': this.currentNumber = 0;
                    break;
                case 'our-stories': this.currentNumber = 1;
                    break;
                case 'other-articles': this.currentNumber = 2;
                    break;
            }
        }
    }

</script>
<style lang="scss" scoped>
    @import "../assets/scss/variables";
    .blog-page {
        height: auto;
    }

    .image {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        background-size: contain;
        cursor: pointer;
        width: 32%;
        height: auto;
        &.mobile {
            width: 48%;
        }

    }
    .image img {
        width: 100%;
        margin: 1%;

    }
    .image:hover .fadeImg {
        animation: fadeImg 1s ease;
    }
    @keyframes fadeImg {
        0% {
            opacity: 1;
        }
        5% {
            opacity: 0.3;
        }

        100% {
            opacity: 1;
        }
    }
    .gallery {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-wrap: wrap;
        height: auto;
        width: 82%;
    }
    .catalog-name {
        text-transform: uppercase;
        font-family: 'HelveticaNeueCyr-Roman';
        font-size: 0.85vw;
        letter-spacing: 1px;
        color: #666666;
        line-height: 2.5;
        &.mobile {
            line-height: 1.5;
            width: 90%;
            margin-bottom: 1vh;
            margin-top: 1vh;
            font-size: 1.2vh;
        }
    }
    .photo-name {
        font-family: 'Merriweather-Regular';
        font-size: 1.12vw;
        color: #333333;
        line-height: 1.5;
        margin-block-end: 1.5em;
        width: 90%;
        letter-spacing: 1px;
        &.mobile {
            font-size: 1.5vh;
        }
    }
    .blog-h3 {
        border-bottom: 1px solid;
        padding: 5vh;
        margin-top: 11vh;
        margin-bottom: 10vh;
        width: 76%;
        text-align: center;
        &.mobile {
            margin-top: 6vh;
        }
    }
    .h3-border-bottom {
        border-bottom: 1px solid #dacfb1;
    }
    .current-photo {
        margin-top: 10vh;
        margin-bottom: 10vh;
    }
    .slide_line {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 20%;
        position: absolute;
        left: 4%;
        top: 50vh;
        width: 20px;
        &.mobile {
            display: none;
        }
    }
    .slide-progress {
        z-index: 1;
        width: 1px;
        background-color: #333333;
        height: 72%;
    }
    .slide_line_span {
        font-family: $font-element;
        color: #000000;
        font-size: 1.8vh;
        line-height: 1.5;
        padding: 5px;
    }
    .scroll-element {
        width: 9%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        transform: rotate(90deg);
        position: absolute;
        right: 0;
        bottom: 10vh;
        height: max-content;
        &.mobile {
            display: none;
        }
    }
    .scroll-element img {
        margin-bottom: 4px;
    }
    .scroll-element .text-element {
        color: #000000;
    }

</style>