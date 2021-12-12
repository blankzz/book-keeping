import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import globalComponent from './components';
import 'windi.css';

const app = createApp(App);

globalComponent.forEach(item => {
  const { componentName, config } = item;
  app.component(componentName, config.default || config);
});

app.use(store).use(router).mount('#app');
