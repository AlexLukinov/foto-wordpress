<template>
    <div v-touch:swipe.top="onSwipeUp" v-touch:swipe.bottom="onSwipeDown" class="page home_page" :class="$mq">
        <my-header :class="$mq"></my-header>
        <!--<headerWidthCall :class="$mq"></headerWidthCall>-->
        <slides-home></slides-home>
        <my-footer :class="$mq"></my-footer>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },
        methods: {
            onSwipeUp() {
                var routes = this.$router.options.routes;
                var idx = routes.findIndex(item => item.path === this.$route.path);

                if (routes[idx].path != '/portfolio') {
                    if (idx < routes.length - 1) {
                        this.$router.push(routes[idx + 1])
                    }
                }
            },
            onSwipeDown() {
                var routes = this.$router.options.routes;
                var idx = routes.findIndex(item => item.path === this.$route.path);

                if (routes[idx].path != '/portfolio') {
                    if (idx > 0) {
                        this.$router.push(routes[idx - 1])
                    }
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import "../assets/scss/variables";
    .home_page {
        height: 92vh;
        justify-content: flex-end;
        &.mobile {
            height: auto;
        }
    }
    .header-width-call {
        display: none;
    }
    .header-width-call {
        &.mobile {
            display: flex;
        }
    }

</style>