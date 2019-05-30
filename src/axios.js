import axios from 'axios';


axios.defaults.timeout = 10000;

//跨域请求，允许保存cookie
axios.defaults.withCredentials = true;

// 统一请求头
axios.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.headers['from'] = 'STUW';

let cfg, msg;
msg = '服务器君开小差了，请稍后重试';


// HTTPresquest
axios.interceptors.request.use(config => {
    console.log(1)
  // let userInfo = JSON.parse(window.localStorage.getItem("userInfo"));
    // if (userInfo) {
    //   config.headers['token'] = userInfo.token; // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
    // }


  return config;
}, error => {
  return Promise.reject(error)
});


// HTTP response拦截
axios.interceptors.response.use(data => {
  return data;
}, error => {
  return Promise.reject(new Error(msg))
});


export default axios;