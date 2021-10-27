//warning : once 'entity template' loaded to #app router-view, is never reloaded.
const User = httpVueLoader('./components/User.vue');
const Login = httpVueLoader('./components/Login.vue');
const News = httpVueLoader('./components/News.php');


Vue.use(VueRouter);

const routes = [
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/user',
        name: 'user',
        alias: '/',
        component: User,
        meta: { requiresAuth: true }
    },
    {
      path: '/news',
      name: 'news',
      component: News,
      // meta: { requiresAuth: true } //PHP inline validation on News.php
  },
]

const router = new VueRouter({
    mode: 'history',
    //   base: process.env.VUE_APP_BASE_URL,
    routes
})


router.beforeEach(async (to, from, next) => {
    console.log("!!");
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