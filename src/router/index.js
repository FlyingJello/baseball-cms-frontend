import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/cms/Login'
import Cms from '@/components/cms/Cms'
import Dashboard from '@/components/cms/Dashboard'
import Events from '@/components/cms/Events'
import ManagePlayers from '@/components/cms/ManagePlayers'
import AddPlayer from '@/components/cms/AddPlayer'

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
          redirect: 'home'
        },
        {
          path: 'home',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'events',
          name: 'Events',
          component: Events
        },
        {
          path: 'managePlayers',
          name: 'ManagePlayers',
          component: ManagePlayers
        },
        {
          path: 'addPlayer',
          name: 'AddPlayer',
          component: AddPlayer
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
