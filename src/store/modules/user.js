import { login, getInfo,loginout} from '@/api/user'
import { getToken,setToken, removeToken } from '../../utils/auth';
import { resetRouter } from '@/router'
const SET_TOKEN = 'SET_TOKEN'
const SET_NAME = 'SET_NAME'
const SET_AVATAR = 'SET_AVATAR'
// state

const state = {
  token: getToken(),
  name:'',
  avatar:''
}


//action 
const actions = {
  login({commit}, userInfo) {
    const { username, password }  = userInfo;
  
    return new Promise((resolve, reject) => {
      login({username:username.trim(),password:password})
      .then(response => {
        // console.log("respone",response)
        const { data } = response
        commit('SET_TOKEN', data.token)
        console.log("data token",data.token);
        setToken(data.token)
        resolve()
      })
      .catch(error => {
        console.log("error",error);
        reject(error)
      })
    })
  },

  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token)
      .then(response => {
        console.log("response",response)
        const { data } = response

        if(!data) {
          reject('please login')
        }

        const { name, avatar } = data

        commit('SET_NAME',name)
        commit('SET_AVATAR',avatar)
        resolve(data)
        
      })
      .catch(e => {
        reject(e)
      })
    })
  },
  loginout({commit,state}){
    return new Promise((resolve,reject) => {
      loginout(state.token).then(()=>{
        commit('SET_TOKEN','')
        removeToken()
        resetRouter()
        resolve()
      })
      .catch(error =>{
        reject(error)
      })
    })

  }

}

//mutations
const mutations = {
  [SET_TOKEN]: (state, token) => {
    state.token = token;
  },
  [SET_NAME]: (state,name) => {
    state.name = name
  },
  [SET_AVATAR]: (state, avatar) => {
    state.avatar = avatar
  }
}


export default {
  namespaced: true,
  state,
  mutations,
  actions
}