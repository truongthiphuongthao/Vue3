import { createRouter, createWebHistory } from "vue-router"
import Login from "./components/login.vue"
import Home from "./components/home.vue"
import DetailProduct from "./components/detailProduct.vue"
const routes = [
    {
        path: "/login",
        name: "login-route",
        component: Login
    },
    {
        path: "/home",
        name: "home-route",
        component: Home
    },
    {
        path: "/detailProduct/:id",
        name: "detail-product-route",
        component: DetailProduct
    },
    {
        path: "/",
        redirect: "/login"
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router