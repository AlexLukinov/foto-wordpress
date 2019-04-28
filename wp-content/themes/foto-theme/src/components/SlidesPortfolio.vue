<template>
    <div class="slides-portfolio">
        <div class="page-slides" :class="$mq">
            <h3 class="portfolio-caption" :class="$mq">{{ portfolioSlides[currentNumber].header.caption }}</h3>
            <div class="image-slides" :class="$mq">
                <transition class="slider-body" name="myanim" mode="out-in">
                    <img :src="portfolioSlides[currentNumber].header.photo" :key="'headPhoto' + currentNumber">
                </transition>
            </div>
            <div class="slide-container" :class="$mq">
                <transition name="text-anim" mode="out-in">
                    <span class="slides_text" :class="$mq" :key="'headText' + currentNumber">{{ portfolioSlides[currentNumber].header.backgroundText }}</span>
                </transition>
            </div>
            <div class="arrow-box" :class="$mq">
                <div class="arrow-around arrow-rotate" @click="prev">
                    <div class="div-around"></div>
                    <img class="arrow arrow-left" src="/wp-content/themes/foto-theme/src/assets/img/arrow-left.png" alt="Букетное бюро">
                </div>
                <div class="arrow-around arrow-rotate" @click="next">
                    <img class="arrow arrow-right" src="/wp-content/themes/foto-theme/src/assets/img/arrow-right.png" alt="Букетное бюро">
                    <div class="div-around"></div>
                </div>
            </div>
            <div class="portfolio-footer" :class="$mq">
                <div class="text-element" :class="$mq">
                    <span class="pagination-slide">0{{currentNumber+1}}</span>/07
                </div>
                <div class="info text-element"
                     :class="$mq"
                     id="show-info"
                     @click="showInfo = true"
                >INFO</div>
            </div>
            <div class="see-album" :class="$mq">
                <button class="text-element"
                        @click="scrollMeTo('porto')"
                        :class="$mq">
                    СМОТРЕТЬ<br>АЛЬБОМ
                </button>
                <div class="see-album-line" :class="$mq">
                    <div class="see-album-circle"></div>
                    <div class="album-line" :class="$mq"></div>
                    <div class="see-album-circle"></div>
                </div>
            </div>
            <h3 class="portfolio-h3 h3-border-bottom"
                ref="porto"
                :class="$mq">{{ portfolioSlides[currentNumber].header.caption }}</h3>
            <div class="gallery" id="gallery-portfolio">
                <div class="image"
                     :class="$mq"
                     v-for="album in albumsOnPage">
                    <router-link :to="'/album/' + album.id">
                        <img @mouseover="mouseOnPhoto(album.id)"
                             @mouseleave="mouseLeavePhoto(album.id)"
                             :src="album.main_cover.guid"
                             :ref="album.id"
                             class="fadeImg">
                    </router-link>
                    <div class="catalog-name" :class="$mq">{{album.catalog.name}}</div>
                    <div class="photo-name" :class="$mq">{{album.title.rendered}}</div>
                </div>
            </div>
        </div>
        <div class="arrow-box arrow-box-footer" :class="$mq">
            <div class="arrow-around arrow-rotate" @click="prev">
                <div class="div-around"></div>
                <img class="arrow arrow-left" src="/wp-content/themes/foto-theme/src/assets/img/arrow-left.png" alt="Букетное бюро">
            </div>
            <div class="text-element current-photo">
                <span class="pagination-slide">{{ albumsCountOnPage }}</span>/{{ allAlbums.length }}
            </div>
            <div class="arrow-around arrow-rotate" @click="next">
                <img class="arrow arrow-right" src="/wp-content/themes/foto-theme/src/assets/img/arrow-right.png" alt="Букетное бюро">
                <div class="div-around"></div>
            </div>
        </div>

        <info v-show="showInfo" @returnBack="showInfo = false" class="animated fadeIn"></info>
<!--        <album v-show="showAlbum"></album>-->
    </div>
</template>
<script>
    export default {
        data() {
            return {
                portfolioSlides: [
                    {
                        header: {
                            caption: '',
                            photo: '',
                            backgroundText: ''
                        },
                        albums: [],
                        info: {
                            header: '',
                            mainText: '',
                        }
                    }
                ],
                currentNumber: 0,
                currentPage: 1,
                albumsOnPage: [],
                albumsCountOnPage: 1,
                allAlbums: [],
                timer: null,
                showInfo: false,
                showAlbum: false,
            }
        },
        methods: {
            mouseOnPhoto: function (albumId) {
                this.$refs[albumId][0].src = _.find(window.albums, ['id', albumId]).hover_cover.guid;
            },
            mouseLeavePhoto: function (albumId) {
                this.$refs[albumId][0].src = _.find(window.albums, ['id', albumId]).main_cover.guid;
            },
            next: function () {
                if (this.currentNumber < this.portfolioSlides.length - 1) {
                    this.currentNumber += 1
                } else {
                    this.currentNumber = 0
                }
                EventBus.$emit('SLIDE_CHANGED', this.currentNumber);

                setTimeout(() => {
                    this.setAllAlbums();
                    this.setPagesData();
                });
            },
            prev: function () {
                if (this.currentNumber > 0) {
                    this.currentNumber -= 1
                } else {
                    this.currentNumber = this.portfolioSlides.length - 1
                }
                EventBus.$emit('SLIDE_CHANGED', this.currentNumber);

                setTimeout(() => {
                    this.setAllAlbums();
                    this.setPagesData();
                });
            },
            nextAlbumsPage: function () {
                this.currentPage++;
                this.setPagesData();
            },
            scrollMeTo(refName) {
                var element = this.$refs[refName];
                var top = element.offsetTop;

                window.scrollTo(0, top);
            },
            initGlobalVars: function () {
                let checkIsUploaded = setInterval(() => {
                    if (window.albums && window.catalogs && window.albums.length && window.catalogs.length) {
                        clearInterval(checkIsUploaded);
                        this.setAlbums();
                        this.setAllAlbums();
                        this.setPagesData();
                    }
                }, 20);
            },
            setAlbums: function () {
                this.portfolioSlides = [
                    {
                        header: {
                            caption: 'Весь каталог наших работ',
                            photo: '/wp-content/themes/foto-theme/src/assets/img/portfolio-slider1.jpg',
                            backgroundText: 'Portfolio'
                        },
                        albums: window.albums,
                        info: {
                            header: 'header text',
                            mainText: 'main text',
                        }
                    },
                    {
                        header: {
                            caption: 'Букеты и композиции',
                            photo: '/wp-content/themes/foto-theme/src/assets/img/portfolio-slider2.jpg',
                            backgroundText: 'Flowers'
                        },
                        albums: _.find(window.catalogs, ['catalog.name', 'Букеты и композиции']).albums,
                        info: {
                            header: 'header text',
                            mainText: 'main text',
                        }
                    },
                    {
                        header: {
                            caption: 'Свадебная флористика и декор',
                            photo: '/wp-content/themes/foto-theme/src/assets/img/portfolio-slider3.jpg',
                            backgroundText: 'Weddings'
                        },
                        albums: _.find(window.catalogs, ['catalog.name', 'Свадебная флористика и декор']).albums,
                        info: {
                            header: 'header text',
                            mainText: 'main text',
                        }
                    },
                    {
                        header: {
                            caption: 'Оформление мероприятий',
                            photo: '/wp-content/themes/foto-theme/src/assets/img/portfolio-slider4.jpg',
                            backgroundText: 'Events'
                        },
                        albums: _.find(window.catalogs, ['catalog.name', 'Оформление мероприятий']).albums,
                        info: {
                            header: 'header text',
                            mainText: 'main text',
                        }
                    },
                    {
                        header: {
                            caption: 'Отели и корпоративные клиенты',
                            photo: '/wp-content/themes/foto-theme/src/assets/img/portfolio-slider5.jpg',
                            backgroundText: 'Corporate'
                        },
                        albums: _.find(window.catalogs, ['catalog.name', 'Отели и корпоративные клиенты']).albums,
                        info: {
                            header: 'header text',
                            mainText: 'main text',
                        }
                    },
                    {
                        header: {
                            caption: 'Ритуальная флористика',
                            photo: '/wp-content/themes/foto-theme/src/assets/img/portfolio-slider6.jpg',
                            backgroundText: 'Funeral'
                        },
                        albums: _.find(window.catalogs, ['catalog.name', 'Ритуальная флористика']).albums,
                        info: {
                            header: 'header text',
                            mainText: 'main text',
                        }
                    },
                    {
                        header: {
                            caption: 'Мастер-классы',
                            photo: '/wp-content/themes/foto-theme/src/assets/img/portfolio-slider7.jpg',
                            backgroundText: 'Workshops'
                        },
                        albums: [],
                        info: {
                            header: 'header text',
                            mainText: 'main text',
                        }
                    },
                ];

                this.setPagesData();
            },
            setPagesData: function () {
                this.setAlbumsOnPage();
                this.setAlbumsCountOnPage();
                // this.currentPage = 1;
            },
            setAlbumsOnPage: function () {
                let albumsArrayIndex = this.currentPage - 1;

                if (this.$mq === 'mobile') {
                    this.albumsOnPage = this.allAlbums;
                    this.albumsCountOnPage = this.allAlbums.length;
                } else {
                    if (this.currentPage * 9 > this.allAlbums.length) {
                        this.albumsOnPage = this.allAlbums;
                    } else {
                        this.albumsOnPage = this.allAlbums.slice(0, (albumsArrayIndex + 1) * 9);
                    }
                }
                console.log(this.currentPage)
            },
            setAlbumsCountOnPage: function () {
                // if (this.allAlbums.length <= 9) {
                //     this.albumsCountOnPage = this.allAlbums.length;
                // }

                if (this.$mq === 'mobile') {
                    this.albumsCountOnPage = this.allAlbums.length;
                } else {
                    if (this.currentPage * 9 > this.allAlbums.length) {
                        this.albumsCountOnPage = this.allAlbums.length;
                    } else {
                        this.albumsCountOnPage = this.currentPage * 9;
                    }
                }
            },
            setAllAlbums: function () {
                this.allAlbums = this.portfolioSlides[this.currentNumber].albums;
            },
        },
        computed: {
            strokeWidth: function () {
                let oneStep = 600 / this.data.slides.length;
                return oneStep * (this.currentNumber + 1)
            },
        },
        mounted() {
            EventBus.$on('close', () => {
                this.showInfo = false;
            });

            this.initGlobalVars();

            switch (this.$route.params.service) {
                case 'portfolio': this.currentNumber = 0;
                    break;
                case 'bouquets': this.currentNumber = 1;
                    break;
                case 'weddings': this.currentNumber = 2;
                    break;
                case 'events': this.currentNumber = 3;
                    break;
                case 'corporate': this.currentNumber = 4;
                    break;
                case 'funerals': this.currentNumber = 5;
                    break;
                case 'master-class': this.currentNumber = 6;
                    break;
            }

            EventBus.$on('IS_SCROLLED_TO_BOTTOM', isScrolledToBottom => {
                if (isScrolledToBottom) {
                    ++this.currentPage;

                    this.setPagesData();
                }
            });
        }
    }

</script>
<style lang="scss" scoped>
    @import "../assets/scss/variables";
    .slides-portfolio {
        width: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-pack: distribute;
        justify-content: space-around;
    }
    .page-slides {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -ms-flex-pack: distribute;
        justify-content: space-around;
        width: 90%;
        height: auto;
        margin-top: 10vh;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        &.mobile {
            margin-top: 1vh;
        }
    }
    .portfolio-caption {
        font-family: HelveticaNeueCyr-Light;
        font-size: 0.9vw;
        color: #333333;
        letter-spacing: 1px;
        &.mobile {
            width: 62%;
            font-size: 2.5vh;
            text-align: center;
            height: 7vh;
            align-items: flex-end;
            display: flex;
            justify-content: center;
        }
    }
    span.slides_text {
        font-family: 'MinionVariableConcept';
        font-size: 14.5vw;
        color: #dacfb1;
        &.mobile {
            font-size: 13vh;

        }
    }
    .image-slides {
        width: 24.7%;
        height: 65vh;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 1vh;
        &.mobile {
            width: 50%;
            height: 40vh;
            margin-top: 8vh;
            align-items: flex-end;
        }
    }
    .image-slides img {
        width: 100%;
    }
    .slide-container {
        position: absolute;
        top: 35vh;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80%;
        z-index: -1;
        &.mobile {
            top: 40vh;
        }
    }
    .slide-container::before {
        content: '';
        transform: translateX(-50%);
    }
    .arrow-box {
        position: absolute;
        top: 43vh;
        right: 5%;
        display: flex;
        justify-content: space-between;
        width: 90%;
        &.mobile {
            top: 70vh;
        }
    }
    a.slide-a {
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        width: 250px;
        height: 60px;
        font-family: $font-h2;
        font-size: 16px;
        border: 1px solid white;
        &.tablet, &.mobile {
            width: 160px;
            height: 40px;
        }
    }
    .myanim-enter-active {
        animation: myanim ease-out 0.5s;
    }
    .myanim-leave-active {
        animation: myanimout ease-out 0.5s;
    }
    @keyframes myanim {

        from {
            transform: translateX(200%);
        }
        to {
            transform: translateX(0);
        }
    }
    @keyframes myanimout {

        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(-300%);
        }
    }
    .text-anim-enter-active {
        animation: text-anim linear 0.5s;
    }
    .text-anim-leave-active {
        animation: text-anim-out linear 0.5s;
    }
    @keyframes text-anim {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    @keyframes text-anim-out {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
    .portfolio-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 20vh;
        &.mobile {
            flex-direction: column-reverse;
            width: 20%;
            height: 50vh;
            position: absolute;
            top: 23vh;
        }
    }
    .see-album {
        position: absolute;
        top: 77.5vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 20%;
        height: auto;
        &.mobile {
            top: 79vh;
        }
    }
    .see-album button {
        width: 140px;
        height: 140px;
        border-radius: 100%;
        border: 1px solid #dacfb1;
        font-size: 12px;
        &.mobile {
            width: 100px;
            height: 100px;
            font-size: 11px;
            line-height: 1.4;
        }
    }
    .see-album-line {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 110px;
        width: 5px;
        margin-top: -30px;
        &.mobile {
            margin-top: 5vh;
        }
    }
    .album-line {
        width: 1px;
        height: 100px;
        background-color: #333333;
        &.mobile {
            height: 60px;
        }
    }
    .see-album-circle {
        width: 6px;
        height: 6px;
        border: 1px solid #333333;
        background-color: transparent;
        border-radius: 100%;
    }
    .pagination-slide, .current-photo .pagination-slide {
        color: #997a5f;
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
            opacity: 0.9;
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
        width: 92%;
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
    .portfolio-h3 {
        border-bottom: 1px solid;
        padding: 10vh;
        margin-top: 11vh;
        margin-bottom: 10vh;
        width: 80%;
        text-align: center;
        text-transform: uppercase;
        &.mobile {
            margin-top: 45vh;
        }
    }
    .h3-border-bottom {
        border-bottom: 1px solid #dacfb1;
    }
    .current-photo {
        margin-top: 10vh;
        margin-bottom: 10vh;
    }
    .arrow-box-footer {
        position: static;
        width: 30%;
        &.mobile {
            width: 75%;
        }
    }
    .text-element.info {
        cursor: pointer;
        &.mobile {
            padding-top:1vh;
        }
    }
</style>