import { createRouter, createWebHistory } from "vue-router"
import Login from "./pages/login.vue"
import Home from "./pages/home.vue"
import DetailProduct from "./pages/detailProduct.vue"
import Contact from "./pages/contact.vue"
import Register from "./pages/register.vue"
import NotFoundPage from "./pages/notFoundPage.vue"
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
        redirect: "/home"
    },
    {
        path: "/contact",
        name: "contact-route",
        component: Contact
    },
    {
        path: "/register",
        name: "register-route",
        component: Register
    },
    {
        path: "/:pathMatch(.*)*",
        component: NotFoundPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router