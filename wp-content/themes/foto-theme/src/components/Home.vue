<template>
    <div class="page home_page" :class="$mq">
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