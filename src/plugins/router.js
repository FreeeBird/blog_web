import VueRouter from "vue-router";
import NOTFOUND from '@/components/404';
import Home from "@/Page/Home";
import About from "@/Page/About";
import Links from "@/Page/Links";

const routes = [
    { path: '/' , component: Home},
    { path: '/about',component: About},
    { path: '/links',component: Links},
    { path: '*', components: NOTFOUND },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
