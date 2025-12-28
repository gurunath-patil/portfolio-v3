import { createRouter, createWebHistory } from "vue-router"
import AboutUs from "./pages/AboutUs.vue"
import EducationExperience from "./pages/Education-Experience.vue"
import Projects from "./pages/Projects.vue"
import Contact from "./pages/Contact.vue"
const routes = [
    {
        path: '/',
        component: AboutUs
    },
    {
        path: '/history',
        component: EducationExperience
    },
    {
        path: '/project',
        component: Projects
    },
    {
        path: '/contact',
        component: Contact
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})