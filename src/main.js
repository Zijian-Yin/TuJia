import '@/assets/css/index.css'
import '@/assets/css/common.css'
import 'normalize.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './stores'

createApp(App).use(router).use(pinia).mount('#app')

