import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import CmsHome from '@/components/CmsHome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/cms/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/cms/home',
      name: 'CmsHome',
      component: CmsHome
    }
  ]
})
