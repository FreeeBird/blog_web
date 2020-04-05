import VueRouter from "vue-router";
import NOTFOUND from '@/components/404';
import Home from "@/Page/Home";
import About from "@/Page/About";
import Links from "@/Page/Links";
import Article from "@/Page/Article";
import Category from "@/Page/Category";
import Archive from "@/Page/Archive";

const routes = [
    { path: '/' , component: Home},
    { path: '/about',component: About},
    { path: '/links',component: Links},
    { path: '/category',component: Category},
    { path: '/archive',component: Archive},
    { path: '/article/:id',component: Article},
    { path: '*', components: NOTFOUND },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
