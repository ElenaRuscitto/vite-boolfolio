import './assets/scss/main.scss'
import 'bootstrap/dist/css/bootstrap.css'
import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import {router} from './router.js'



createApp(App).use(router).mount('#app')
