const routes = [
  {
    path: '/',
    component: 'home',
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
