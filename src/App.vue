<template>
  <div id="app" v-loading="loading" element-loading-background="rgba(255, 255, 255, .9)">
    <router-view/>

    <!-- 返回主页按钮 -->
    <div class="goHome" v-if="goHomeShow">
      <router-link :to="{path: '/index'}">
        返回主页
      </router-link>
    </div>
  </div>
</template>

<script>
    import {mapState} from 'vuex'
    import {tokenLogin} from './api/user'

    export default {
        name: 'App',
        data() {
            return {
                goHomeShow: false,
                noGoHome: [
                    '/login',
                    '/index/home',
                    '/index/user'
                ]
            }
        },
        computed: {
            ...mapState({
                loading: state => state.common.loading
            }),
        },
        watch: {
            $route(to, from) {
                if (this.noGoHome.indexOf(to.path) !== -1) {
                    this.goHomeShow = false;
                } else {
                    this.goHomeShow = true;
                }
                this.$store.commit('currentPathChange', to.path)
            },
        },

        created() {
            let userInfo = JSON.parse(window.localStorage.getItem('userInfo'));
            this.$store.commit('getUserInfo', userInfo);
            // if (userInfo && userInfo.token){
            //   tokenLogin(userInfo.token).then(res => {
            //     console.log(res.data.code)
            //     if (res.data.code == 401) {
            //       window.localStorage.clear();
            //     } else if (res.data.code == 200 && res.data.msg == "请求成功") {
            //       this.$store.commit('getUserInfo', userInfo);
            //       this.$store.commit('loginState', true);
            //     }else {}
            //   })
            // }
        }
    }
</script>

<style scoped lang="scss">
  #app {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    color: #2c3e50;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-size: 16px;
  }

  .goHome {
    width: 80px;
    height: 32px;
    line-height: 32px;
    font-size: 12px;
    background: $--color-primary;
    color: #fff;
    text-align: center;
    border-bottom-right-radius: 16px;
    border-top-right-radius: 16px;
    position: fixed;
    left: 0px;
    top: 55%;
  }

  a {
    text-decoration: none;
    color: #fff;
  }
</style>
