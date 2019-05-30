import Vue from 'vue'
import Router from 'vue-router'
import pageRouter from './page/'
import viewRouter from './view/'

Vue.use(Router)

let router = new Router({
  routes: [].concat(pageRouter,viewRouter)
})


export default router;