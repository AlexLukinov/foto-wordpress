<template>
    <div class="header" :class="$mq">
        <div @click="closeEvent" class="text-element text-element-back" :class="$mq">
            BACK
        </div>
        <router-link to="/" class="logo-wrap" :class="$mq">
            <img class="logo" src="/wp-content/themes/foto-theme/src/assets/img/logo.png" alt="Букетное бюро">
        </router-link>
            <div class="menu-icon">
                <div class="toggleTopMenu">
                        <div class="main-item menu text-element"
                             @click="showTopMenu = !showTopMenu" v-if="!showTopMenu" :class="$mq">
                           MENU
                        </div>
                </div>
            </div>
        <my-menu v-show="showTopMenu"></my-menu>
    </div>

</template>
<script>
    export default {
        data() {
            return {
                showTopMenu: false,
            };
        },
        methods: {
            onCloseClicked: function () {
                this.showTopMenu = false;
                this.$router.go(-1);
            },
            closeEvent: function () {
                EventBus.$emit('close');
            }
        },
        watch:{
            $route (to, from){
                if (to.path != '/menu') {
                    this.showTopMenu = false;
                }

            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../assets/scss/variables";
    .header {
        z-index: 3;
        display: flex;
        justify-content: space-between;
        width: 90%;
        height: 10vh;
        color: white;
        margin: auto;
        align-items: center;
        position: absolute;
        top: 3vh;
        left: 5%;
        &.mobile {
            height: 7vh;
            top: 1vh;
            flex-direction: row-reverse;
         }
    }
    .menu-icon {
        z-index: 10;
    }
    .main-item-close {
        justify-content: center;
        align-items: center;
    }
    .text-element-back {
        cursor: pointer;
        &.mobile {
            font-size: 1.8vh;
        }
    }
</style>