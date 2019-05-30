const user = {
    state: {
        userInfo: null,
        loginState: null
    },
    mutations: {
        getUserInfo(state,data){
            state.userInfo = data;
        },
        loginState(state,data){
            state.loginState = data;
        }
    },
    actions: {
        // 根据用户名登录

    }
}

export default user
