<template>
    <div class="page contacts-page" :class="$mq" @wheel="onScroll">
        <modal-order v-if="showModal" @close="showModal = false" :modalMessage.sync="modalMessage">{{ modalMessage }}</modal-order>
        <header-with-back></header-with-back>
        <div class="slide_line" :class="$mq">
            <span class="slide_line_span">0{{ currentBlockNumber }}</span>
            <div class="slide-progress"></div>
            <span class="slide_line_span">0{{ blocksCount }}</span>
        </div>
        <div>
            <div class="scroll-element" v-if="!isAtTheBottom">
                <img src="/wp-content/themes/foto-theme/src/assets/img/arrow-right.png" alt="Букетное бюро">
                <div class="text-element">SCROLL</div>
            </div>
            <div class="scroll-element" v-if="isAtTheBottom" @click="scrollToTop">
                <img src="/wp-content/themes/foto-theme/src/assets/img/arrow-left.png" alt="Букетное бюро">
                <div class="text-element">TO TOP</div>
            </div>
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

        <div class="about-page-block" :class="$mq">
            <div class="content-left m-dn" :class="$mq">
                <div class="contacts-block-p" :class="$mq">
                    <p>Не нашли ответ на свой вопрос? Задайте его нам!<br>
                        У вас есть предложение или комментарий к нашей работе? Оставьте<br>свой отзыв!
                    </p>
                </div>
                <div class="contacts-form">
                    <div class="contacts-input-block">
                        <div class="modal-input" :class="$mq">
                            <input type="text" placeholder="Имя" v-model="name">
                        </div>
                        <div class="modal-input" :class="$mq">
                            <input type="email" placeholder="Email" v-model="email">
                        </div>
                    </div>
                    <div class="contacts-input-block">
                        <div class="modal-input" :class="$mq">
                            <input type="text" placeholder="Телефон" v-model="phone">
                        </div>
                        <div class="modal-input" :class="$mq">
                            <input type="email" placeholder="Город" v-model="city">
                        </div>
                    </div>
                    <div class="contacts-textarea-block">
                        <textarea rows="10" cols="45" name="text" placeholder="Сообщение" v-model="text"></textarea>
                    </div>
                    <div class="contacts-input-block">
                        <div class="modal-input input-submit" :class="$mq">
                            <button type="submit"
                                    :class="$mq"
                                    @click="handleReviewSend">
                                Отправить
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content-right content-right-mobile" :class="$mq">
                <div class="contacts-block-p contacts-block-border jcfe" :class="$mq">
                    <p :class="$mq">АДРЕС<br>
                        г.Севастополь , Пл. Восставших 4, ТК «Новый бульвар».<br>
                        <span class="m-dn" :class="$mq">
                            Для вашего удобства бесплатная гостевая парковка 30"
                        </span>
                    </p>
                </div>
                <div class="contacts-block-p contacts-block-border" :class="$mq">
                    <p :class="$mq">ТЕЛЕФОН<br>
                        + 7 (978) 214 45 05 (Viber,Telegram,WhatsApp)
                    </p>
                </div>
                <div class="contacts-block-p contacts-block-border" :class="$mq">
                    <p :class="$mq">EMAIL<br>
                        buketnoe_buro@mail.ru
                    </p>
                </div>
                <div class="contacts-block-p contacts-block-border" :class="$mq">
                    <p :class="$mq">СОЦИАЛЬНЫЕ СЕТИ</p>
                    <div class="contacts" :class="$mq">
                        <a href="" class="a-text" :class="$mq">Facebook</a>
                        <a href="https://vk.com/buketnoe_buro" rel="nofolow" class="a-text" :class="$mq">Vk</a>
                        <a href="https://www.instagram.com/buketnoe_buro/" rel="nofolow" class="a-text" :class="$mq">Instagram</a>
                    </div>
                </div>
            </div>
            <div class="see-album-line" :class="$mq">
                <div class="see-album-circle" :class="$mq"></div>
                <div class="album-line" :class="$mq"></div>
                <div class="see-album-circle" :class="$mq"></div>
                <div class="horizontal-divider" :class="$mq"></div>
            </div>
        </div>
        <div class="page-contacts-block-info" :class="$mq">
            <div class="info-column" :class="$mq">
                <div class="contacts-block-p" :class="$mq">
                    <p :class="$mq">Работаем по всему Крыму и за его пределами</p>
                </div>
                <div class="contacts-block-p" :class="$mq">
                    <p :class="$mq">Студия открыта с 9.00 до 18.00
                        (воскресенье выходной)</p>
                </div>
                <div class="contacts-block-p" :class="$mq">
                    <p class="block-p-margin-left" :class="$mq">Мы говорим на RUS, ENG, FR <br> языках</p>
                </div>
            </div>
            <div class="info-column" :class="$mq">
                <div class="contacts-block-p" :class="$mq">
                    <p :class="$mq">Всегда на связи по телефону и мессенджерам</p>
                </div>
                <div class="contacts-block-p" :class="$mq">
                    <p :class="$mq">Курьерская доставка. Различные формы оплаты.</p>
                </div>
                <div class="contacts-block-p" :class="$mq">
                    <a href="https://yandex.ru/maps/?um=constructor%3A525bdf82a28509ec10121570025294f295b6324275bb5abaf46f1dc765ba8efa&source=constructorLink">
                        <p id="card" :class="$mq">Смотреть БУКЕТНОЕ БЮРО <br>
                            на карте
                            <span class="arrow-element" :class="$mq">
                            <img src="/wp-content/themes/foto-theme/src/assets/img/arrow-right.png" alt="Букетное бюро">
                        </span>
                        </p>
                    </a>
                </div>
            </div>
            <div class="content-left d-dn" :class="$mq">
                <div class="contacts-block-p" :class="$mq">
                    <p :class="$mq">Не нашли ответ на свой вопрос? Задайте его нам!<br>
                        У вас есть предложение или комментарий к нашей работе? Оставьте<br>свой отзыв!
                    </p>
                </div>
                <div class="contacts-form" :class="$mq">
                    <div class="contacts-input-block input-margin-top" :class="$mq">
                        <div class="modal-input" :class="$mq">
                            <input type="text" :class="$mq" placeholder="Имя">
                        </div>
                        <div class="modal-input" :class="$mq">
                            <input type="email" :class="$mq" placeholder="Email">
                        </div>
                    </div>
                    <div class="contacts-input-block input-margin-top" :class="$mq">
                        <div class="modal-input" :class="$mq">
                            <input type="text" :class="$mq" placeholder="Телефон">
                        </div>
                        <div class="modal-input" :class="$mq">
                            <input type="email" :class="$mq" placeholder="Город">
                        </div>
                    </div>
                    <div class="contacts-textarea-block" :class="$mq">
                        <textarea rows="10"
                                  cols="30"
                                  name="text"
                                  :class="$mq"
                                  placeholder="Сообщение">
                        </textarea>
                    </div>
                    <div class="contacts-input-block submit-mobile" :class="$mq">
                        <div class="modal-input input-submit" :class="$mq">
                            <button type="submit"
                                    :class="$mq"
                                    @click="showModal = true">
                                Отправить
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="about-page-block aifs" :class="$mq">
            <div class="media-block" :class="$mq">
                <div class="media-block-columns columns-border-bottom" :class="$mq"></div>
                <div class="media-block-columns" :class="$mq">
                    <h3 :class="$mq">INSTAGRAM</h3>
                    <div class="media-block-line" :class="$mq"></div>
                    <div class="text-element" :class="$mq">@buketnoe_buro</div>
                </div>
                <div class="media-block-columns media-block-photo" :class="$mq">
                    <div class="photo-container">
                        <a href="https://www.instagram.com/p/BssU1vPl7S5/?utm_source=ig_share_sheet&igshid=u8ffgx12os4"
                           rel="nofollow"
                           class="photo-a">
                            <img src="/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/1.jpg" alt="@buketnoe_buro">
                        </a>
                        <div class="eye-open">
                            <img src="/wp-content/themes/foto-theme/src/assets/img/eye-open.png" alt="@buketnoe_buro">
                        </div>
                    </div>
                    <div class="photo-container">
                        <a href="https://www.instagram.com/p/BtLtGpjF-WX/?utm_source=ig_share_sheet&igshid=f1pj04i77jy6"
                           rel="nofollow"
                           class="photo-a">
                            <img src="/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/6.jpg" alt="@buketnoe_buro">
                        </a>
                        <div class="eye-open">
                            <img src="/wp-content/themes/foto-theme/src/assets/img/eye-open.png" alt="@buketnoe_buro">
                        </div>
                    </div>
                    <div class="photo-container">
                        <a href="https://www.instagram.com/p/BlHmoiWgK4A/?utm_source=ig_share_sheet&igshid=ks6h7ai1quki"
                           rel="nofollow"
                           class="photo-a">
                            <img src="/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/14.jpg" alt="@buketnoe_buro">
                        </a>
                        <div class="eye-open">
                            <img src="/wp-content/themes/foto-theme/src/assets/img/eye-open.png" alt="@buketnoe_buro">
                        </div>
                    </div>
                    <div class="photo-container">
                        <a href="https://www.instagram.com/p/BpOk_XxlDS4/?utm_source=ig_share_sheet&igshid=156o3cy5u2yc5"
                           rel="nofollow"
                           class="photo-a">
                            <img src="/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/7.jpg" alt="@buketnoe_buro">
                        </a>
                        <div class="eye-open">
                            <img src="/wp-content/themes/foto-theme/src/assets/img/eye-open.png" alt="@buketnoe_buro">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="media-block" :class="$mq">
            <div class="media-block-columns columns-border-top" :class="$mq">
                <img src="/wp-content/themes/foto-theme/src/assets/img/preview.png" :class="$mq" alt="Букетное бюро">
            </div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios';
    import SETTINGS from "../settings";
    import blockCounterOnScroll from '../PositionSwitchOnScrollMixin';

    export default {
        mixins: [blockCounterOnScroll],
        data() {
            return {
                showModal: false,
                modalMessage: '',
                isAtTheBottom: false,
                blockClassName: 'about-page-block',
                name: '',
                phone: '',
                email: '',
                city: '',
                text: ''
            };
        },
        methods: {
            handleReviewSend: function () {
                axios
                    .post(
                        SETTINGS.API_CUSTOM_NAMESPACE_BASE_PATH + "create-review", {
                            name: this.name,
                            phone: this.phone,
                            email: this.email,
                            city: this.city,
                            text: this.text
                        }
                    )
                    .then(response => {
                        if(response) {
                            this.modalMessage = 'Наш менеджер обработает его и свяжется с Вами по телефону или электронной почте.'
                        } else {
                            this.modalMessage = 'К сожалению Ваш отзыв не был сохранен. Свяжитесь с нами по телефону или по электронной почте.'
                        }

                        this.showModal = true;

                        this.name = '';
                        this.phone = '';
                        this.email = '';
                        this.city = '';
                        this.text = '';
                    })
                    .catch(e => {
                        console.log(e);
                    });
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../assets/scss/variables";
    .contacts-page {
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
            height: auto;
            margin-top: 8vh;
            flex-direction: column;
        }
    }
    .content-right, .content-left {
        width: 40%;
        height: 75%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-top: 1px solid #dacfb1;
        &.mobile {
            width: 100%;
            height: auto;
        }
    }
    .content-left {
        &.mobile {
            border: none;
        }
    }
    .content-right-mobile {
        &.mobile {
            padding-top: 8vh;

        }
    }
    .slide_line {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 20%;
        position: fixed;
        left: 3%;
        width: 20px;
        top: 42vh;
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
        width: 8%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        transform: rotate(90deg);
        position: fixed;
        right: 0;
        top: 85vh;
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
    .contacts-block-p {
        height: 25%;
        display: flex;
        align-items: flex-end;
        &.mobile {
            width: 70%;
            margin: auto;
        }
    }
    .contacts-block-p p {
        font-size: 1vw;
        &.mobile {
            font-size: 14px;
            text-align: center;
        }
    }
    .contacts-form {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 75%;
        margin-right: 5%;
        &.mobile {
            height: 320px;
            /*min-height: 70vh;*/
            margin: auto;
            width: 95%;
        }
    }
    .contacts-input-block {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        height: 16%;
    }
    .modal-input {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        width: 45%;
        height: 80%;
        &.mobile {
           height: 45px;
           align-items: center;
        }
    }
    .modal-input input {
        width: 95.5%;
        height: 100%;
        border: 1px solid #dacfb1;
        font-size: 1vw;
        padding-left: 10px;
        font-family: $font-text;
        background-color: transparent;
        color: #333333;
        &.mobile {
            font-size: 16px;
        }
    }
    .contacts-textarea-block {
        height: 45%;
        display: flex;
        align-items: flex-end;
        &.mobile {
            width: 101%;
            align-items: center;
            height: 200px;
        }
    }
    textarea {
        outline: none;
        background-color: transparent;
        width: 100%;
        height: 85%;
        border: 1px solid #dacfb1;
        color:#333333;
        padding-left: 10px;
        line-height: 3;
        font-family: 'HelveticaNeueCyr-Light';
        font-size: 0.9vw;
        &.mobile {
            font-size: 16px;
        }
    }
   .input-submit {
        width: 27.5%;
       &.mobile {
           width: 45%;
       }
    }
    .input-submit button {
        width: 100%;
        height: 100%;
        color: #333333;
        border: 1px solid #dacfb1;
        font-size: 1vw;
        &.mobile {
            font-size: 16px;
        }
    }
    .input-submit:hover button {
        color: #997a5f;
    }
    .contacts-block-border {
        border-bottom: 1px solid #dacfb1;
        margin-left: 8%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        &.mobile {
            border: none;
            align-items: center;
            padding: 3%;
        }
    }
    .contacts {
        width: 60%;
        display: flex;
        justify-content: space-between;
        &.mobile {
            width: 100%;
        }
    }
    .contacts .a-text {
        margin-left: 0;
        font-family: $font-text;
    }
    .page-contacts-block-info {
        height: 25vh;
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        &.mobile {
            height: auto;
            width: 100%;
        }
    }
    .info-column {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        &.mobile {
            flex-direction: column;
            width: 100%;
            justify-content: center;
        }
    }
    .info-column .contacts-block-p {
        width: 29%;
        margin-right: 5%;
        &.mobile {
            justify-content: center;
            width: 70%;
            margin: auto;
        }
    }
    .arrow-element img {
        margin-left: 4px;
        margin-bottom: 2px;
    }
    .media-block {
        width: 80%;
        height: 70%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    .media-block-columns {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 30%;
        &.mobile {
            height: 100%;
        }
    }
    .columns-border-bottom {
        height: 10%;
        border-bottom: 1px solid #dacfb1;
        &.mobile {
            display: none;
        }
    }
    .media-block-photo {
        flex-direction: row;
        justify-content: space-between;
        &.mobile {
            width: 120%;
            margin-top: 4vh;
        }
    }
    .photo-container {
        position: relative;
        width: 23%;
        height: auto;
    }
    .photo-container .photo-a img {
        width: 100%;
    }
    .eye-open {
        position: absolute;
        top: 0%;
        left: 0%;
        height: 100%;
        width: 100%;
        justify-content: center;
        align-items: center;
        display: none;
        opacity: 0;
        transition: all 1s linear;
    }
    .eye-open img {
        width: 25%;
    }
    .photo-container:hover .eye-open {
        display: flex;
        opacity: 1;
        transition: all 1s linear;
    }
    .columns-border-top {
        border-top: 1px solid #dacfb1;
        &.mobile {
            margin-top: 5vh;
        }
    }
    .columns-border-top img {
        width: 15%;
        margin: 4%;
        &.mobile {
            width: 35%;
            margin: 3%;
        }
    }
    .slide_line-media {
        top: 25%;
    }
    .media-block-columns h3 {
         font-family: 'HelveticaNeueCyr-Light';
         font-size: 1.5vw;
         letter-spacing: 4px;
        &.mobile {
            font-size: 16px;
        }
     }
    .media-block-columns .text-element {
        font-size: 1.5vw;
        letter-spacing: 2px;
        &.mobile {
            font-size: 16px;
            line-height: 2;
        }
    }
    .aifs {
        align-items: flex-start;
        &.mobile {
            align-items: center;
        }
    }
    .jcfe {
        justify-content: flex-end;
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
    .see-album-line {
        display: none;
        &.mobile {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 110px;
            width: 5px;
            margin-top: 8.5vh;
            position: relative;
        }

    }
    .album-line {
        display: none;
        &.mobile {
            display: flex;
            width: 1px;
            height: 100px;
            background-color: #333333;
        }
    }
    .see-album-circle {
        display: none;
        &.mobile {
            display: flex;
            width: 5px;
            height: 5px;
            border: 1px solid #333333;
            background-color: transparent;
            border-radius: 100%;
        }
    }
    .horizontal-divider {
        display: none;
        &.mobile {
            display: block;
            width: 320px;
            position: absolute;
            height: 1px;
            background-color: #dacfb1;
            margin-bottom: 2vh;
        }
    }
     a #card {
         cursor: pointer;
        &.mobile {
            width: 90%;
            border: 1px solid #dacfb1;
            margin: 7vh auto 7vh auto;
            padding: 5%;
        }
    }
    a #card .arrow-element {
        &.mobile {
            display: none;
        }
    }
    .submit-mobile {
        &.mobile{
            justify-content: flex-end;
            margin-right: -2%;
        }
    }
    .media-block-line {
        display: none;
        &.mobile {
            display: flex;
            height: 1px;
            width: 30px;
            background-color: #333333;
            margin: 2vh;
        }
    }
    .input-margin-top {
        &.mobile {
            margin-top: 8px;
            margin-left: 1%;
        }
    }
    .block-p-margin-left {
        &.mobile {
            margin-left: 10%;
        }
    }
    a #card:hover {
        color: #dacfb1;
    }
</style>