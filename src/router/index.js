import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import Menu from '@/components/Menu'
import Dish from '@/components/DetailsDish'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/menu/:id',
      name: 'Dish',
      component: Dish
    }
  ]
})
