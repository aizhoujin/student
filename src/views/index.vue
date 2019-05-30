<template>
    <div>
        <div style="width: 100%;overflow-y: auto;background: #fff;"
             :style="{'height': footHeight + 'px'}">
            <router-view class="routerView"></router-view>
        </div>
        <div class="home-footer"
             :style="{'top': footHeight + 'px'}">
            <li v-for="item in homeFooter" @click="changeRoute(item.path)">
                <div>
                    <img v-if="currentPath == item.path" :src="item.imgActive">
                    <img v-else :src="item.img">
                </div>
                <p>{{item.title}}</p>
            </li>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "index",
        data() {
            return {
                footHeight: 617,
                homeFooter: [
                    {
                        'title': '首页',
                        'img': require('../assets/home/tabbar/home/default.png'),
                        'imgActive': require('../assets/home/tabbar/home/selected.png'),
                        'path': '/index/home'
                    },
                    {
                        'title': '微聊',
                        'img': require('../assets/home/tabbar/chat/default copy48px.png'),
                        'imgActive': require('../assets/home/tabbar/chat/selected48px.png'),
                        'path': '/index/chat'
                    },
                    {
                        'title': '我的',
                        'img': require('../assets/home/tabbar/user/default48px.png'),
                        'imgActive': require('../assets/home/tabbar/user/selected48px.png'),
                        'path': '/index/user'
                    }
                ],
            }
        },
        computed: {
            ...mapState({
                currentPath: state => state.common.currentPath
            })
        },
        methods: {
            changeRoute(path) {
                this.$router.push({
                    'path': path
                })
            }
        },
        mounted() {
            setTimeout(() => {
                this.footHeight = document.documentElement.clientHeight - 50;
            }, 500)
        },
        created() {
            this.footHeight = document.documentElement.clientHeight - 50;
        }
    }
</script>

<style scoped lang="scss">
    .home-footer {
        width: 100%;
        display: flex;
        justify-content: space-around;
        position: fixed;
        top: 607px;
        left: 0;
        height: 50px;
        background: #fff;
        border-top: 1px solid #ddd;
        & li {
            text-align: center;
            width: 30%;
            & div {
                height: 30px;
                & img {
                    margin-top: 5px;
                    width: 24px;
                }
            }
            & p {
                margin: 0;
                font-size: 14px;
            }
        }
    }

</style>
