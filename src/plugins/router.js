import VueRouter from "vue-router";
import Goo from '@/components/Google-keep'
import HelloWorld from "@/components/HelloWorld";
import NOTFOUND from '@/components/404';
import Home from "@/Page/Home";

const routes = [
    { path: '/' , component: Home},
    { path: '/goo', component: Goo},
    { path: '/hello', component: HelloWorld},
    { path: '*', components: NOTFOUND },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
