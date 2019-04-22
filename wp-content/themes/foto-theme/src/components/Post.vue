<template>
    <div class="page post-page article" :class="$mq" @wheel="onScroll">
        <header-with-back></header-with-back>

        <div class="slide_line" :class="$mq">
            <span class="slide_line_span">0{{ currentBlockNumber }}</span>
            <div class="slide-progress"></div>
            <span class="slide_line_span">0{{ blocksCount }}</span>
        </div>

        <div>
            <div class="scroll-element" :class="$mq" v-if="!isAtTheBottom">
                <img src="/wp-content/themes/foto-theme/src/assets/img/arrow-right.png" alt="Букетное бюро">
                <div class="text-element">SCROLL</div>
            </div>
            <div class="scroll-element" :class="$mq" v-if="isAtTheBottom" @click="scrollToTop">
                <img src="/wp-content/themes/foto-theme/src/assets/img/arrow-left.png" alt="Букетное бюро">
                <div class="text-element to-top">TO TOP</div>
            </div>
        </div>

        <div class="post-block block-height100" :class="$mq">
            <div class="post-block-width67 block-caption" :class="$mq">
                <div class="post-content-left" :class="$mq">
                    <div class="name-page" :class="$mq">BLOG > НАШИ ИСТОРИИ</div>
                    <div class="post-name" :class="$mq">
                        {{ post.title.rendered }}
                    </div>
                    <div class="post-info" :class="$mq">
                        <div class="date">{{ post.article_date }}</div>
                        <div class="share" :class="$mq">
                            Поделиться: <span @click="isShareButtonsShowed = !isShareButtonsShowed">

                            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                 :class="$mq"
                                 width="1152.000000pt" height="1280.000000pt" viewBox="0 0 1152.000000 1280.000000"
                                 preserveAspectRatio="xMidYMid meet">
<g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
   fill="#000000" stroke="none">
<path d="M9533 12790 c-370 -47 -720 -203 -996 -444 -280 -245 -486 -608 -569
-1002 -20 -95 -23 -137 -23 -329 0 -173 4 -240 19 -315 10 -52 19 -104 20
-114 1 -15 -510 -314 -2464 -1443 -1356 -783 -2472 -1428 -2481 -1433 -12 -7
-35 7 -95 57 -234 196 -520 332 -834 395 -98 19 -146 23 -320 23 -174 0 -222
-4 -320 -23 -489 -99 -897 -366 -1162 -762 -359 -537 -405 -1206 -123 -1785
248 -510 710 -861 1285 -977 97 -19 147 -23 315 -23 215 0 278 8 463 56 256
67 510 199 707 368 l69 60 31 -19 c16 -10 1130 -653 2475 -1430 1345 -776
2448 -1414 2452 -1418 4 -4 -2 -55 -14 -112 -18 -89 -22 -139 -22 -330 -1
-198 2 -238 22 -334 83 -394 289 -756 569 -1002 454 -396 1063 -543 1640 -395
532 137 981 524 1195 1029 206 487 193 1016 -37 1488 -247 508 -709 861 -1277
976 -98 20 -143 23 -333 23 -190 0 -235 -3 -330 -23 -302 -63 -594 -202 -820
-391 l-60 -50 -45 25 c-25 14 -1145 660 -2489 1437 l-2443 1411 5 35 c3 20 13
83 22 141 21 135 16 410 -10 553 -11 59 -15 101 -9 106 8 7 4895 2830 4949
2859 18 9 34 0 117 -67 226 -180 480 -298 786 -363 93 -20 136 -23 327 -23
191 0 235 3 335 23 392 80 759 288 1006 569 518 593 598 1441 199 2108 -274
456 -722 761 -1255 852 -104 17 -380 25 -477 13z" />
</g>
</svg>
                        </span>
                            <ul v-if="isShareButtonsShowed" :class="$mq">
                                <li>
                                    <a :href="'https://vk.com/share.php?url=' + encodeURI('http://foto.test/post/' + post.id)" class="social-vk" target="_blank">
                                        <i class="fab fa-vk" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li>
                                    <a :href="'https://www.facebook.com/sharer.php?u=' + encodeURI('http://foto.test/post/' + post.id) + '&t=' + encodeURIComponent(post.title.rendered)" class="social-fb" target="_blank">
                                        <i class="fab fa-facebook-f" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li>
                                    <a :href="'http://pinterest.com/pin/create/button/?url=' + encodeURI('http://foto.test/post/' + post.id) + '&media=' + encodeURI(post.article_photo.guid) + '&description=' + encodeURIComponent(post.title.rendered)" class="pin-it-button" count-layout="horizontal">
                                        <i class="fab fa-pinterest-p" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li>
                                    <a :href="'whatsapp://send?text=http://foto.test/post/' + post.id" data-action="share/whatsapp/share">
                                        <i class="fab fa-whatsapp" aria-hidden="true"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="post-content-right text-end" :class="$mq">
                    <div class="epigraph" :class="$mq" v-html="post.epigraph"></div>
                </div>
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
                isShareButtonsShowed: false
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
                        console.log(this.post)
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
        width: 60%;
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
        z-index: 3;
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
        z-index: 3;
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
            font-size: 2.2vh;
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
    .share {
        align-items: center;
        display: flex;
        justify-content: space-between;
        width: 42%;
        &.mobile {
            width: 46%;
        }
    }
    .share span svg {
        width: 0.9vw;
        height: auto;
        cursor: pointer;
        &.mobile {
            width: 3vw;
        }
    }
    .share ul {
        display: flex;
        justify-content: flex-start;
        position: absolute;
        font-size: 1.3vw;
        &.mobile {
            font-size: 1.8vh;
        }
    }
    .share ul li {
        margin: 20px 20px 0 0;
    }

</style>