<template>
    <div class="menu-header" :class="$mq">
        <div  class="text-element text-element-back" :class="$mq">
            BACK
        </div>
        <router-link to="/" class="logo-wrap" :class="$mq">
            <img class="logo" src="/wp-content/themes/foto-theme/src/assets/img/logo.png" alt="Букетное бюро">
        </router-link>
        <div class="lang" :class="$mq">
            <span :class="$mq">en</span>
            <div class="lang-divider" :class="$mq"></div>
            <span class="lang-active" :class="$mq">ru</span>
        </div>
    </div>

</template>
<script>
    export default {

    }
</script>

<style lang="scss" scoped>
    @import "../assets/scss/variables";
    .menu-header{
        display: none;
        &.mobile {
            display: flex;
            z-index: 3;
            display: flex;
            justify-content: space-between;
            width: 90%;
            height: 10vh;
            color: white;
            margin: auto;
            align-items: center;
            position: absolute;
            top: 0;
            left: 5%;

        }
    }
    .lang {
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .lang span {
        font-family: $font-element;
        text-transform: uppercase;
        font-size: 1.8vh;
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
        &.mobile {
            height: 1.3vh;
            margin-bottom: 4px;
        }
    }
    .text-element-back {
        font-size: 1.8vh;
    }
</style>