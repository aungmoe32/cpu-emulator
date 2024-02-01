
import {createApp} from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import Home from './components/Home.vue'
import Docs from './components/Docs.vue'
import About from './components/About.vue'





const routes = [
    {
        path: '/',
        components: {
            default : Home,
        }

    },

    {
        path: '/about',
        component: About
    },
    {
        path: '/docs',
        component: Docs
    },


]

const router = createRouter({
    routes,
    history: createWebHistory(),
    linkExactActiveClass: 'active',

})


// window.$router = router
// window.this = createApp()


export default router
