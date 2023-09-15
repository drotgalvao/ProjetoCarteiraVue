import Home from '@/components/home/Home.vue'
import AdminPages from '@/components/admin/AdminPages.vue'
import { createRouter, createWebHistory } from 'vue-router'

export default createRouter ({
    history: createWebHistory(),
    routes: [
        {
            name: 'home',
            path: '/',
            component: Home
        },
        {
            name: 'adminPages',
            path: '/admin',
            component: AdminPages
        }
    ]
})

