import { createApp } from 'vue'
import './assets/css/index.css'
import router from './router/router.ts'
import 'animate.css';


import App from './App.vue'

createApp(App).use(router).mount('#app')
