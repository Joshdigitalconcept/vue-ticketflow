
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './index.css'
import 'vue-toast-notification/dist/theme-default.css' 

const app = createApp(App)
app.use(createPinia())
app.use(router)

import { useToast } from 'vue-toast-notification'
app.config.globalProperties.$toast = useToast()

app.mount('#app')