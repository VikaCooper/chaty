<template>
  <div class="register-p-container">
    <van-popup v-model="show" position="bottom" round class="register-p">
      <LoginForm :type="2" />
    </van-popup>
  </div>
</template>
<script>
import LoginForm from './loginForm'
export default {
  components: {
    LoginForm
  },
  computed: {
    show: {
      get() {
        return this.$store.state.login.registerShow
      },
      set(value) {
        this.$store.dispatch('setRegisterPop', value)
      }
    }
  },
  data() {
    return {
      // show: false
    }
  }
}
</script>
<style lang="scss" scoped>
.register-p-container {
  .register-p {
    padding: 20px;
    box-sizing: border-box;
    border-radius: 6px 6px 0 0;
  }

}
</style>
