import Vue from 'vue'
import VueRouter from 'vue-router'
import general from './general'

Vue.use(VueRouter)
//https://vueschool.io/lessons/how-to-configure-an-authentication-middleware-route-guard-with-vue-router?friend=vuerouter
const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ './components/Login.vue')
  },
  {
    path: '/user',
    name: 'user',
    alias: '/',
    component: () => import(/* webpackChunkName: "user" */ './components/User.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: "/404",
    alias: "*",
    name: "notFound",
    component: () => import(/* webpackChunkName: "404" */ './components/404')
  }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})


//https://next.router.vuejs.org/guide/advanced/navigation-guards.html
router.beforeEach(async (to, from, next) => {
  //check also the childviews
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // if (to.meta.requiresAuth) {

    if (!await general.IsLoggedIn()) {
      next({ name: "login" });
    }
    else {
      next();
    }
  } else {
    next();
  }
})

export default router;