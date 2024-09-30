// 静态路由
import { createRouter, createWebHistory } from 'vue-router'
export const StaticRoutes=[
    {
        path: '',
        component: () => import('@/components/index.vue'),
        meta: {
            title: '首页'
        }
    },
    {
        path: '/mYLargeScreen',
        component: () => import('@/components/dataVDemo.vue'),
        meta: {
            title: '大屏展示'
        }
    },
]
const router = createRouter({
    // history: createWebHistory('dcom-api/home'),
    history: createWebHistory(),
    routes: StaticRoutes
})

export default router