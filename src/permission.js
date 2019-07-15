import router from "./router";
import { getToken } from '@/utils/auth'
import store from './store'
import { Message } from 'element-ui'

const whiteList = ['/login','/detail']
router.beforeEach( async (to,from,next) =>{
const hasToken = getToken()
if(hasToken){

  if(to.path == '/login'){
    next({ path: '/' })

  }else{

    try {
      await store.dispatch('user/getInfo')
      next()
      
    } catch(error) {
      await store.dispatch('user/resetToken')
      Message.error(error)
      next(`/login?redirect=${to.path}`)
    }
  }
} else {
  if(whiteList.includes(to.path)) {
    // console.log(111);
    next()
  } else {
    // console.log(2222);
    next(`/login?redirect=${to.path}`)
  }
}
})

