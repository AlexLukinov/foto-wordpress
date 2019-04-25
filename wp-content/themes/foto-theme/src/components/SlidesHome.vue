<template>
    <div class="page-slides" :class="$mq">
        <transition name="myanim"
                    mode="out-in">
            <div class="image-slides" :class="$mq"
                 v-for="number in [currentNumber]" v-bind:key="number">
                <img :src="data.slides[currentNumber-1]">
            </div>
        </transition>

            <div class="slides-body" :class="$mq"
                 v-for="number in [currentNumber]">
                <div class="name-page" :class="$mq">Home</div>
                <transition name="myanim" mode="out-in">
                <h2 class="slides_text"
                    v-bind:key="number"
                    :class="$mq">{{data.slides_text[currentNumber-1]}}
                </h2>
                </transition>

                <h3 class="slides_text_description" :class="$mq">Добро пожаловать в студию флористики
                    и декора БУКЕТНОЕ БЮРО
                </h3>
                <router-link to="/services/portfolio" class="nav-link" :class="$mq">
                    <span class="nav-link-text">Портфолио</span>
                    <div class="arrow-around arrow-rotate">
                        <img class="arrow arrow-right" src="/wp-content/themes/foto-theme/src/assets/img/arrow-right.png" alt="Букетное бюро">
                        <div class="div-around"></div>
                    </div>
                </router-link>
            </div>


        <div class="slide_line" :class="$mq">
            <span class="slide_line_span" @click="prev">0{{currentNumber}}</span>
            <div class="line-beige" ref="filledLine">
                <div class="slide-progress" :style="fillStyle"></div>
            </div>
            <span class="slide_line_span" @click="next">0{{this.data.slides.length}}</span>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                data: {
                    slides: [
                        '/wp-content/themes/foto-theme/src/assets/img/home1.jpg',
                        '/wp-content/themes/foto-theme/src/assets/img/home2.jpg',
                        '/wp-content/themes/foto-theme/src/assets/img/home3.jpg',
                    ],
                    slides_text: [
                        'Красота в деталях',
                        'Эстетика в работах',
                        'Безупречный сервис'
                    ]
                },
                currentNumber: 1,
                timer: null,
                activeLiIndex: null,
                progress: 1,
                filledLineHeight: null
            }
        },
        methods: {
            next: function () {
                if (this.currentNumber < this.data.slides.length) {
                    this.currentNumber += 1;
                    this.progress++;
                } else {
                    this.currentNumber = 1;
                    this.progress = 1;
                }
            },
            prev: function () {
                if (this.currentNumber > 1) {
                    this.currentNumber -= 1;
                    this.progress--;
                }
                // else {
                //     this.currentNumber = this.data.slides.length;
                //     this.progress = this.data.slides.length;
                // }
            }
        },
        computed: {
            strokeWidth: function () {
                let oneStep = 600 / this.data.slides.length;
                return oneStep * (this.currentNumber + 1)
            },
            fillStyle() {
                return `height: ${this.progress * 33}%`;
            },
        },
        mounted: function () {
            this.height = this.$refs['filledLine'].clientHeight;

            setInterval(() => {
                this.next();
            }, 5000)
        }
    }


</script>

<style lang="scss" scoped>
    @import "../assets/scss/variables";

    .page-slides {
        display: flex;
        justify-content: space-between;
        width: 90%;
        height: 83vh;
        align-items: center;
        &.mobile {
            flex-direction: column;
            width: 98%;
            height: 90vh;
            margin-top: 10vh;
            align-items: flex-start;
        }

    }
    .slides-body {
        align-items: flex-start;
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 60%;
        justify-content: center;
        border-left: 1px solid #dacfb1;
        &.mobile {
            width: 90%;
            height: auto;
            border-left: none;
            margin-left: 5%;
        }
    }
    .slides-body>div {
        display: flex;
        align-items: center;
    }
    .slides_text {
        font-size: 6vw;
        text-align: left;
        margin-left: 8%;
        font-weight: normal;
        width: 72%;
        &.mobile {
            margin-top: 3vh;
            margin-bottom: 2.5vh;
            font-size: 6vh;
            margin-left: 0;
            width: 83%;
        }
    }
    .slides_text_description {
        margin-left: 8%;
        margin-bottom: 5%;
        font-family: 'HelveticaNeueCyr-Roman';
        width: 60%;
        &.mobile {
            margin-left: 0;
            width: 87%;
        }
    }
    .image-slides {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 27.8%;
        margin-left: 5%;
        overflow: hidden;
        &.mobile {
            width: 77%;
            margin-left: 2%;
        }
    }
    .image-slides img {
        width: 100%;
        height: auto;
    }
    .image-slides.mobile img {
        width: 100%;
        z-index: -1;
    }
    .name-page {
        &.mobile {
            display: none;
        }
    }
    .nav-link {
        margin-left: 8%;
        display: flex;
        justify-content: space-between;
        width: 27%;
        align-items: center;
        &.mobile {
            display: none;
        }
    }
    .nav-link-text {
        color: #997a5f;
        font-family: 'Merriweather-Regular';
        font-size: 1.125vw;
    }
    .slide_line {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 20%;
        position: absolute;
        left: 4%;
        width: 20px;
        &.mobile {
            top: 30vh;
            left: 88%;
        }
    }
    .slide-progress {
        position: absolute;
        z-index: 1;
        width: 1px;
        background-color: #333333;
        transition: height 2200ms ease;
    }
    .slide_line_span {
        font-family: $font-element;
        color: #000000;
        font-size: 1.8vh;
        line-height: 1.5;
        padding: 5px;
    }
    .line-beige {
        position: relative;
        z-index: 0;
        width: 1px;
        height: 100%;
        background-color: #dacfb1;
    }
    .name-page {
        margin-left: 8%;
    }

    .myanim-enter-active {
        animation: myanim ease 2s;
    }
    .myanim-leave-active {
        animation: myanimout ease 2s;
    }
    @keyframes myanim {
        0% {
            -webkit-clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
            clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
        }
        100% {
            -webkit-clip-path: polygon(100% 0, 0 0, 0 100%, 100% 100%);
            clip-path: polygon(100% 0, 0 0, 0 100%, 100% 100%);
        }
    }
    @keyframes myanimout {
        0% {
            -webkit-clip-path: polygon(100% 0, 0 0, 0 100%, 100% 100%);
            clip-path: polygon(100% 0, 0 0, 0 100%, 100% 100%);
        }
        100% {
            -webkit-clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
            clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
        }
    }
    .roll-enter-active {
        transform: scale(0.5);
    }
    .roll-leave-active {
        transform: scale(0);
    }
    .active {
        background-color: palegreen;
    }

</style>