import request from '@/axios.js'
import {baseUrl} from "../../static/config";

// login页登录
export const userLogin = (data) => {
  return request({
    url: `${baseUrl}/api/login`,
    method: 'post',
    params: {
      userName: data.username,
      password: data.password
    }
  })
}

// 获取基础数据
export const getCfxData = (data) => {
  return request({
    url: `${baseUrl}/api/cfxData`,
    method: 'post',
    headers: {
    },
    params: {
      md5: data
    }
  })
}


// app进入时使用token登录
export const tokenLogin = (data) => {
  return request({
    url: `${baseUrl}/api/loginByToken`,
    method: "POST",
    headers: {
      token: data
    }
  })
}

// 修改密码
export const changePassword = (data) => {
  return request({
    url: `${baseUrl}/api/account/v1/changePassword`,
    method: "post",
    params: data
  })
}

// 获取工资
export const getPayroll = (data) => {
  return request({
    url: `${baseUrl}/api/wages/v1/detailMy`,
    method: "get",
    params: data
  })
}


// 确认工资
export const confirmPayroll = (data) => {
  return request({
    url: `${baseUrl}/api/wages/v1/confirm`,
    method: "get",
    params: {
      recordId: data
    }
  })
}


