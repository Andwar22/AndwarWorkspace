// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/MainPage.vue';
import WorkSpace from '@/WorkSpace.vue';
import SellSpace from '@/SellSpace.vue';
import PlaySpace from '@/PlaySpace.vue';

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/work-space',
    name: 'WorkSpace',
    component: WorkSpace
  },
  {
    path: '/sell-space',
    name: 'SellSpace',
    component: SellSpace
  },
  {
    path: '/play-space',
    name: 'PlaySpace',
    component: PlaySpace
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;