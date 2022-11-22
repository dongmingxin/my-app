import axios, { AxiosRequestConfig, AxiosResponse, AxiosInstance } from 'axios';

const codeMessage = (status: number) => {
  let message = '';
  switch (status) {
    case 400:
      message = '请求错误(400)';
      break;
    case 401:
      message = '未授权，请重新登录(401)';
      break;
    case 403:
      message = '拒绝访问(403)';
      break;
    case 404:
      message = '请求出错(404)';
      break;
    case 408:
      message = '请求超时(408)';
      break;
    case 500:
      message = '服务器错误(500)';
      break;
    case 501:
      message = '服务未实现(501)';
      break;
    case 502:
      message = '网络错误(502)';
      break;
    case 503:
      message = '服务不可用(503)';
      break;
    case 504:
      message = '网络超时(504)';
      break;
    case 505:
      message = 'HTTP版本不受支持(505)';
      break;
    default:
      message = `连接出错(${status})!`;
    }
  return `${message}，请检查网络或联系管理员！`;
};

const { NODE_ENV } = process.env;

export const baseURL = NODE_ENV === 'production' ? 'https://dongmingxin.vercel.app/' : 'http://localhost:3000';
const withCredentials = true;
const timeout = 30000;

const axiosInstance = axios.create({
  baseURL,
  withCredentials,
  timeout
});

axiosInstance.interceptors.request.use(
  (config:AxiosRequestConfig) => {
    const token = localStorage.getItem('token') || '';
    if(config?.headers) {
      config.headers.Authorization = token;
    }
    return config;
},
  () => {
    const error = { data: {meg: 'server execption'}}
  },
);

axiosInstance.interceptors.response.use(
	(response: AxiosResponse) => {
		const contentType = response.headers['content-type'];
		if (contentType && contentType.match(/application\/json/i) && response.data.token) {
			localStorage.setItem('token', response.data.token);
		}
		return Promise.resolve(response);
	},
	(error:any) => {
    // let msg;
    // let code = -1;
    // if(axios.isCancel(error)) {
    //   msg='';
    //   code=-2;
    // } else {
    //   const { status } = error?.response;
    //   if (status < 200 || status >= 300) {
    //     msg = status
    //   }
    // }
    // return Promise.reject({ msg, code});
	}
);

/**
 * Requests a path, returning a promise.
 * @param  {string} path       The path we want to request
 * @param  {object} [option] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */

 export const get = (url:any, config = {}) =>
 axiosInstance.get(url,config);

export const post = (url:any, data:any, config = {}) =>
 axiosInstance.post(url, data, config);

export const put = (url:any, data:any, config = {}) =>
 axiosInstance.put(url, data, config);

export const del = (url:any, config = {}) =>
 axiosInstance.delete(url, config);