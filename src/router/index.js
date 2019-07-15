import Vue from 'vue'
import Router from 'vue-router'

import Login from '../views/login'
import Detail from "../views/Detail"
import Layout from '@/layout'

Vue.use(Router)
// import Layout from '@/layout'

export const defaultRoutes = [
  {
    path:'/login',
    component:Login,
    hidden:true
    
  },
  {
    path:"/detail",
    component:Detail,
    hidden:true
  },
  {
    path:'/404',
    component:() => import('@/views/404'),
    hidden:true
  },
  {
    path:'/',
    component:Layout,
    redirect: '/dashboard',
    children:[{
        path:'dashboard',
        name:'Dashboard',
        component:() => import('@/views/dashboard/index'),
        meta:{title:'Dashboard',icon:'dashboard'}
    }]
  },
  {
    path:'/example',
    component:Layout,
    redirect:'/example/table',
    name:'Example',
    meta:{title:'Example',icon:'dashboard'},
    children: [
      {
        path:'table',
        name:'Table',
        component:()=>import('@/views/table/index'),
        meta: { title: 'table' ,icon:'dashboard'}
      },
      {
        path:'tree',
        name:'Tree',
        component:() => import('@/views/tree/index'),
        meta:{ title: 'tree',icon:'dashboard' }
      }
    ]
  },
  {
    path:'/nested',
    component:Layout,
    redirect:'/nested/menu1',
    name:'Nested',
    meta:{title:'Nested',icon:'dashboard'},
    children:  [
      {
        path:'menu1',
        component:()=>import('@/views/nested/menu1/index'),
        name:'Menu1',
        meta:{title:'Menu1'},
        children:[
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          }
        ],
      },
      {
        path:'menu2',
        component:()=>import('@/views/nested/menu2/index'),
        name:'Menu2',
        meta:{title:'Menu2'}
      }

    ]
  },
  {
    path:'external-link',
    component:Layout,
    children:[
      {
        path:'https://www.baidu.com',
        meta:{title:'External Link',icon:'dashboard'}
      }
    ]
  },
  {
    path:'*',
    redirect:'/404',
    hidden:true
  }
]

const createRouter = () => new Router({
  routes:defaultRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  console.log("newRouter",newRouter);
  router.matcher = newRouter.matcher
}
export default router