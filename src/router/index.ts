import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/money',
  },
  {
    path: '/money',
    component: () => import('@/views/Money.vue'),
  },
  {
    path: '/label',
    component: () => import('@/views/Label.vue'),
  },
  {
    path: '/statistics',
    component: () => import('@/views/Statistics.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
