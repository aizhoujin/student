<template>
  <el-form class="login-form" :rules="loginRules" ref="loginForm" :model="loginForm" label-width="0">
    <el-form-item prop="username" style="height: 36px">
      <el-input size="small" @keyup.enter.native="handleLogin" v-model="loginForm.username" auto-complete="off"
                placeholder="请输入用户名">
      </el-input>
    </el-form-item>
    <el-form-item prop="password" style="height: 36px">
      <el-input size="small" @keyup.enter.native="handleLogin" :type="passwordType" v-model="loginForm.password"
                auto-complete="off" placeholder="请输入密码">
        <i class="login-view" slot="suffix" @click="showPassword"><img :src=passwordeye[passwordActive]></i>
      </el-input>
    </el-form-item>
    <!--<el-form-item prop="code">-->
    <!--<el-row :span="24">-->
    <!--<el-col :span="14">-->
    <!--<el-input size="small" @keyup.enter.native="handleLogin" :maxlength="code.len" v-model="loginForm.code"-->
    <!--auto-complete="off" placeholder="请输入验证码">-->
    <!--<i slot="prefix" class="icon-yanzhengma"></i>-->
    <!--</el-input>-->
    <!--</el-col>-->
    <!--<el-col :span="10">-->
    <!--<div class="login-code">-->
    <!--<span class="login-code-img" @click="refreshCode" v-if="code.type == 'text'">{{code.value}}</span>-->
    <!--<img :src="code.src" class="login-code-img" @click="refreshCode" v-else/>-->
    <!--&lt;!&ndash; <i class="icon-shuaxin login-code-icon" @click="refreshCode"></i> &ndash;&gt;-->
    <!--</div>-->
    <!--</el-col>-->
    <!--</el-row>-->

    <!--</el-form-item>-->
    <!--<el-checkbox v-model="checked">记住账号</el-checkbox>-->
    <el-form-item>
      <el-button type="primary" size="small" @click.native.prevent="handleLogin" class="login-submit">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import {Toast} from 'mint-ui'
  import {userLogin, getCfxData} from "../../../api/user";

  export default {
    name: "userlogin",
    data() {
      // const validateUsername = (rule, value, callback) => {
      //   if (!isvalidUsername(value)) {
      //     callback(new Error("请输入正确的用户名"));
      //   } else {
      //     callback();
      //   }
      // };
      // const validateCode = (rule, value, callback) => {
      //   if (this.code.value != value) {
      //     this.loginForm.code = "";
      //     this.refreshCode();
      //     callback(new Error("请输入正确的验证码"));
      //   } else {
      //     callback();
      //   }
      // };
      return {
        loginForm: {
          username: "",
          password: "",
          code: "",
          redomStr: ""
        },
        checked: false,
        code: {
          src: "",
          value: "",
          len: 4,
          type: "text"
        },
        loginRules: {
          username: [
            {required: true, trigger: "blur", message: '请输入用户名字'}
          ],
          password: [
            {required: true, message: "请输入密码", trigger: "blur"},
            {min: 6, message: "密码长度最少为6位", trigger: "blur"}
          ],
          code: [
            {required: false, message: "请输入验证码", trigger: "blur"},
            {min: 4, max: 4, message: "验证码长度为4位", trigger: "blur"},
          ]
        },
        passwordType: "password",
        passwordeye: [require('../../../assets/login/selected.png'), require('../../../assets/login/default.png')],
        passwordActive: 1
      };
    },
    created() {
      // this.refreshCode();
    },
    mounted() {
    },
    computed: {},
    props: [],
    methods: {
      showPassword() {
        this.passwordType == ""
            ? (this.passwordType = "password")
            : (this.passwordType = "");
        this.passwordActive == 1
            ? (this.passwordActive = 0)
            : (this.passwordActive = 1);
      },
      // 登录
      handleLogin() {
        this.$refs.loginForm.validate(valid => {
          if (valid) {
            this.$store.commit('loadChange', true);
            console.log(this.loginForm);
            userLogin(this.loginForm).then(res => {
              this.$store.commit('loadChange', false);
              if (res.data.code) {
                Toast('登陆成功');
                let userInfo = res.data.data;
                window.localStorage.setItem('userInfo', JSON.stringify(userInfo));
                this.$store.commit('getUserInfo', userInfo);
                this.getClassIfy();
                this.$router.push({
                  path: '/index/home'
                })
              } else {
                Toast(res.data.msg)
              }
            })
                .catch(err => {
                  this.$store.commit('loadChange', false);
                  Toast('请求失败')
                })
          }
        });
      },

      //获取基础数据
      getClassIfy() {
        let md5 = window.localStorage.getItem('md5') ? window.localStorage.getItem('md5') : '0';
        getCfxData(md5).then(res => {
          if (res.data.code == 200) {
            window.localStorage.setItem('classify', JSON.stringify(res.data.data.classify));
            window.localStorage.setItem('md5', JSON.stringify(res.data.data.md5));
            window.localStorage.setItem('const', JSON.stringify(res.data.data.const));
          }
        })
      }
    }
  };
</script>

<style scoped lang="scss">
  .login-form {
    width: 90%;
    padding-left: 5%;
    & .el-form-item {
      width: 100%;
    }
  }

  .login-submit {
    width: 100%;
    height: 44px;
    font-size: 20px;
  }

  .login-view {
    width: 100%;
    & img {
      width: 50%;
      margin: 15% 10% 15% 25%;
    }
  }
</style>
