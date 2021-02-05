import Vue from 'vue'
import Router from 'vue-router'

const Home = ()=>import("../views/home/Home")

Vue.use(Router)
export default new Router({
  routes: [
    {
      path:'/',
      redirect:"/home"
    },
    {
      path:'/home',
      component:Home,
    },
  ],
  mode:'history'
})
