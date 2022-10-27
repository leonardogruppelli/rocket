import { createApp } from 'vue';
import { TroisJSVuePlugin } from 'troisjs';
import App from './app.vue';

import './styles/app.postcss';

const app = createApp(App);

app.use(TroisJSVuePlugin);

app.mount('#app');
