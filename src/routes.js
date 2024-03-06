import { createRouter, createWebHashHistory } from "vue-router";
//import HomeView from "./components/HomeView";
import MainView from "./components/MainView"

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            component: MainView,
            props: { pageName: "" },
        },
    ],
});

export default router;
