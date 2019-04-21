<template>
    <div class="header" :class="$mq">
        <a href="tel:+7-978-214-45-05" class="text-element call" :class="$mq">CALL</a>
        <router-link to="/" class="logo-wrap" :class="$mq">
            <img class="logo" src="/wp-content/themes/foto-theme/src/assets/img/logo.png" alt="Букетное бюро">
        </router-link>
            <div class="menu-icon" :class="$mq">
                <div class="toggleTopMenu">
                        <div class="main-item menu text-element"
                             @click="showTopMenu = !showTopMenu"  :class="$mq">
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
    .header {
        z-index: 3;
        display: flex;
        justify-content: space-between;
        width: 90.6%;
        height: 10vh;
        color: white;
        margin: auto;
        align-items: center;
        position: absolute;
        top: 3vh;
        &.mobile {
            flex-direction: row-reverse;
            width: 100%;
            height: 7vh;
            border-bottom: 1px solid #dacfb1;
            top: 1vh;
        }
    }
    .menu-icon {
        z-index: 3;
        &.mobile {
            margin-left: 5%;
        }
    }
    .main-item {
        cursor: pointer;
        z-index: 20;
    }
    .main-item-close {
        justify-content: center;
        align-items: center;
    }
    a.call {
        display: none;
            &.mobile {
                display: flex;
                margin-right: 5%;
            }
    }

</style>