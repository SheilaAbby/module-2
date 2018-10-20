import Vue from 'vue';
import Router from 'vue-router';

import Login from '@/components/Login';
import Home from '@/components/Home';
import Repos from '@/components/Repos';
import ViewRepo from '@/components/ViewRepo';
import Edit from '@/components/Edit';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/repos',
      name: 'Repos',
      component: Repos,
    },
    {
      path: '/edit',
      name: 'Edit',
      component: Edit,
    },
    {
      path: '/viewRepos',
      name: 'ViewRepo',
      component: ViewRepo,
    },
  ],
});
