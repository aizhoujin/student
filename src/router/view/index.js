export default [{
    path: '/index',
    name: '老师端',
    component: () => import('@/views/index.vue'),
    redirect: '/index/home',
    children: [{
        path: "/index/home",
        name: '主页',
        component: () => import('@/views/home/index.vue')
    }]
}]
