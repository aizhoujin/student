import request from '@/axios.js'
import {baseUrl} from "../../static/config";

// 老师端端通知 列表
export const getBulletin = (data, query1) => {
  return request({
    url: `${baseUrl}/api/inform/v1/list`,
    method: 'POST',
    data: {query1}
  })
}

// 我的公告列表
export const myGetBulletin = (obj) => {
  return request({
    url: `${baseUrl}/api/affiche/v1/listMy`,
    method: 'POST',
    data: obj
  })
}

// 我的公告详情，标记已读
export const detailMy = (token, id) => {
  return request({
    url: `${baseUrl}/api/affiche/v1/detailMy`,
    method: 'post',
    params: {
      id: id
    }
  })
}
//
// 切换校区
export const changeCompany = (orgId) => {
  return request({
    url: `${baseUrl}/api/account/v1/changeCompany`,
    method: 'post',
    params: {
      orgId: orgId
    }
  })
}

