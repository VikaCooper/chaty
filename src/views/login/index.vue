<!-- home -->
<template>
  <div class="index-container">
    <div class="bg__cont">
      <img src="@/assets/login/bottom-left.png" class="bg__cont__bl" />
      <img src="@/assets/login/bottom-right.png" class="bg__cont__br" />
      <img src="@/assets/login/top-left.png" class="bg__cont__tl" />
      <img src="@/assets/login/top-right.png" class="bg__cont__tr" />
    </div>
    <div class="name" @click="handleLoginClick">
      Chaty Room
    </div>
    <LoginPop />
    <RegisterPop />
  </div>
</template>

<script>
import LoginPop from './components/loginPop'
import RegisterPop from './components/registerPop'
export default {
  components: {
    LoginPop,
    RegisterPop
  },
  data() {
    return {}
  },

  computed: {},

  mounted() {},

  methods: {
    handleLoginClick() {
      this.$store.dispatch('setLoginPop', true)
    }
  }
}
</script>
<style lang="scss" scoped>
.index-container {
  position: relative;
  height: 100vh;
  width: 375px;
  overflow: hidden;
  background: linear-gradient(315deg, #02072f 0%, #091361 100%);
  @include flexbox(center, center, row, nowrap);

  .bg__cont {
    &__tl,
    &__tr,
    &__bl,
    &__br {
      position: absolute;
      z-index: -1;
    }

    &__tl {
      left: 0;
      top: 174px;
    }

    &__tr {
      right: 0;
      top: 0;
    }

    &__bl {
      left: 0;
      top: 565px;
    }

    &__br {
      right: 96px;
      top: 575px;
    }
  }

  .name {
    color: #fff;
    font-size: 32px;
    text-shadow: #091361;
  }
}
</style>
