import { createApp } from 'vue'
import './assets/css/index.css'
import router from './router/router.ts'
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import Card from 'primevue/card';
import InputText from 'primevue/inputtext'
import Slider from 'primevue/slider'
import 'animate.css';

import 'primevue/resources/themes/lara-light-teal/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';


import App from './App.vue'

const app = createApp(App);
app.use(router)
app.use(PrimeVue)
app.component('Card', Card)
app.component('Button', Button)
app.component('InputText', InputText)

app.mount('#app');

