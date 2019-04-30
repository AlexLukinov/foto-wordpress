<template>
    <transition name="menu-anim" mode="out-in">
        <div class="page page-menu" :class="$mq">
            <header-menu-mobile></header-menu-mobile>
            <div class="menu-list" :class="$mq">
                <div class="menu-left-column" :class="$mq">
                    <div class="menu-header" :class="$mq">
                        <div class="logo">
                            <img class="menu-logo" src="/wp-content/themes/foto-theme/src/assets/img/logo.png"
                                 alt="Букетное Бюро">
                        </div>
                    </div>
                    <div class="my-nav" :class="$mq">
                        <router-link to="/">
                            <button>
                                <span class="nav-item" :class="$mq">главная</span>
                            </button>
                        </router-link>
                        <button @click="toggleIsActive('services')">
                               <span class="nav-item"
                                     :class="$mq">наши услуги
                                   <span class="nav-item-span">
                                       <span class="vertical-line"
                                             :style="lineServicesHeight">
                                       </span>
                                       <span class="horizontal-line"></span>
                                   </span>
                               </span>
                        </button>
                        <transition name="roll" mode="out-in">
                            <div v-if="isActiveServices">
                                <router-link to="/services/bouquets">
                                    <button>
                                        <span class="nav-item nav-item-inner" :class="$mq">
                                            <span class="nav-item-span">
                                                <span class="vertical-line" :class="$mq"></span>
                                                <span class="horizontal-line" :class="$mq"></span>
                                            </span>
                                        Букеты и композиции
                                        </span>
                                    </button>
                                </router-link>
                                <router-link to="/services/weddings">
                                    <button>
                                       <span class="nav-item nav-item-inner" :class="$mq">
                                           <span class="nav-item-span">
                                             <span class="vertical-line" :class="$mq"></span>
                                             <span class="horizontal-line" :class="$mq"></span>
                                           </span>
                                           Свадебная флористика и декор
                                       </span>
                                    </button>
                                </router-link>
                                <router-link to="/services/events">
                                    <button>
                                       <span class="nav-item nav-item-inner" :class="$mq">
                                           <span class="nav-item-span">
                                             <span class="vertical-line" :class="$mq"></span>
                                             <span class="horizontal-line" :class="$mq"></span>
                                           </span>
                                           Оформление мероприятий
                                       </span>
                                    </button>
                                </router-link>
                                <router-link to="/services/corporate">
                                    <button>
                                       <span class="nav-item nav-item-inner" :class="$mq">
                                           <span class="nav-item-span">
                                             <span class="vertical-line" :class="$mq"></span>
                                             <span class="horizontal-line" :class="$mq"></span>
                                           </span>
                                           Отели и корпоративные клиенты
                                       </span>
                                    </button>
                                </router-link>
                                <router-link to="/services/funerals">
                                    <button>
                                       <span class="nav-item nav-item-inner" :class="$mq">
                                           <span class="nav-item-span">
                                             <span class="vertical-line" :class="$mq"></span>
                                             <span class="horizontal-line" :class="$mq"></span>
                                           </span>
                                           Ритуальная флористика
                                       </span>
                                    </button>
                                </router-link>
                                <router-link to="/services/master-class">
                                    <button>
                                       <span class="nav-item nav-item-inner" :class="$mq">
                                           <span class="nav-item-span">
                                             <span class="vertical-line" :class="$mq"></span>
                                             <span class="horizontal-line" :class="$mq"></span>
                                           </span>
                                           Мастер-классы
                                       </span>
                                    </button>
                                </router-link>
                            </div>
                        </transition>
                        <router-link to="/aboutUs">
                            <button>
                                <span class="nav-item" :class="$mq">о нас</span>
                            </button>
                        </router-link>
                        <button>
                            <span class="nav-item"
                                  :class="$mq"
                                  @click="toggleIsActive('blog')">блог
                                <span class="nav-item-span">
                                    <span class="vertical-line" :style="lineBlogHeight"></span>
                                    <span @click="toggleIsActive('blog')" class="horizontal-line"></span>
                                </span>
                            </span>
                        </button>
                        <transition name="roll" mode="out-in">
                            <div v-if="isActiveBlog">
                                <router-link to="/blog/our-stories">
                                    <button>
                                        <span class="nav-item nav-item-inner" :class="$mq">
                                            <span class="nav-item-span">
                                                <span class="vertical-line" :class="$mq"></span>
                                                <span class="horizontal-line" :class="$mq"></span>
                                            </span>
                                            Наши истории
                                        </span>
                                    </button>
                                </router-link>
                                <router-link to="/blog/other-articles">
                                    <button>
                                        <span class="nav-item nav-item-inner" :class="$mq">
                                            <span class="nav-item-span">
                                                <span class="vertical-line" :class="$mq"></span>
                                                <span class="horizontal-line" :class="$mq"></span>
                                            </span>
                                            Другие статьи
                                        </span>
                                    </button>
                                </router-link>
                            </div>
                        </transition>
                        <router-link to="/contacts">
                            <button>
                                <span class="nav-item" :class="$mq">контакты</span>
                            </button>
                        </router-link>
                    </div>
                    <div class="contacts" :class="$mq">
                        <a href="https://www.facebook.com/1001533783217153/photos/basw.AbqmKB7-eBPfkBXSIb7EVpPaM5VY3U6F1puasdm8VRdWZlfYhpNUxgV4Uk7kRJhhDoLtM6e9oeQNpClaxKD1oGUfc7gSGTUmfh8lA6s67EUhqyxlwpzKnPI0zvZpeygUKFhHTnbH_0V2ZxJ_QKsTtGrZa_ZOlKs_r54upKMmYfyRSo4uxprZ7pvYONgI1EHESeZzT4QzagF_5u_0rdmA8m7khuMjv59lkO1CbwOvtUkslQ.10205715277309416.10205715277549422.10205715276669400.1086050148098849.10205715278189438.10205715276029384/1086050148098849/?type=1&opaqueCursor=AboD63VT2BzK4X6OAFtOGR5tpHT03WWVmSdm60YARt9tsiiTBTYDsNnm9SrweCzCyxKT01X2nPKhugRuPw_4A4O-XX_27eirjF0Hrh0K0U2QJTWN88RebeRSMTOL9LIf_Yk0_vo9KJPeT3BNfZVRVuvxUwNx56C-W4VnB1kpsfYMBXwVwzwZs2GXEoEwfMdcaC2NcMGi2RoMHNPlTM7AA-qWFj33y13qUSzRYMgfoOInVyh4KJO7qkj1KrX2g3Ljhx7srS5fjvjsQ9G2OYK6QRlOl_K8_UG53v0AoOalgXzT0PzpU4OH4PfEaYdzYan4onQGceKTP4NvbUtHPDOpvw_gVcGd4_trHIiJI44sjzZoWJAOLVVoCUnYFPIJuFVu594EHo6rDBzKNAHEIR87hYlyLDdgqwYMCIp8WGz6qBgmpwtSxVPBZEgQ0Hasof2yRdZYVL1a3La93H6X94Py46iJLMj_2AeRak7vwz6zrk899JAbYXadIDWDfC47Obz6CgfkHNJc7uoSGTdsvwNSmGs-rT3r6_3yFDhODGMgdc6a2QddEYfj4kT3EtpHj5KE-w5agJjKSIf6c5USAbkA8qP-2dQpc725jQkcwvoRPL6Atw&theater"
                           rel="nofolow"
                           class="a-text" :class="$mq">Facebook</a>
                        <a href="https://vk.com/buketnoe_buro" rel="nofolow" class="a-text" :class="$mq">Vk</a>
                        <a href="https://www.instagram.com/buketnoe_buro/" rel="nofolow" class="a-text mr-0" :class="$mq">Instagram</a>
                    </div>
                </div>
                <div class="menu-right-column" :class="$mq">
                    <img src="/wp-content/themes/foto-theme/src/assets/img/close.png"
                         :class="$mq"
                         class="menu-close"
                         @click="closeClicked"
                         alt="Букетное бюро">
                    <div class="arrow-around arrow-rotate"
                         :class="$mq"
                         ref="menuArrow"
                         @click="toggleIsActive('developers')">
                        <div class="div-around" :class="$mq"></div>
                        <img class="arrow arrow-left"
                             :class="$mq"
                             src="/wp-content/themes/foto-theme/src/assets/img/arrow-left.png"
                             alt="Букетное бюро">
                    </div>
                    <div class="lang" :class="$mq">
                        <span :class="$mq">en</span>
                        <div class="lang-divider" :class="$mq"></div>
                        <span class="lang-active" :class="$mq">ru</span>
                    </div>
                </div>
                <transition name="slide-right" mode="out-in">
                    <div class="developers-column"
                         :class="$mq"
                         v-if="isActiveDevelopers">
                        <div class="developers" :class="$mq">
                            <div class="nav-item" :class="$mq">DEVELOPERS</div>
                            <div class="developers-list">
                                <a href="https://www.instagram.com/helen.dsgn/" class="a-text" :class="$mq">Web design:<br>
                                    <span class="developers-name" :class="$mq">
                                      Helen Tihomolova
                                   </span>
                                </a>
                                <a href="https://www.instagram.com/kate_codes/" class="a-text" :class="$mq">Front end:<br>
                                    <span class="developers-name" :class="$mq">
                                       Ekaterina Lukinova
                                   </span>
                                </a>
                                <a href="https://www.instagram.com/kate_codes/" class="a-text" :class="$mq">Back end:<br>
                                    <span class="developers-name" :class="$mq">
                                       Alexey Lukinov
                                   </span>
                                </a>
                            </div>
                            <span class="a-text" :class="$mq">2019</span>

                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </transition>
</template>
<script>
 export default {
     data() {
         return {
             showTopMenu: false,
             isActiveServices: false,
             isActiveBlog: false,
             isActiveDevelopers: false,
             servicesHeight: 0,
             blogHeight: 0,
         };
     },
     methods: {
         toggleIsActive: function (link) {
             switch (link) {
                 case 'services':
                     this.isActiveServices = !this.isActiveServices;
                     break;
                 case 'blog':
                     this.isActiveBlog = !this.isActiveBlog;
                     break;
                 case 'developers':
                     if (this.isActiveDevelopers) {
                         this.$refs.menuArrow.style.transform = 'rotate(360deg)';
                     } else {
                         this.$refs.menuArrow.style.transform = 'rotate(180deg)';
                     }
                     this.isActiveDevelopers = !this.isActiveDevelopers;
                     break;
             }
         },
         closeClicked: function () {
             EventBus.$emit('close');
         }
     },
     computed: {
         lineServicesHeight: function () {
             return `height: ${this.isActiveServices ? 0 : 11}px`;
         },
         lineBlogHeight: function () {
             return `height: ${this.isActiveBlog ? 0 : 11}px`;
         },
     }
 }
</script>

<style lang="scss" scoped>
    @import "../assets/scss/variables";
    button {
        justify-content: flex-start;
    }
    .page-menu {
        z-index: 100;
        width: 100%;
        height: 100vh;
        background-color: rgba(243, 240, 234, 0.7);
        position: fixed;
        display: flex;
        align-items: flex-end;
        top: 0;
        left: 0;
        &.mobile {
            position: fixed;
        }
    }
    .menu-list {
        display: flex;
        width: 42%;
        background-color: $bgc-menu;
        height: 100vh;
        justify-content: space-between;
        align-items: center;
        box-shadow: 5px 0 40px -5px #333;
        position: relative;
        &.mobile {
            width: 100%;
            flex-direction: row-reverse;
            justify-content: flex-end;
        }
    }
    .menu-left-column {
        width: 62%;
        height: 90%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 16%;
        &.mobile {
            margin-bottom: 5vh;
            margin-left: 0%;
            height: 60%;
            border-left: 1px solid #dacfb1;
            justify-content: center;
        }
    }
    .header {
        display: none;
        &.mobile {
            display: flex;
        }
    }
    .menu-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        &.mobile {
            display: none;
        }
    }
    .logo {
        width: 28%;
    }
    .menu-logo {
        width: 100%;
    }
    .nav-item {
        display: flex;
        align-items: center;
        text-transform: uppercase;
        color: $text-color;
        font-family: Montserrat-SemiBold;
        text-align: left;
        font-size: 1.25vw;
        margin-block-end: 0.5em;
        margin-block-start: 0.5em;
        &.mobile {
            font-size: 2.5vh;
        }
    }
    .my-nav {
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        align-self: flex-start;
        margin-bottom: 5%;
        &.mobile {
           align-self: center;
           margin-bottom: 0%;
        }
    }
    .contacts {
        width: 80%;
        display: flex;
        justify-content: space-between;
        &.mobile {
            position: absolute;
            width: 82%;
            top: 86vh;
            left: 8%;
        }
    }
    .contacts .a-text {
        margin-left: 0;
        &.mobile {
            font-size: 2.6vh;
        }
    }
    .menu-right-column {
        width: 22%;
        height: 100%;
        border-left: 1px solid #dacfb1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        z-index: 2;
        &.mobile {
            border: none;
            justify-content: center;
        }
    }
    .arrow-around {
        margin-left: 15%;
        &.mobile {
            margin-left: 10%;
        }
    }
    .menu-close {
        margin-top: 35%;
        &.mobile {
            display: none;
        }
    }
    .lang {
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 5vh;
        &.mobile {
            display: none;
        }
    }
    .lang span {
        font-family: $font-element;
        text-transform: uppercase;
        font-size: 1vw;
        letter-spacing: 1px;
        cursor: pointer;
        color: $text-color;
        margin: 5px;
    }
    span.lang-active {
        color: #a37855;
    }
    .lang-divider {
        width: 1px;
        height: 1vh;
        background-color: $text-color;
        margin-bottom: 6px;
    }
    .nav-item-span {
        width: 11px;
        height: 11px;
        position: relative;
        margin-left: 20px;
        margin-right: 20px;
        display: block;
        transition-property: transform;
        transition-duration: 0.35s;
        transition-timing-function: ease;
    }
    .vertical-line {
        width: 1px;
        height: 11px;
        background: black;
        position: absolute;
        top: 0;
        left: 5px;
        transition: height 200ms ease;
        &.mobile {
            height: 7px;
            top: 3px;
            left: 3px;
        }
    }
    @keyframes vertical-line {
        0% {
            -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
        }
        100% {
            -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 50%, 0 50%);
            clip-path: polygon(0 50%, 100% 50%, 100% 50%, 0 50%);
        }
    }
    .vertical-line-after {
        content: '';
        height: 1px;
        background: #000;
        position: absolute;
        top: 5px;
        left: 5px;
        right: 0;
        width: 1px;
    }
    .horizontal-line {
        width: 11px;
        position: absolute;
        top: 5px;
        height: 1px;
        background-color: black;
        &.mobile {
            width: 7px;
            top: 6px;
        }
    }
    .menu-anim-enter-active {
        animation: coming 1s;
        opacity: 0;
    }
    .menu-anim-leave-active {
        animation: going 1s;
    }
    @keyframes going {
        from {
            -webkit-clip-path: polygon(100% 0, 0 0, 0 100%, 100% 100%);
            clip-path: polygon(100% 0, 0 0, 0 100%, 100% 100%);
        }
        to {
            -webkit-clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
            clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
        }
    }
    @keyframes coming {
        from {
            transform: translateX(210px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    .nav-item-inner {
        text-transform: none;
        font-family: 'Montserrat-Medium';
        font-size: 0.9vw;
        margin-block-end: 1em;
        margin-block-start:1em;
        &.mobile {
            font-size: 1.5vh;
        }
    }
    .nav-item-inner:hover {
        color: #a37855;
    }
    .developers-column {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #fcfcfc;
        &.mobile {
            height: 60%;
            margin-left: 22%;
            border-left: 1px solid #dacfb1;
        }
    }
    .developers {
        width: 100%;
        height: 50%;
        background-color: #fcfcfc;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        margin-left: 15%;
        &.mobile {
            margin-left: 10%;
            height: 65%;
        }
    }
    .developers-list {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
    }
    .developers .a-text {
        margin: 0;
        line-height: 1.5;
        margin-block-end: 0.5em;
        margin-block-start: 0.5em;
    }
    .developers-name {
        font-family: Montserrat-Medium;
        font-size: 0.8vw;
        &.mobile {
            font-size: 1.5vh;
        }
    }
    .roll-enter-active {
        animation: roll-in ease-in 0.5s;
    }
    .roll-leave-active {
        animation: roll-out ease-out 0.5s;
    }
    @keyframes roll-in {
        0% {
            -webkit-clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
            clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
        }
        100% {
            -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        }
    }
    @keyframes roll-out {
        0% {
            -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        }
        100% {
            -webkit-clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
            clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
        }
    }
    .slide-right-enter-active {
        animation: slide-right-in cubic-bezier(1.0, 0.6, 0.9, 1.0) 1s;
    }
    .slide-right-leave-active {
        animation: slide-right-out cubic-bezier(1.0, 0.6, 0.9, 1.0) 1s;
    }
    @keyframes slide-right-in {
        0% {
            -webkit-clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
            clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
        }
        100% {
            -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        }
    }
    @keyframes slide-right-out {
        0% {
            -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        }
        100% {
            -webkit-clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
            clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
        }
    }
    .around {
        &.mobile {
            width: 40%;
        }
    }
    .arrow-left {
        &.mobile {
            width: 40%;
            margin-left: -13px;
        }
    }
    .mr-0 {
        margin-right: 0;
    }
    .a-text {
        &.mobile {
            font-size: 2.2vh;
            text-align: left;
        }
    }
    .div-around {
        margin-top: 0;
    }
    .arrow-rotate {
        &.mobile {
            margin-bottom: 5vh;
            transform: rotate(180deg);
        }
    }
    .menu-close {
        cursor: pointer;
    }

</style>