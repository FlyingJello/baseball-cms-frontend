import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Cms from '@/components/Cms'
import Dashboard from '@/components/Dashboard'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/cms',
      name: 'Cms',
      component: Cms,
      children: [
        { path: '',
          name: '',
          component: Dashboard
        },
        {
          path: 'home',
          name: 'Dashboard',
          component: Dashboard
        }
      ]
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
