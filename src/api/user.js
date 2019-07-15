import request from '@/utils/request'

export const login = data=>{
  return request({
    url:'/user/login',
    method:'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url:'/user/info',
    method:'get',
    params:{token}
  })
}
export function loginout(data) {
  return request({
    url:'/user/loginout',
    method:'post',
    data
  })
}