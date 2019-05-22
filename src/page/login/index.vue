<template>
  <div style="position:relative;height: 100%">
    <div class="login-logo">
      <img src="../../assets/login/logo.png" alt="logo">
    </div>
    <div class="login-title">科技改变教育</div>
    <div class="login-main">
      <userlogin></userlogin>
    </div>
    <div class="login-footer" :style="{'top': clientHeight + 'px'}">
      <span @click="forget">忘记密码</span>
    </div>
  </div>
</template>

<script>
  import {mapState} from "vuex"
  import userlogin from './components/userlogin'

  export default {
    name: "index",
    components: {
      userlogin
    },
    data() {
      return {
        clientHeight: 660
      }
    },
    computed: {
      ...mapState({
        userInfo: state => state.user.userInfo
      }),
    },
    methods: {
      forget() {
        this.$toast('请联系老师，在电脑端重置密码!')
      }
    },
    created() {
      this.clientHeight = document.documentElement.clientHeight - 40
    }
  }
</script>

<style scoped lang="scss">
  .login-logo {
    margin: 0px auto;
    text-align: center;
    padding-top: 30px;
  }

  .login-logo img {
    width: 60px;
  }

  .login-title {
    text-align: center;
    margin: 20px auto;
    font-size: 16px;
  }

  .login-main {
    width: 100%;
    padding-top: 50px;
  }

  .login-main input {
    width: 80%;
    height: 24px;
    margin: 0 auto;
    border-radius: 4px;
    background: #fff;
    border: none;
    padding: 6px;
  }

  .login-footer {
    color: #40D2B4;
    position: absolute;
    left: 0px;
    text-align: center;
    width: 100%;
  }
</style>
