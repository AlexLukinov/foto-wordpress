<template>
    <div class="page info_page" :class="$mq">
        <header-with-back></header-with-back>
        <div v-if="isPortfolio" class="info-block" :class="$mq">sadfasdf</div>
        <div v-if="isFlowers" class="info-block" :class="$mq">
            <div class="info-content-left" :class="$mq">
                <h2 class="info-h2" :class="$mq">Букеты &<br> композиции</h2>
                <div class="info-text-block" :class="$mq">
                    <div class="info-ul info-ul-mob" :class="$mq">
                        Профессионально собираем и бережно доставляем букет по любому поводу:<br>
                        - авторский<br>
                        - поздравительный<br>
                        - мужской<br>
                        - бизнес букет<br>
                        - праздничный<br>
                        - школьный/студенческий<br>
                        - новогодний<br>
                        - в корзине, коробке или ящике<br>
                        Только свежие цветы, только стильная упаковка
                    </div>
                    <h3 :class="$mq">УДОБНЫЕ ФОРМЫ ОПЛАТЫ</h3>
                    <div class="info-ul" :class="$mq">
                        - наличными у нас в студии<br>
                        - безналичный расчет на расчетный счет юридического лица<br>
                        - банковской картой при оформлении заказа через сайт/по телефону
                    </div>
                </div>
            </div>
            <div class="info-content-right" :class="$mq">
                <div class="info-ul info-ul-desktop" :class="$mq">
                    Профессионально собираем и бережно доставляем букет по любому поводу:<br>
                    - авторский<br>
                    - поздравительный<br>
                    - мужской<br>
                    - бизнес букет<br>
                    - праздничный<br>
                    - школьный/студенческий<br>
                    - новогодний<br>
                    - в корзине, коробке или ящике<br>
                    Только свежие цветы, только стильная упаковка
                </div>
            </div>
        </div>
        <div v-if="isWeddings" class="info-block" :class="$mq">
            <div class="info-content-left" :class="$mq">
                <h2 class="info-h2" :class="$mq">Свадебная
                    флористика & декор</h2>
                <div class="info-text-block" :class="$mq">
                    <h3 :class="$mq">СВАДЕБНЫЙ БУКЕТ</h3>
                    <div class="info-ul info-ul-margin-bottom" :class="$mq">
                        Хотите красивый букет, который идеально подойдет к Вашему свадебному образу?
                    </div>
                    <div class="info-ul" :class="$mq">
                        Будем рады собрать для Вас любой: от классического до авангардного,
                        от небольшого до внушительных размеров, от моно
                        до букета со сложным экзотическим составом.
                    </div>
                </div>
            </div>
            <div class="info-content-right" :class="$mq">
                <div class="info-text-block" :class="$mq">
                    <h3 :class="$mq">ОФОРМЛЕНИЕ СВАДЬБЫ</h3>
                </div>
                <div class="info-ul info-ul-margin-bottom" :class="$mq">
                    Оформим элегантно и стильно, со вкусом и в деталях Вашу свадьбу.
                </div>
                <div class="info-ul info-ul-margin-bottom" :class="$mq">
                    Будь то небольшое торжество в семейном кругу или грандиозный праздник на 500 гостей, наша команда пройдет с Вами все этапы подготовки: от первой палитры вдохновения до финальной  реализации на площадке.
                </div>
                <div class="info-ul info-ul-margin-bottom" :class="$mq">
                    Каждый запрос будет рассмотрен с одинаково творческим подходом, вниманием к деталям и воплощением в жизнь.
                </div>
                <div class="info-ul" :class="$mq">
                    Возможно дистанционное согласование.
                </div>
            </div>
        </div>
        <div v-if="isEvents" class="info-block" :class="$mq">
            <div class="info-content-left" :class="$mq">
                <h2 class="info-h2" :class="$mq">Оформление мероприятий</h2>
            </div>
            <div class="info-content-right" :class="$mq">
                <div class="info-ul info-ul-margin-bottom" :class="$mq">
                    Оформим «под ключ» мероприятие любого масштаба семейного и корпоративного формата:<br>
                    - крестины<br>
                    - юбилей<br>
                    - частное мероприятие<br>
                    - презентацию<br>
                    - выставку<br>
                    - конференцию<br>
                    - торжественный прием.
                </div>
                <div class="info-ul" :class="$mq">
                    Индивидуальный дизайн, заключение договора,
                    предоставление всех закрывающих документов, оперативное взаимодействие.
                </div>
            </div>
        </div>
        <div v-if="isCorporate" class="info-block" :class="$mq">
            <div class="info-content-left" :class="$mq">
                <h2 class="info-h2" :class="$mq">Отели & корпоративные клиенты</h2>
            </div>
            <div class="info-content-right" :class="$mq">
                <div class="info-ul info-ul-margin-bottom" :class="$mq">
                    Сделаем флористику, отражающую Ваш стиль.
                    Украсим холл, ресепшен, ресторан отеля.
                    Оформим офисное пространство и переговорную  зону.
                </div>
                <div class="info-ul info-ul-margin-bottom" :class="$mq">
                По звонку соберем и оперативно доставим качественный букет  для Ваших гостей, постояльцев, сотрудников, коллег, партнеров.
                </div>
                <div class="info-ul" :class="$mq">
                    Заключаем договор на корпоративное обслуживание.
                </div>
            </div>
        </div>
        <div v-if="isFuneral" class="info-block" :class="$mq">
            <div class="info-content-left" :class="$mq">
                <h2 class="info-h2" :class="$mq">Ритуальная флористика</h2>
            </div>
            <div class="info-content-right" :class="$mq">
                <div class="info-ul info-ul-margin-bottom" :class="$mq">
                    Выразить свои соболезнования и почтить память ушедших людей цветами – это установленная временем серьезная традиция.
                </div>
                <div class="info-ul info-ul-margin-bottom" :class="$mq">
                    Мы ценим желание клиентов украсить прощание с близкими и дорогими им людьми.
                </div>
                <div class="info-ul info-ul-margin-bottom" :class="$mq">
                    В этот печальный момент мы максимально упростим для Вас выбор, заказ и доставку цветов (венка, букета, композиции, корзины с цветами).
                </div>
                <div class="info-ul" :class="$mq">
                    Если Вы находитесь за пределами Крыма, мы позаботимся о доставке цветов от Вашего имени.
                </div>
            </div>
        </div>
        <div v-if="isWorkshops" class="info-block" :class="$mq">
            <div class="info-content-left" :class="$mq">
                <h2 class="info-h2" :class="$mq">Мастер-классы</h2>
            </div>
            <div class="info-content-right" :class="$mq">
                <div class="info-ul info-ul-margin-bottom" :class="$mq">
                    От веночка из живых цветов до собранного своими руками букета, от свадебного украшения  до настольной композиции – мы предлагаем мастер-классы на любой вкус.
                    Более того, мы разработаем программу мастер-класса специально для Вас!
                </div>
                <div class="info-ul info-ul-margin-bottom" :class="$mq">
                    Для детей и друзей, индивидуальные и корпоративные –
                    наши комфортные и вдохновляющие цветочные мастер-классы для Вас.
                </div>
                <div class="info-ul info-ul-margin-bottom" :class="$mq">
                    Занятия проходят у нас в студии в центре Севастополя либо возможен выезд на Вашу площадку.
                </div>
                <div class="info-ul" :class="$mq">
                    Запросы присылайте на нашу почту buketnoe_buro@mail.ru
                </div>
            </div>
        </div>
        <div class="scroll-element" :class="$mq">
            <div class="arrow-around arrow-rotate" @click="toggleIsActive('developers')">
                <img class="around" src="/wp-content/themes/foto-theme/src/assets/img/around.png" alt="Буектное бюро">
                <img class="arrow arrow-left" src="/wp-content/themes/foto-theme/src/assets/img/arrow-left.png" alt="Буектное бюро">
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                isPortfolio: false,
                isFlowers: false,
                isWeddings: false,
                isEvents: false,
                isCorporate: false,
                isFuneral: false,
                isWorkshops: false
            };
        },
        methods: {
            makeAllFalse: function () {
                this.isPortfolio = false;
                this.isFlowers = false;
                this.isWeddings = false;
                this.isEvents = false;
                this.isCorporate = false;
                this.isFuneral = false;
                this.isWorkshops = false;
            }
        },
        mounted() {
            EventBus.$on('SLIDE_CHANGED', slideNumber => {
                this.makeAllFalse();

                switch (slideNumber) {
                    case 0: this.isPortfolio = true;
                        break;
                    case 1: this.isFlowers = true;
                        break;
                    case 2: this.isWeddings = true;
                        break;
                    case 3: this.isEvents = true;
                        break;
                    case 4: this.isCorporate = true;
                        break;
                    case 5: this.isFuneral = true;
                        break;
                    case 6: this.isWorkshops = true;
                        break;
                    default: this.isPortfolio = true;
                }
            });
        }
    }
</script>

<style lang="scss" scoped>
    @import "../assets/scss/variables";
    .info_page {
        background-color: #fcfcfc;
        z-index: 10;
        height: 100vh;
        position: fixed;
        top: 0;
        &.mobile {
            height: auto;
            position: absolute;
        }
    }
    .info-block {
        width: 80%;
        height: 80%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        &.mobile {
            flex-direction: column;
            margin-top: 10vh;
            height: auto;
            width: 95%;
            justify-content: flex-start;
        }
    }
    .info-content-right, .info-content-left {
        width: 50%;
        height: 80%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        &.mobile {
            width: 100%;
            height: auto;
        }
    }
    .info-content-left {
        width: 40%;
        border-right: 1px solid #dacfb1;
        &.mobile {
           border: none;
        }
    }
    .info-content-right {
        justify-content: flex-end;
        &.mobile {
            justify-content: flex-start;
        }
    }
    .content-block {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        width: 100%;
    }
    .info-h2 {
        font-size: 3vw;
        font-weight: normal;
        color: #333333;
        letter-spacing: 1px;
        margin: 0;
        width: 70%;
        &.mobile {
            text-align: center;
            align-self: center;
            font-size: 3.8vh;
            margin-bottom: 5vh;
            width: 90%;
        }
    }
    .info-text-block h3 {
        font-family: 'HelveticaNeueCyr-Light';
        color: #997a5f;
        letter-spacing: 2px;
        &.mobile {
            font-size: 2.2vh;
            margin-block-end: 1.5em;
            margin-block-start: 1.5em;
        }
    }
    .info-ul{
        text-align: left;
        line-height: 2.2;
        font-family: 'HelveticaNeueCyr-Light';
        color: #333333;
        letter-spacing: 1px;
        font-size: 1.08vw;
        width: 85%;
        &.mobile {
            font-size: 2.2vh;
            width: 100%;
        }

    }
    .scroll-element {
        width: 11%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        transform: rotate(180deg);
        position: absolute;
        right: 0;
        bottom: 7vh;
        height: max-content;
        &.mobile {
            display: none;
        }
    }
    .info-ul-margin-bottom {
        margin-bottom: 2.5vh;
    }
    .info-ul-mob {
        display: none;
        &.mobile {
            display: flex;
        }
    }
    .info-ul-desktop {
        &.mobile {
            display: none;
        }
    }
</style>