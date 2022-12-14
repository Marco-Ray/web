/* eslint arrow-body-style: ["error", "always"] */
/* eslint-env es6 */

import axios from 'axios';

const service = axios.create({
  baseURL: '', // 请求本地json文件，那么baseURL取空字符串，域名就会是项目域名
  timeout: 60000,
});

// 请求拦截
service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

// 响应拦截
service.interceptors.response.use(
  (response) => {
    const res = response.data;
    return Promise.resolve(res);
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default service;
