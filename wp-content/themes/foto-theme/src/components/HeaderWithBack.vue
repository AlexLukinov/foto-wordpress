<template>
    <div class="header-wrapper" ref="headerWrapper" id="header-wrapper" :class="$mq" :style="{ backgroudColor: backgroundColor }">
        <div class="header" :class="$mq">
            <div @click="backClicked" class="text-element text-element-back" :class="$mq">
                BACK
            </div>
            <router-link to="/" class="logo-wrap" :class="$mq">
                <img class="logo" src="/wp-content/themes/foto-theme/src/assets/img/logo.png" alt="Букетное бюро">
            </router-link>
            <div class="menu-icon">
                <div class="toggleTopMenu">
                    <div class="main-item menu text-element"
                         @click="showTopMenu = !showTopMenu" :class="$mq">
                        MENU
                    </div>
                </div>
            </div>
            <my-menu v-show="showTopMenu"></my-menu>
        </div>
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
            backClicked: function () {
                this.$router.go(-1);
                EventBus.$emit('close');
            }
        },
        watch:{
            $route (to, from){
                if (to.path != '/menu') {
                    this.showTopMenu = false;
                }

            }
        },
        mounted() {
            EventBus.$on('close', () => {
                this.showTopMenu = false;
            });
        }
    }
</script>

<style lang="scss" scoped>
    @import "../assets/scss/variables";
    .header-wrapper {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 99;
        width: 100%;
        height: 10vh;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: top 0.3s;
        &.mobile {
            height: 7vh;
        }
    }
    .header {
        z-index: 3;
        display: flex;
        justify-content: space-between;
        width: 90%;
        color: white;
        margin: auto;
        align-items: center;
        left: 5%;
        &.mobile {
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