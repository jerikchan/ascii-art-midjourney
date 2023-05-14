import './style.css';
import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: []
});

const app = createApp(App);
app.use(router);
app.mount("#app");
