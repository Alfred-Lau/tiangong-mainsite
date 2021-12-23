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
  {
    path: '/copycat/travel',
    component: 'Travel',
  },
];

export default routes;
