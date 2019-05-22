import Vue from 'vue'
import Router from 'vue-router'
import pageRouter from './page/'

Vue.use(Router)

let router = new Router({
  routes: [].concat(pageRouter)
})


export default router;