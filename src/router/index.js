import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'index',
    redirect: 'login',
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login'),
  },
  // 忘记密码
  {
    path: '/forget',
    name: 'forget',
    component: () => import('../views/Forget'),
  },
  {
    path: '/forget/reset',
    name: 'forgetReset',
    component: () => import('../views/Forget/components/forgetReset'),
  },
  {
    path: '/forget/status',
    name: 'forgetStatus',
    component: () => import('../views/Forget/components/forgetStatus'),
  },
  // 注册
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
    path: '/register/registerStatus/:status',
    name: 'registerStatus',
    props: true,
    component: () => import('../views/Register/components/registerStatus'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
