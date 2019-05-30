const common = {
  state: {
    loading: false,
    currentPath: '',
  },
  mutations: {
    loadChange(state, data) {
      state.loading = data
    },
    currentPathChange(state,data){
      state.currentPath = data;
    }
  },
  actions: {
    // 根据用户名登录

  }
}

export default common
