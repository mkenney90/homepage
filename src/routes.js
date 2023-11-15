import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "./components/HomeView";
import AboutView from "./components/AboutView";
import ExperienceView from "./components/ExperienceView";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            redirect: "/home"
        },
        {
            path: "/home",
            component: HomeView,
            props: { pageName: "home" },
        },
        {
            path: "/about",
            component: AboutView,
            props: { pageName: "about" },
        },
        {
            path: "/experience",
            component: ExperienceView,
            props: { pageName: "experience" },
        },
    ],
});

export default router;
