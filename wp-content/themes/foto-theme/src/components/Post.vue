<template>
    <div class="page post-page article" :class="$mq" @wheel="onScroll">
        <header-with-back></header-with-back>

        <div class="slide_line" :class="$mq">
            <span class="slide_line_span">0{{ currentBlockNumber }}</span>
            <div class="slide-progress"></div>
            <span class="slide_line_span">0{{ blocksCount }}</span>
        </div>

        <div class="scroll-element" :class="$mq" :key="key">
            <div v-if="!isAtTheBottom">
                <img src="/wp-content/themes/foto-theme/src/assets/img/arrow-right.png" alt="Букетное бюро">
                <div class="text-element">SCROLL</div>
            </div>
            <div v-if="isAtTheBottom">
                <img src="/wp-content/themes/foto-theme/src/assets/img/arrow-left.png" alt="Букетное бюро">
                <div class="text-element">TO TOP</div>
            </div>
        </div>

        <component :is="{template: content}"></component>

        <div class="arrow-box" :class="$mq">
            <router-link :to="'/post/' + previousPostId">
                <div class="arrow-around arrow-rotate" @click="prev">
                    <div class="div-around"></div>
                    <img class="arrow arrow-left" src="/wp-content/themes/foto-theme/src/assets/img/arrow-left.png" alt="Букетное бюро">
                </div>
            </router-link>
            <router-link :to="'/album/' + post.album_id">
                <button class="article-button" :class="$mq">Смотреть больше фото</button>
            </router-link>
            <router-link :to="'/post/' + nextPostId">
                <div class="arrow-around arrow-rotate" @click="next">
                    <img class="arrow arrow-right" src="/wp-content/themes/foto-theme/src/assets/img/arrow-right.png" alt="Букетное бюро">
                    <div class="div-around"></div>
                </div>
            </router-link>
        </div>
        <div class="footer-img" :class="$mq">
            <img src="/wp-content/themes/foto-theme/src/assets/img/preview.png" :class="$mq" alt="Букетное бюро">
        </div>
    </div>
</template>
<script>
    import PostContent from './PostContent.vue';
    import blockCounterOnScroll from '../PositionSwitchOnScrollMixin';

    export default {
        mixins: [blockCounterOnScroll],
        components: {
            PostContent
        },
        data() {
            return {
                post: {
                    album_id: ''
                },
                isAtTheBottom: false,
                content: '',
                blockClassName: 'post-block',
                previousPostId: 0,
                nextPostId: 0,
            }
        },
        methods: {
            prev: function () {

            },
            next: function () {

            },
            setPost: function () {
                let postsIds = window.posts.map(e => { return e.id; });
                let index = postsIds.indexOf(parseInt(this.$route.params.postId));
                this.post = window.posts[index];
                this.content = this.post.content.rendered;
                this.previousPostId = index === 0 ? postsIds.slice(-1).pop() : postsIds[index - 1];
                this.nextPostId = index === postsIds.length - 1 ? postsIds[0] : postsIds[index + 1];
            },
            initGlobalVars: function () {
                let checkIsUploaded = setInterval(() => {
                    if (window.posts && window.posts.length) {
                        clearInterval(checkIsUploaded);
                        this.setPost();
                    }
                }, 20);
            },
        },
        watch: {
            '$route' (to, from) {
                this.initGlobalVars();
            }
        },
        mounted() {
            this.initGlobalVars();
        }
    }
</script>

<style lang="scss" scoped>
    @import "../assets/scss/variables";
    .post-page {
        background-color: #fcfcfc;
        height: auto;
    }
    .mobile {
        .post-block {
            height: auto;
        }
    }
    .post-block {
        position: relative;
        height: 120vh;
        width: 100%;
        &.mobile {
            height: auto;
        }
    }
    .block-double-text {
        height: 50vh;
    }
    .block-height100 {
        height: 100vh;
        &.mobile {
            height: auto;
        }
    }
    .post-block-width67, .post-block-width80 {
        width: 67%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 80%;
        margin: auto;
        margin-top: 10vh;
        &.mobile {
            width: 95%;
            flex-direction: column;
            align-items: flex-start;
            margin-top: 0;
        }
    }
    .post-block-width80 {
        width: 80%;
        &.mobile {
            width: 95%;
        }
    }
    .post-block-height85 {
        height: 85%;
    }

    .post-content-left, .post-content-right {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        width: 50%;
        height: 100%;
        /*overflow: hidden;*/
        position: relative;
        &.mobile {
            width: 100%;
            height: auto;
            margin-top: 5vh;
        }
    }
    .name-page {
        margin-left: 0;
        &.mobile {
            font-size: 1.5vh;
        }
    }
    .post-name, .post-quote {
        font-family: $font-h2;
        font-size: 2.9vw;
        color: #333333;
        text-align: left;
        width: 80%;
        line-height: 1.3;
        margin-block-end: 1.5em;
        margin-block-start: 1.5em;
        &.mobile {
            font-size: 5vh;
            width: 85%;
        }
    }
    .post-quote {
        font-family: 'CasusBook';
        font-size: 2.3vw;
        &.mobile {
            font-size: 3.5vh;
            width: 100%;
        }
    }
    .post-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 50%;
        font-size: 1.1vw;
        font-family: "ArnoProCaption";
        letter-spacing: 1px;
        &.mobile {
            font-size: 2vh;
        }
    }
    .quote-info {
        width: 100%;
        margin-bottom: 1vh;
        &.mobile {
            flex-direction: column;
            align-items: flex-start;
        }
    }
    .info {
        text-align: left;
        width: 26%;
        line-height: 2;
        &.mobile {
            width: 100%;
        }
    }
    .post-block-width67 .post-content-right img, .post-block-width67 .post-content-left img {
        width: 93%;
        &.mobile {
            width: 100%;
        }
    }
    .post-block-width80 .post-content-right img, .post-block-width80 .post-content-left img {
        width: 85%;
        &.mobile {
            width: 100%;
        }
    }
    .slide_line {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 15%;
        min-height: 130px;
        position: fixed;
        left: 4%;
        top: 45vh;
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
        position: fixed;
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
    .footer-img {
        width: 82%;
        height: 70%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        border-top: 1px solid #dacfb1;
        &.mobile {
            width: 90%;
        }
    }
    .footer-img img {
        width: 18%;
        margin: 8vh;
        &.mobile {
            width: 35%;
            margin: 2vh;
        }
    }
    .columns-border-bottom {
        height: 10%;
        border-bottom: 1px solid #dacfb1;
        &.mobile {
            display: none;
        }
    }
    .text-center {
        justify-content: center;
    }
    .text-end {
        justify-content: flex-end;
    }
    p {
        font-family: $blog-p;
        width: 90%;
        &.mobile {
            width: 100%;
        }
    }
    .pw125 {
        width: 125%;
        &.mobile {
            width: 100%;
        }
    }
    .pw100 {
        width: 100%;
        &.mobile {
            width: 100%;
        }
    }
    .vertical-end {
        align-items: flex-end;
    }
    .vertical-center {
        align-items: center;
    }
    .author-photo {
        font-size: 1vw;
        color: #333333;
        transform: rotate(-90deg);
        white-space: nowrap;
        letter-spacing: 0;
        width: 3%;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        &.mobile {
            display: none;
        }
    }
    .container-img {
       justify-content: space-evenly;
        flex-direction: row;
        align-items: flex-end;
    }
    .author-photo-horizontal {
        transform: rotate(0deg);
        align-self: flex-start;
        margin-left: 1vw;
        margin-top: 2vh;
    }
    .arrow-box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 82%;
        height: 40vh;
        &.mobile {
            width: 90%;
        }
    }
    button {
        width: 220px;
        height: 80px;
        font-family: $blog-p;
        font-size: 0.9vw;
        border: 1px solid #dacfb1;
        &.mobile {
            width: 160px;
            height: 60px;
            font-size: 2.2vh;
        }
    }
</style>