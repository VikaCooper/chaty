<template>
  <div class="login-f-container">
    <van-form @submit="onSubmit" validate-trigger="onSubmit" validate-first>
      <van-field
        left-icon="user-o"
        v-model="loginFormData.userName"
        placeholder="用户名"
        :rules="[{ required: true, message: '请输入您的用户名' }]"
      />
      <van-field
        v-if="registerShow"
        left-icon="envelop-o"
        v-model="loginFormData.email"
        placeholder="邮箱"
        :rules="[{ required: true, message: '请输入您的邮箱' }]"
      />
      <van-field
        v-model="loginFormData.password"
        type="password"
        placeholder="密码"
        :rules="[{ required: true, message: '请输入您的密码' }]"
        left-icon="eye-o"
      />
      <div class="f-btn">
        <van-button block type="info" native-type="submit"> {{ loginShow ? '登录' : '注册' }} </van-button>
      </div>
      <div class="op-btn">
        <template v-if="loginShow">
          <div class="link-btn" @click="handleForget">忘记密码</div>
          <div class="line-gap"></div>
          <div class="link-btn" @click="handleRegister">注册账号</div>
        </template>
        <template v-if="registerShow">
          <div class="link-btn" @click="handleLogin">已有账号?去登录</div>
        </template>
      </div>
    </van-form>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  props: {
    type: {
      default: 1,
      type: Number || String
    }
  },
  data() {
    return {
      loginFormData: {
        userName: '',
        email: '',
        password: ''
      }
    }
  },
  computed: {
    ...mapState({
      loginShow: state => state.login.loginShow,
      registerShow: state => state.login.registerShow
    })
  },
  methods: {
    onSubmit(values) {
      console.log('form data: ', values)
    },
    handleRegister() {
      this.$store.dispatch('setLoginPop', false)
      this.$store.dispatch('setRegisterPop', true)
    },
    handleLogin() {
      this.$store.dispatch('setLoginPop', true)
      this.$store.dispatch('setRegisterPop', false)
    },
    handleForget() {
      this.$store.dispatch('setLoginPop', false)
      this.$dialog
        .alert({
          title: '忘记密码?',
          message: '暂时不支持找回密码哦~',
          theme: 'round-button',
          overlay: false,
          confirmButtonColor: 'linear-gradient(315deg, #02072f 0%, #091361 100%)'
          // cancelButtonColor: 'white'
        })
        .then(() => {
          // on close
        })
    }
  }
}
</script>
<style lang="scss" scoped>
.login-f-container {
  /deep/.van-field__left-icon .van-icon {
    color: #0073f7;
  }
  /deep/.van-form .van-field {
    width: 335px;
    // height: 56px;
    background: #ffffff;
    border-radius: 4px;
    opacity: 0.9;
    border: 1px solid #c3d3d4;
    margin-bottom: 12px;
  }
  .f-btn {
    width: 335px;
    margin-bottom: 12px;

    .van-button {
      background: linear-gradient(315deg, #02072f 0%, #091361 100%);
    }
  }
  .op-btn {
    padding: 0 28px;
    @include flexbox(center, center, row, nowrap);

    .line-gap {
      width: 1px;
      height: 15px;
      background-color: #979797;
      margin: 0 24px;
    }

    .link-btn {
      height: 22px;
      font-size: 14px;
      font-family: Helvetica;
      color: #000000;
      line-height: 22px;
      text-decoration: underline;
    }
  }

  ::-webkit-input-placeholder {
    /* WebKit, Blink, Edge */
    color: #000;
    font-weight: 500;
  }
  :-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: #000;
    font-weight: 500;
  }
  ::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: #000;
    font-weight: 500;
  }
  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #000;
    font-weight: 500;
  }
}
</style>
