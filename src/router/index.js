import Vue from 'vue'
import Router from 'vue-router'

import home from '../views/home/home.vue'
import category from '../views/category/category.vue'
import shoppingcat from '../views/shoppingcat/shoppingcat.vue'
import profile from '../views/profile/profile.vue'
/* const home = () => import('../') */

Vue.use(Router)//使用路由

export default new Router({//创建路由对象
  routes: [
   {
      path:'',
      redirect:'/home',
    },
    {
      path:'/home',
      component:home
    },
    {
      path:'/category',
      component:category
    },
    {
      path:'/shoppingcat',
      component:shoppingcat
    },
    {
      path:'/profile',
      component:profile
    }
  ],
  mode:'history'
})