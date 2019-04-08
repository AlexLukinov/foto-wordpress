<template>
    <div class="page about-us_page">
        <div class="about-page-block">
            <header-with-back></header-with-back>
            <div class="page-slides" :class="$mq">
                <div class="horizontal-divider" :class="$mq"></div>
                <div class="name-page name-page-mobile" :class="$mq">ABOUT</div>
                <transition name="myanim"
                            mode="out-in">
                    <div class="image-slides" :class="$mq">
                        <div class="text-element author-photo" :class="$mq">Ph: Slava Vladzimirskaya</div>
                        <img src="/wp-content/themes/foto-theme/src/assets/img/aboutUs1.jpg" :class="$mq">
                    </div>
                </transition>
                <transition name="myanim" mode="out-in">
                    <div class="slides-body" :class="$mq">
                        <div class="name-page" :class="$mq">ABOUT</div>
                        <h2 class="slides_text" :class="$mq">Flowers & event design</h2>
                        <h3 class="slides_text_description" :class="$mq">
                            БУКЕТНОЕ БЮРО - команда профессионалов, влюбленных в свое дело и в красоту цветов.
                        </h3>
                        <router-link to="/portfolio" class="nav-link nav-link-header" :class="$mq">
                            <span class="nav-link-text">Портфолио</span>
                            <div class="arrow-around arrow-rotate">
                                <img class="arrow arrow-right" src="/wp-content/themes/foto-theme/src/assets/img/arrow-right.png" alt="Буектное бюро">
                                <div class="div-around"></div>
                            </div>
                        </router-link>
                    </div>
                </transition>
                <div class="slide_line" :class="$mq">
                    <span class="slide_line_span">01</span>
                    <div class="slide-progress"></div>
                    <span class="slide_line_span" >05</span>
                </div>
            </div>
            <div class="scroll-element" :class="$mq">
                <img src="/wp-content/themes/foto-theme/src/assets/img/arrow-right.png" alt="Буектное бюро">
                <div class="text-element">SCROLL</div>
            </div>
        </div>
        <div class="about-page-block" :class="$mq">
            <div class="content-left" :class="$mq">
                <transition name="myanim" mode="out-in">
                    <div class="text-about" :class="$mq">About</div>
                </transition>
            </div>
            <div class="content-right" :class="$mq">
                <p :class="$mq">Мы стремимся привнести гармонию в жизнь каждого из наших
                    клиентов посредством чудесных букетов и цветочных композиций вне зависимости от их повода.
                </p>
                <p :class="$mq">
                    Cоздаем концептуальные свадебные оформления.
                    Украшаем частные и корпоративные события, мероприятия любого масштаба.
                </p>
                <div class="quote" :class="$mq">
                    «Мы влюблены в свое дело и в красоту цветов»
                </div>
                <div class="content-block">
                    <span class="span-text" :class="$mq">
                        <a class="nav-link-text" href="#" :class="$mq">Ольга Карпова
                        </a> -
                        основатель<br> студии БУКЕТНОЕ БЮРО
                    </span>
                    <router-link to="/contacts" class="nav-link" >
                        <span class="nav-link-text" :class="$mq">Наши контакты</span>
                        <div class="arrow-around arrow-rotate" :class="$mq">
                            <img class="arrow arrow-right" src="/wp-content/themes/foto-theme/src/assets/img/arrow-right.png" alt="Буектное бюро">
                            <div class="div-around"></div>
                        </div>
                    </router-link>
                </div>
            </div>
            <div class="slide_line" :class="$mq">
                <span class="slide_line_span">02</span>
                <div class="slide-progress"></div>
                <span class="slide_line_span" >05</span>
            </div>
            <div class="scroll-element" :class="$mq">
                <img src="/wp-content/themes/foto-theme/src/assets/img/arrow-right.png" alt="Буектное бюро">
                <div class="text-element">SCROLL</div>
            </div>
        </div>
        <div class="about-page-block bcg-image" :class="$mq">
            <div class="content-left" :class="$mq">
                <p class="p-about p-about-left" :class="$mq">Мы с особой заботой относимся к развитию  крепких отношений
                    с нашими партнерами в Крыму и за его пределами, а также
                    поставщиками местного и импортного цветка.
                </p>
                <p class="p-about m-dn" :class="$mq">
                    Мы предъявляем высокие требования к себе и постоянно совершенствуемся.
                    Внимание к деталям и перфекционизм в исполнении - это о нас.
                </p>
                <p class="p-about p-about-right d-dn" :class="$mq">Ежегодно мы разрабатываем и реализуем ряд уникальных свадебных проектов,
                    презентаций и официальных мероприятий, собираем сотни букетов
                    и цветочных композиций, проводим мастер-классы для детей и взрослых,
                    оформляем отели и офисы.
                </p>
            </div>
            <div class="content-right jcc" :class="$mq">
                <p class="p-about p-about-left m-dn" :class="$mq">Ежегодно мы разрабатываем и реализуем ряд уникальных свадебных проектов,
                    презентаций и официальных мероприятий, собираем сотни букетов
                    и цветочных композиций, проводим мастер-классы для детей и взрослых,
                    оформляем отели и офисы.
                </p>
                <p class="p-about d-dn" :class="$mq">
                    Мы предъявляем высокие требования к себе и постоянно совершенствуемся.
                    Внимание к деталям и перфекционизм в исполнении - это о нас.
                </p>
            </div>
                <div class="slide_line" :class="$mq">
                    <span class="slide_line_span">03</span>
                    <div class="slide-progress"></div>
                    <span class="slide_line_span" >05</span>
                </div>
            <div class="scroll-element" :class="$mq">
                <img src="/wp-content/themes/foto-theme/src/assets/img/arrow-right.png" alt="Буектное бюро">
                <div class="text-element">SCROLL</div>
            </div>
        </div>
        <div class="about-page-block" :class="$mq">
            <div class="content-left" :class="$mq">
                <h2 class="caption" :class="$mq">
                    Оправдываем ваше доверие
                </h2>
                <div class="content-block about-link" :class="$mq">
                    <p class="p-link" :class="$mq">
                        БУКЕТНОЕ БЮРО - ежегодный официальный флорист
                        Большого Севастопольского Благотворительного Офицерского бала
                    </p>
                    <router-link to="/contacts" class="nav-link" :class="$mq">
                        <div class="arrow-around arrow-rotate">
                            <img class="arrow arrow-right"
                                 :class="$mq"
                                 src="/wp-content/themes/foto-theme/src/assets/img/arrow-right.png" alt="Буектное бюро">
                            <div class="div-around" :class="$mq"></div>
                        </div>
                    </router-link>
                </div>
                <div class="content-block about-link" :class="$mq">
                    <p class="p-link" :class="$mq">
                        Партнер международной службы доставки цветов FLOWWOW
                    </p>
                    <router-link to="/contacts" class="nav-link" :class="$mq">
                        <div class="arrow-around arrow-rotate">
                            <img class="arrow arrow-right"
                                 :class="$mq"
                                 src="/wp-content/themes/foto-theme/src/assets/img/arrow-right.png" alt="Буектное бюро">
                            <div class="div-around" :class="$mq"></div>
                        </div>
                    </router-link>
                </div>
                <div class="content-block about-link" :class="$mq">
                    <p class="p-link" :class="$mq">
                        Обладатель сертификата Moscow Flower School
                        “II ступень курса свадебных декораторов”
                    </p>
                    <router-link to="/contacts" class="nav-link" :class="$mq">
                        <div class="arrow-around arrow-rotate">
                            <img class="arrow arrow-right"
                                 :class="$mq"
                                 src="/wp-content/themes/foto-theme/src/assets/img/arrow-right.png" alt="Буектное бюро">
                            <div class="div-around" :class="$mq"></div>
                        </div>
                    </router-link>
                </div>
                <div class="content-block about-link" :class="$mq">
                    <p class="p-link" :class="$mq">
                        Участники MK Gregor Lersch /Германия/, Стаса Зубова /Москва/,
                        Лоры Белобровик-Садовской /Белоруссия/ и др.
                    </p>
                    <router-link to="/contacts" class="nav-link" :class="$mq">
                        <div class="arrow-around arrow-rotate">
                            <img class="arrow arrow-right"
                                 :class="$mq"
                                 src="/wp-content/themes/foto-theme/src/assets/img/arrow-right.png" alt="Буектное бюро">
                            <div class="div-around" :class="$mq"></div>
                        </div>
                    </router-link>
                </div>
            </div>
            <div class="content-right otstup" :class="$mq">
                <div class="empty-div" :class="$mq">
                    <h2 class="caption" :class="$mq">
                        Оправдываем ваше доверие
                    </h2>
                </div>
                <div class="content-block about-link" :class="$mq">
                    <p class="p-link" :class="$mq">
                        Обладатель сертификата ARAIK GALSTYAN<br> Moscow International Floral
                        Design School<br> “Wedding design”
                    </p>
                    <router-link to="/contacts" class="nav-link" :class="$mq">
                        <div class="arrow-around arrow-rotate">
                            <img class="arrow arrow-right"
                                 :class="$mq"
                                 src="/wp-content/themes/foto-theme/src/assets/img/arrow-right.png" alt="Буектное бюро">
                            <div class="div-around" :class="$mq"></div>
                        </div>
                    </router-link>
                </div>
                <div class="content-block about-link" :class="$mq">
                    <p class="p-link" :class="$mq">
                        Партнер международного конкурса красоты «Мисс Ялта» в “Mriya Resort & SPA”
                    </p>
                    <router-link to="/contacts" class="nav-link" :class="$mq">
                        <div class="arrow-around arrow-rotate">
                            <img class="arrow arrow-right"
                                 :class="$mq"
                                 src="/wp-content/themes/foto-theme/src/assets/img/arrow-right.png" alt="Буектное бюро">
                            <div class="div-around" :class="$mq"></div>
                        </div>
                    </router-link>
                </div>
                <div class="content-block about-link" :class="$mq">
                    <p class="p-link" :class="$mq">
                        Нас рекомендует: Международный Свадебный портал Zankyou
                    </p>
                    <router-link to="/contacts" class="nav-link" :class="$mq">
                        <div class="arrow-around arrow-rotate">
                            <img class="arrow arrow-right"
                                 :class="$mq"
                                 src="/wp-content/themes/foto-theme/src/assets/img/arrow-right.png" alt="Буектное бюро">
                            <div class="div-around" :class="$mq"></div>
                        </div>
                    </router-link>
                </div>
                <div class="content-block about-link" :class="$mq">
                    <p class="p-link" :class="$mq">
                        Нас рекомендует: Всероссийский Свадебный портал СВАДЕБНЫЙ ЭКСПЕРТ
                    </p>
                    <router-link to="/contacts" class="nav-link" :class="$mq">
                        <div class="arrow-around arrow-rotate">
                            <img class="arrow arrow-right"
                                 :class="$mq"
                                 src="/wp-content/themes/foto-theme/src/assets/img/arrow-right.png" alt="Буектное бюро">
                            <div class="div-around" :class="$mq"></div>
                        </div>
                    </router-link>
                </div>
            </div>
            <div class="slide_line" :class="$mq">
                <span class="slide_line_span">04</span>
                <div class="slide-progress"></div>
                <span class="slide_line_span" >05</span>
            </div>
            <div class="scroll-element" :class="$mq">
                <img src="/wp-content/themes/foto-theme/src/assets/img/arrow-right.png" alt="Буектное бюро">
                <div class="text-element">SCROLL</div>
            </div>
        </div>
        <div class="about-page-block column-reverse" :class="$mq">
            <div class="content-right" :class="$mq">
                <p :class="$mq">Мы известны своим персональным подходом к каждому клиенту,
                    непреклонной приверженностью качеству и верности чувству красоты и эстетики.
                </p>
                <p :class="$mq">
                    Желаете доверить нам Ваш цветочный повод? Свяжитесь с нами прямо сейчас!
                </p>
                <div class="quote" :class="$mq">
                    «В день торжества мы были уверены, что нам не о чем беспокоиться»
                </div>
                <div class="content-block" :class="$mq">
                    <span class="span-text" :class="$mq">
                        <a class="nav-link-text" href="#" :class="$mq">Даниил и Анна</a> -
                        жених и невеста, клиенты студии БУКЕТНОЕ БЮРО
                    </span>
                    <router-link to="/contacts" class="nav-link">
                        <span class="nav-link-text" :class="$mq">Наши истории</span>
                        <div class="arrow-around arrow-rotate" :class="$mq">
                            <img class="arrow arrow-right" src="/wp-content/themes/foto-theme/src/assets/img/arrow-right.png" alt="Буектное бюро">
                            <div class="div-around" :class="$mq"></div>
                        </div>
                    </router-link>
                </div>
            </div>
            <div class="content-left text-why" :class="$mq">
                <div class="text-about text-why" :class="$mq">Why us?</div>
            </div>
            <div class="slide_line" :class="$mq">
                <span class="slide_line_span">05</span>
                <div class="slide-progress"></div>
                <span class="slide_line_span" >05</span>
            </div>
            <div class="scroll-element" :class="$mq">
                <img src="/wp-content/themes/foto-theme/src/assets/img/arrow-left.png" alt="Буектное бюро">
                <div class="text-element">TO TOP</div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
            };
        },
        methods: {
            scrolledToBottom() {
                var routes = this.$router.options.routes;
                var idx = routes.findIndex(item => item.path === this.$route.path);

                if (routes[idx].path != '/portfolio') {
                    if (idx > 0) {
                        this.$router.push(routes[idx - 1])
                    }
                }
            }
        },
        mounted() {
            var routes = this.$router.options.routes;
            var idx = routes.findIndex(item => item.path === this.$route.path);

            window.onscroll = () => {
                console.log(document.body.offsetHeight)
                // if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
                //     this.$router.push(routes[idx + 1])
                // }
            };
        }
    }
</script>

<style lang="scss" scoped>
    @import "../assets/scss/variables";
    .about-us_page {
        background-color: #fcfcfc;
        height: auto;
    }
    .about-page-block {
        position: relative;
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        &.mobile {
            flex-direction: column;
            height: auto;
            margin: auto;
            margin-top: 10vh;
        }
    }
    .page-slides {
        display: flex;
        justify-content: space-between;
        width: 90%;
        height: 83vh;
        align-items: center;
        &.mobile {
            flex-direction: column;
            height: auto;
            margin-top: 5vh;
        }
    }
    .name-page-mobile {
        display: none;
        &.mobile {
            display: block;
            font-size: 1.7vh;
            margin: 1vh;
        }
    }
    .slides-body .name-page {
        &.mobile {
            display: none;
        }
    }
    .slides-body {
        align-items: flex-start;
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 50%;
        justify-content: center;
        &.mobile {
        width: 100%;
            align-items: center;
        }
    }
    .slides-body>div {
        display: flex;
        align-items: center;
    }
    .slides_text {
        font-size: 6vw;
        text-align: left;
        font-weight: normal;
        width: 83%;
        &.mobile {
        font-size: 6vh;
        text-align: center;
        }
    }
    .slides_text_description {
        margin-bottom: 5%;
        font-family: $font-text;
        width: 80%;
        &.mobile {
            font-size: 2.2vh;
            text-align: center;
        }
    }
    .image-slides {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        width: 30%;
        margin-left: 10%;
        &.mobile {
            display: block;
            margin-left: 0;
            align-items: normal;
            justify-content: normal;
            width: 77%;
        }
    }
    .image-slides img {
        width: 100%;
        height: auto;
    }
   .image-slides.mobile img {
        width: 100%;
        z-index: -1;
       &.mobile {
           z-index: 1;
           margin-bottom: 2vh;
           margin-top: 2vh;
       }
   }
    .author-photo {
        font-size: 0.8vw;
        text-align: left;
        color: #dfcfc0;
        transform: rotate(-90deg);
        width: 5%;
        white-space: nowrap;
        margin-bottom: 1%;
        &.mobile {
            display: none;
        }
    }
    .nav-link {
        display: flex;
        justify-content: space-between;
        width: 35%;
        align-items: center;
        &.mobile {
            width: 20%;
        }
    }
    .nav-link-header {
        &.mobile {
            display: none;
        }
    }
    .nav-link-text {
        color: #997a5f;
        font-family: 'Merriweather-Regular';
        font-size: 1vw;
        letter-spacing: 0;
        &.mobile {
            font-size: 1.7vh;
        }
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
    .content-right, .content-left {
        width: 40%;
        height: 70%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        &.mobile {
            height: max-content;
            width: 90%;
        }
    }
    .text-about {
        font-family: 'MinionVariableConcept';
        color: #dacfb1;
        font-size: 11vw;
        margin-top: 5%;
        text-align: left;
        &.mobile {
            font-size: 14vh;
        }
    }
    .quote {
        font-family: 'Merriweather-Italic';
        color: #333333;
        font-size: 3vw;
        letter-spacing: 2px;
        text-align: left;
        line-height: 1.5;
        margin-block-end: 0.5em;
        margin-block-start: 0.3em;
        &.mobile {
            font-size: 3.1vh;
            width: 70%;
            letter-spacing: 1px;
            margin-block-end: 1.5em;
            margin-block-start: 1.3em;
        }

    }
    .content-block {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        width: 100%;
    }
    .span-text {
        width: 53%;
        font-family: 'HelveticaNeueCyr-Light';
        font-size: 1vw;
        text-align: left;
        letter-spacing: 1px;
        line-height: 2;
        &.mobile {
            font-size: 1.7vh;
        }
    }
    .jcc {
        justify-content: center;
        margin-left: 5%;
        &.mobile {
            margin-left: 0;
        }
    }
    .bcg-image {
        background-image: url('/wp-content/themes/foto-theme/src/assets/img/flowerbcg.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: 16%;
        &.mobile {
            background-size: 46%;
        }

    }
    .about-link {
        align-items: flex-end;
        &.mobile {
            align-items: flex-start;
        }
    }
    .about-link .nav-link {
        width: 22%;
        justify-content: center;
        &.mobile {
            justify-content: flex-end;
        }
    }
    .p-link {
        margin: 0;
        width: 78%;
        font-size: 1vw;
        &.mobile {
            font-size: 2.2vh;
            padding-top: 2vh;
            padding-bottom: 2vh;
            border-bottom: 1px solid #dacfb1;
            width: 70%;
        }
    }
    .caption {
        font-weight: normal;
        color: #333333;
        font-size: 3vw;
        letter-spacing: 1px;
        line-height: 1.4;
        &.mobile {
            font-size: 3.5vh;
            width: 70%;
        }
    }
    .otstup {
        margin-left: 3%;
    }
    .empty-div h2, .empty-div p{
     color: transparent;
        &.mobile {
            display: none;
        }
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
    .text-why {
        margin-left: 2%;
        &.mobile {
            margin-left: 0;
        }
    }
    .text-why .text-about {
        margin-left: 5%;
        font-size: 10vw;
        &.mobile {
            font-size: 14vh;
            margin-left: 0;
        }

    }
    .horizontal-divider {
        display: none;
        &.mobile {
            display: block;
            width: 111%;
            margin-top: 2vh;
            margin-bottom: 2vh;
            height: 1px;
            background-color: #dacfb1;
        }
    }
    .arrow-around {
        &.mobile {
            display: none;
        }
    }
    .p-about {
        &.mobile{
            width: 80%;
        }
    }
    .p-about-right {
        &.mobile {
            margin-left: 20%;
        }
    }
    .d-dn {
        display: none;
        &.mobile {
            display: block;
        }
    }
    .m-dn {
       &.mobile {
           display: none;
       }
    }
    .arrow-right {
        &.mobile {
            width: 25px;
            margin-right: -14px;
            margin-top: 3vh;
        }
    }
    .around {
        &.mobile {
            width: 25px;
            margin-top: 3vh;
        }
    }
    .column-reverse {
        &.mobile {
            flex-direction: column-reverse;
        }
    }
</style>