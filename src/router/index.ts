import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHashHistory } from 'vue-router';

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
  {
    path: '/:catchAll(.*)',
    component: () => import('@/views/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
