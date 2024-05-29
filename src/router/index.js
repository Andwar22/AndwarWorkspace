// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import MainPath from '@/MainPath.vue';
import WorkSpace from '@/WorkSpace.vue';

const routes = [
  {
    path: '/',
    name: 'MainPath',
    component: MainPath
  },
  {
    path: '/work-space',
    name: 'WorkSpace',
    component: WorkSpace
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;