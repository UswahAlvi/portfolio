import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
console.log("App is about to mount")
app.mount('#app')
console.log("App mounted")
