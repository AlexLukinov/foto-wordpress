<template id="modalOrder">
  <transition name="modal">
    <div class="modal-mask" :class="$mq">
        <div class="modal-wrapper" :class="$mq">
            <div class="modal-container" :class="$mq">
                <div class="modal-content" :class="$mq">
                    <h3 :class="$mq">Благодарим за ваше сообщение</h3>
                    <p :class="$mq">Наш менеджер обработает его и свяжется
                        с Вами по телефону или электронной почте.
                    </p>
                    <p :class="$mq">Оставайтесь на связи!</p>
                    <button class="modal-default-button"
                            @click="$emit('close')" :class="$mq">
                        Ок
                    </button>
                </div>
            </div>
        </div>
    </div>
  </transition>
</template>
<script>
    export default {
        data() {
          return {}
        },
    }
</script>
<style lang="scss" scoped>
  @import "../assets/scss/variables";
  h3 {
      font-family: 'HelveticaNeueCyr-Roman';
      color: #a37855;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-size: 1.4vw;
      text-align: center;
      &.mobile {
          font-size: 2.2vh;
      }
  }
  p {
      text-align: center;
      font-size: 1.4vw;
      &.mobile {
          font-size: 2.2vh;
      }
  }
    .modal-mask {
        position: fixed;
        z-index: 2;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: rgba(255, 255, 255, 0.57);
        display: flex;
        justify-content: center;
        align-items: center;
        transition: opacity .3s ease;
    }
    .modal-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        &.mobile {
            width: 90%;
        }
    }
    .modal-container {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 540px;
        margin:auto;
        background-color: #fff;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
        height: 540px;
        &.tablet {

        }
        &.mobile {

        }
    }
    .modal-content {
        width: 70%;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin: auto;
        &.mobile {
            width: 90%;
            height: 50vh;
        }
    }
    .modal-default-button {
      width: 160px;
      height: 50px;
      color: #333333;
      transition: all 1s ease;
      border: 1px solid #dacfb1;
        font-family: "ArnoProCaption";
    }
    .modal-default-button:hover {
      background-color: #f4f1eb;
    }
</style>