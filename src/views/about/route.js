export default {
    path: '/about',
    name: 'about',
    component: () => import( /* webpackChunkName: "about" */ '@/views/about/About.vue'),
    children: []
}