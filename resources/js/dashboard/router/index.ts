import { createRouter, createWebHistory } from 'vue-router';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('../layouts/DashboardLayout.vue'),
            meta: { requiresAuth: true },
            children: [
                {
                    path: '',
                    name: 'dashboard.dashboard',
                    component: () => import('../pages/Dashboard.vue'),
                },
            ],
        },
        {
            path: '/login',
            name: 'dashboard.login',
            component: () => import('../pages/Login.vue'),
            meta: { requiresGuest: true },
        },
        {
            path: '/register',
            name: 'dashboard.register',
            component: () => import('../pages/Register.vue'),
            meta: { requiresGuest: true },
        },
    ],
});

export default router;
