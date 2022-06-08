import Vue from 'vue';
import VueRouter from 'vue-router';
import SignUp from '../views/SignUp.vue';
import LogIn from '../views/LogIn.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'SignUp',
    component: SignUp,
    meta: { title: 'Groupomania - Inscription' },
  },
  {
    path: '/login',
    name: 'Login',
    component: LogIn,
    meta: { title: 'Groupomania - Connexion' },

  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
