<template>
  <div class="login-p-container">
    <van-popup v-model="show" position="bottom" round class="login-p">
      <LoginForm />
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
        return this.$store.state.login.loginShow
      },
      set(value) {
        this.$store.dispatch('setLoginPop', value)
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
.login-p-container {
  .login-p {
    padding: 20px;
    box-sizing: border-box;
    border-radius: 6px 6px 0 0;
  }
}
</style>
