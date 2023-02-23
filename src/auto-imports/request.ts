import axios, { Axios, AxiosResponse } from "axios";
import { ElMessage } from "element-plus";

const request: Axios = axios.create({
  timeout: 6000,
});

// 添加请求拦截器
request.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("uniquely");
    if (!token) {
      ElMessage({
        type: "error",
        message: "Keywords uniquely in not found!",
      });
      throw new Error("Please set uniquely!");
    }
    config.headers.token = localStorage.getItem("token");
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
request.interceptors.response.use(
  (response: AxiosResponse & { code?: number }) => {
    if (response.code === 400) {
      ElMessage({
        type: "error",
        message: "Status about to expire Log out!",
      });
    }
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default request;
