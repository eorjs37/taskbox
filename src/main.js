import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import './assets/main.css'


//createApp(App).mount('#app')

createApp(App).use(createPinia()).mount('#app')
