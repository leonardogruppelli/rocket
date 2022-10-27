import { createApp } from 'vue';
import { TroisJSVuePlugin } from 'troisjs';
import { createPinia } from 'pinia';
import App from './app.vue';

import './styles/app.postcss';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(TroisJSVuePlugin);

app.mount('#app');
