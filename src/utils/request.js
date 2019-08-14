import axios from 'axios'
import store from '@/store'
import { MessageBox, Message} from 'element-ui'
import { getToken } from '@/utils/auth'
import qs from "qs";
import { baseUrl } from './baseUrl'
const service = axios.create({
  baseURL: "https://easy-mock.com/mock/5c3b138cd3b9046e1aedbe41/",
  withCredentials:true,
  timeout:5000,
  headers: {
      "Content-type": "application/json"
    },
    paramsSerializer(params) {
      // 针对get请求时需要对参数为空的字段进行处理
      // eg: page=&page_size=10&name=''&age=undefined  to page=null&page_size=1&name=null&age=null
      for (const key in params) {
        if (!params[key]) {
          params[key] = null;
        }
      }
      // 去除空字符串 eg：age=null&name="li" to name="li"
      const formatParams = qs.stringify(params, {
        skipNulls: true
      });
      // 对传入的参数进行重复便利  note:https://www.npmjs.com/package/qs
      return qs.stringify(qs.parse(formatParams), {
        arrayFormat: "repeat"
      });
    }
})

service.interceptors.request.use(function(config) {
  if(store.getters.token){
    config.headers['x-Token'] = getToken()
  }
  return config;

},function(error) {
  console.log("error",error)
  return Promise.reject(error)
})


service.interceptors.response.use(function(response) {
  console.log("response",response);
  const res = response.data.data
  // console.log("res",res);
  if(res.code !== 20000) {
    Message({
      message:res.message || 'Error',
      type:'error',
      duration:5 * 1000
    })
    if(res.code === 5000){
      MessageBox.confirm('you has login out',{
        confirmButtonText:'登出',
        cancelButtonText:'取消',
        type:'warning'
      }).then(()=> {

      })
    }
    return Promise.reject(new Error(res.message || 'Error'))
  } else {
    console.log(5555);
    return response.data;
  }
},
function (error) {
  Message({
    message:error.message,
    type:'error',
    duration:Promise.reject(error)
  })
  return Promise.reject(error)
})

export default service