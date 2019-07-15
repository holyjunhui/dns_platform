import axios from 'axios'
import store from '@/store'
import { MessageBox, Message} from 'element-ui'
import { getToken } from '@/utils/auth'
import { baseUrl } from './baseUrl'
console.log("provess",process.env.VUE_APP_BASE_API)
const service = axios.create({
  baseURL: "https://easy-mock.com/mock/5c3b138cd3b9046e1aedbe41/",
  withCredentials:true,
  timeout:5000
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