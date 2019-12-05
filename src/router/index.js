import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register'),
  },
  {
    path: '/register/submit',
    name: 'registerSubmit',
    component: () => import('../views/Register/components/registerSubmit'),
  },
  {
    path: '/register/status',
    name: 'registerStatus',
    props: true,
    component: () => import('../views/Register/components/registerStatus'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
