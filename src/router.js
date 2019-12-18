import Vue from 'vue';
import VueRouter from 'vue-router';

import AppPage from '@components/app-page';
import MoviesInfo from '@views/movies-info';
import About from '@views/about';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: AppPage,
    children: [
      {
        path: '',
        name: 'movies-info',
        component: MoviesInfo,
      },
      {
        path: 'about',
        name: 'about',
        component: About,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
