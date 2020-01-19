import axios from "axios";

import { baseURL } from "../config";
import { show, hide } from "./loading";

const defaultHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "Access-Control-Allow-Credentials": "*",
  "Access-Control-Allow-Origin": "*"
};

const instance = axios.create({
  baseURL: baseURL,
  timeout: 10000
});

export default ({ method = "GET", data = {}, url, loading = false, headers = {} }) => {
  let options = method === "GET" ? { params: data } : { data };

  loading && show();

  return instance
    .request({
      url,
      method,
      headers: {
        ...defaultHeaders,
        ...headers
      },
      ...options
    })
    .then(res => {
      if (res.status >= 200 && res.status < 300) {
        return res.data;
      }

      return Promise.reject(res);
    })
    .then(res => {
      const { code, data } = res;
      if (code === 0) {
        return data;
      }

      return Promise.reject(res);
    })
    .catch(err => {
      if (err.response) {
        return Promise.reject({
          code: err.response.status,
          message: err.response.statusText || `请求出错了 ${__DEV__ ? `code: ${err.response.status}` : ""}`
        });
      }

      if (err instanceof Error) {
        if (/Error: timeout/.test(err)) {
          return Promise.reject({ code: 500, message: "网络连接超时~" });
        }
      }

      if (err && err.code) {
        return Promise.reject(err);
      }

      return Promise.reject({ code: 500, message: "服务器开小差了~" });
    })
    .finally(() => {
      loading && hide();
    });
};
