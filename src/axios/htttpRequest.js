import Vue from 'vue'
import axios from 'axios'
import router from '@/router'
// import qs from 'qs'
// import merge from 'lodash/merge'
// import { clearLoginInfo } from '@/utils'

// 创建axios实例以及默认属性
const http = axios.create({
  timeout: 1000 * 30,//超时阻止请求
  withCredentials: false,//设置跨域
  baseURL: 'http://localhost:8888/api/private/v1/',//基准地址
  headers: {   //请求头
    'Content-Type': 'application/json; charset=utf-8'
  }
})

/**
 * 请求拦截
 */
http.interceptors.request.use(config => {
  // let bankCode = config.data.bankCode;
  // if (sessionStorage[`${bankCode}JSESSIONID`]) {
  //   config.header = {
  //     'Cookie': "JSESSIONID=" + sessionStorage[`${bankCode}JSESSIONID`]
  //   }
  // }
  console.log(config);
  // config.headers['token'] = Vue.cookie.get('token') // 请求头带上token
  // config.headers['token'] = 'xstokentst'        //改用adornParams添加token
  return config
}, error => {
  return Promise.reject(error)
})

/**
 * 响应拦截
 * 1.token验证，如验证不过，返回特定retcode，在此处判断处理
 */
http.interceptors.response.use(response => {
  console.log(response.data);
  // if (typeof (response.data) == 'string' && response.data.indexOf('RouterPath') == 4) {
  //   let bankCode = response.data.substring(0, 4);
  //   sessionStorage.removeItem(`${bankCode}userInfoFlag`);
  //   if (!sessionStorage[`${bankCode}_prevent_cover`]) {
  //     let original = window.location.href;
  //     sessionStorage.setItem(`${bankCode}_prevent_cover`, '1');
  //     sessionStorage.setItem(`${bankCode}OriginalUrl`, original.substring(original.indexOf('#') + 1));
  //   }
  //   router.app.loading(false);
  //   router.push(response.data.replace(bankCode + 'RouterPath', ''));
  // } else {
  //   if (response.data && response.data.code === 401) { // 401, token失效
  //     // clearLoginInfo()
  //     router.push({ name: 'login' })
  //   } else if (response.data && response.data.code === 999918) {
  //     //999918作为token验证不过的返回码
  //     console("token invalid,rejected by http interceptor")
  //   }
  return response
}
  , error => {
    return Promise.reject(error)
  })

/**
 * 请求地址处理
 * @param {*} actionName action方法名称
 */
// http.adornUrl = (actionName) => {
//   // 非生产环境 && 开启代理, 接口前缀统一使用[/proxyApi/]前缀做代理拦截!
//   return (process.env.NODE_ENV !== 'production' ? '/proxyApi/' : process.env.SYSTEM_SITE_CONFIG) + actionName
// }

/**
 * get请求参数处理 是否开启默认参数?
 */
// http.adornParams = (params = {}, openDefultParams = true) => {
//   var defaults = {
//     't': new Date().getTime(),
//     'token': sessionStorage.getItem('token')
//   }
//   // return openDefultParams ? merge(defaults, params) : params
// }

/**
 * post请求数据处理
 * @param {*} data 数据对象
 * @param {*} openDefultdata 是否开启默认数据?
 * @param {*} contentType 数据格式
 *  json: 'application/json; charset=utf-8'
 *  form: 'application/x-www-form-urlencoded; charset=utf-8'
 */
// http.adornData = (data = {}, openDefultdata = true, contentType = 'json') => {
//   var defaults = {
//     't': new Date().getTime()
//   }
//   data = openDefultdata ? merge(defaults, data) : data;
//   return contentType === 'json' ? JSON.stringify(data) : qs.stringify(data)
// }

export default http