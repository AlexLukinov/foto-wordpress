<template>
    <div class="footer">
        <router-link to="/contacts">
            <div class="text-element">
               CONTACT: КРЫМ
            </div>
        </router-link>
        <div class="text-element">
            SCROLL
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                showModal: false,
            };
        },
    }
</script>
<style lang="scss" scoped>
    @import "../assets/scss/variables";

    .footer {
        width: 90%;
        height: 2vh;
        display: flex;
        justify-content: space-between;
        align-items: center;
        &.mobile {
            display: none;
        }
    }

</style>