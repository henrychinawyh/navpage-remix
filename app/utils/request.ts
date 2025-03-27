/* eslint-disable @typescript-eslint/no-explicit-any */
import { config } from "../config/config";

/**
 * 发送HTTP请求
 * @param {string} url - 请求地址
 * @param {object} options - 请求配置项
 * @returns {Promise} 返回请求结果
 */

interface Request {
  (url: string, options: any): Promise<any>;
}

export const request: Request = async (url, options = {}) => {
  // 从localStorage获取token
  // const token = localStorage.getItem(config.tokenKey);

  // 默认请求配置
  const defaultOptions = {
    credentials: "include",
    timeout: config.timeout,
  };

  // 合并请求头
  const headers = {
    ...options.headers,
  };

  try {
    // 发送请求
    // baseURL可以从不同环境变量中区分请求地址，不过一般都不加的
    // const response = await fetch(`${baseURL}${url}`, {
    const response = await fetch(`${config.host}/nms${url}`, {
      ...defaultOptions,
      ...options,
      headers,
      mode: "no-cors",
      credentials: "include",
    });

    // 解析响应数据
    const data = await response.json();

    // 处理业务状态码
    if (data.code === 200) {
      return data.data;
    } else if (data.code === 401) {
      // 未登录或token过期
      console.log("登录已过期，请重新登录");
      // localStorage.removeItem(config.tokenKey);
      // localStorage.removeItem(config.userKey);
      // router.push("/login");
      return Promise.reject(data);
    } else {
      // 其他业务错误
      console.log(data.message || "操作失败");
      return Promise.reject(data);
    }
  } catch (error) {
    // 网络错误或其他异常
    console.log("网络异常，请稍后重试");
    console.error("请求出错:", error);
    return Promise.reject(error);
  }
};

/**
 * GET请求
 * @param {string} url - 请求地址
 * @param {object} params - 请求参数
 */
export const get = (url: string, params?: any) => {
  const queryString = new URLSearchParams(params).toString();
  return request(`${url}${queryString ? `?${queryString}` : ""}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

/**
 * POST请求
 * @param {string} url - 请求地址
 * @param {object} data - 请求体数据
 */
export const post = (url: string, data?: any) => {
  return request(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
