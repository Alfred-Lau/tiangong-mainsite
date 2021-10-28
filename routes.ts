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
    path: '/rethink/:id',
    component: '@/layouts',
    routes: [
      {
        path: '/rethink/:id',
        component: 'rethink',
      },
    ],
  },
];

export default routes;
