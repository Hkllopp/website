import Vue from 'vue'
import router from 'vue-router'

Vue.use(router)

import Home from '@/views/Home.vue'
import Professionnal from '@/views/Professionnal.vue'
import Personnal from '@/views/Personnal.vue'

export const routes = [
    {
        path: '/',
        component: Home,
        props: { lang: 'fr' },
    },
    {
        path: '/prof',
        component: Professionnal,
        props: { lang: 'fr' },
    },
    {
        path: '/pers',
        component: Personnal,
        props: { lang: 'fr' },
    },
]

const thisRouter = new router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routes,
})

export default thisRouter
