import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import home from '@/components/home'
import chilAct from '@/components/chilAct'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Router)
Vue.use(ElementUI)

const router = new Router({
  routes: [
    {
      path: '/login/login',
      name: 'login',
      component: login,
    },
    {
      path: '/home/home',
      name: 'home',
      component: home,
    },
    {
      path: '/chilAct/chilAct',
      name: 'chilAct',
      component: chilAct,
    }
  ]
})
//路由前置拦截
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  if (token || to.path === "/login/login") {
    next()
  } else {
    next("/login/login")
  }


})
export default router