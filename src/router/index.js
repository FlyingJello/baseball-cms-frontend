import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/cms/Login'
import Cms from '@/components/cms/Cms'
import Dashboard from '@/components/cms/Dashboard'
import Events from '@/components/cms/Events'
import ManagePlayersList from '@/components/cms/ManagePlayersList'
import ManagePlayer from '@/components/cms/ManagePlayer'
import ManagePlayerAddPlayer from '@/components/cms/ManagePlayerAddPlayer'

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
          path: 'managePlayersList',
          name: 'ManagePlayersList',
          component: ManagePlayersList
        },
        {
          path: 'managePlayer',
          name: 'ManagePlayer',
          component: ManagePlayer
        },
        {
          path: 'managePlayerAddPlayer',
          name: 'ManagePlayerAddPlayer',
          component: ManagePlayerAddPlayer
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
