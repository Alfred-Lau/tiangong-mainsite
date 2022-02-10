const routes = [
  {
    path: '/',
    component: 'home',
  },
  {
    path: '/login',
    component: 'login',
  },
  {
    path: '/copycat/travel',
    component: 'travel',
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
