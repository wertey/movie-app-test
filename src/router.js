import Vue from 'vue';
import Router from 'vue-router';
import Page1 from './views/Page1.vue';
import Page2 from './views/Page2.vue';
import Page3 from './views/Page3.vue';
import Page4 from './views/Page4.vue';
import Page5 from './views/Page5.vue';
import Page6 from './views/Page6.vue';
import Page7 from './views/Page7.vue';
import Page8 from './views/Page8.vue';
import Page9 from './views/Page9.vue';
import Page10 from './views/Page10.vue';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/page1',
      name: 'page1',
      component: Page1,
    },
    {
      path: '/page2',
      name: 'page2',
      component: Page2,
    },
    {
      path: '/page3',
      name: 'page3',
      component: Page3,
    },
    {
      path: '/page4',
      name: 'page4',
      component: Page4,
    },
    {
      path: '/page5',
      name: 'page5',
      component: Page5,
    },
    {
      path: '/page6',
      name: 'page6',
      component: Page6,
    },
    {
      path: '/page7',
      name: 'page7',
      component: Page7,
    },
    {
      path: '/page8',
      name: 'page8',
      component: Page8,
    },
    {
      path: '/page9',
      name: 'page9',
      component: Page9,
    },
    {
      path: '/page10',
      name: 'page10',
      component: Page10,
    },
    {
      path: '/',
      name: 'home',
      component: Home,
    },
  ],
  mode: 'history',
});
