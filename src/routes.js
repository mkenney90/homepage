import { createRouter, createWebHashHistory } from "vue-router";
import PageViewer from "./components/PageViewer";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            component: PageViewer,
            redirect: "/0"
        },
        {
            path: "/:index?",
            component: PageViewer,
            props: true,
        },
    ],
});

export default router;
