import { createApp } from 'vue'
import './style.scss'
// import "bootstrap/dist/css/bootstrap.css";

import * as bootstrap from 'bootstrap'
import App from './App.vue'

import Nav from './components/Nav.vue'
import Memory from './components/Memory.vue'
import Cpu from './components/Cpu.vue'
import Console from './components/Console.vue'
import router from './router.js'


const app = createApp(App)

app.component('Nav', Nav);
app.component('memory', Memory);
app.component('cpu', Cpu);
app.component('console', Console);


app.use(router)

app.mount('#app')
