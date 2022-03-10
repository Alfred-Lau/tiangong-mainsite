const routes = [
  {
    path: '/',
    component: 'home',
  },
  {
    path: '/login',
    component: 'login',
  },
  /*
  *   {
    path: '/copycat/travel',
    component: 'travel',
  },
  {
    path: '/copycat/agency',
    component: 'agency',
  },
  *
  * */
  {
    path: '/copycat',
    component: '@/layouts/copycat',
    routes: [
      {
        path: 'travel',
        component: 'travel',
      },
      {
        path: 'agency',
        component: 'agency',
      },
      {
        path: 'responsive',
        component: 'responsive',
      },
    ],
  },
  {
    name: '导航布局',
    component: '@/layouts',
    routes: [
      {
        path: '/rethink/:id',
        component: 'rethink',
      },
      {
        path: '/tags/:keyword',
        component: 'tag',
      },
      {
        path: '/personal',
        component: 'personal',
      },
    ],
  },
];

export default routes;
