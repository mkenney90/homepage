import { createRouter, createWebHashHistory } from "vue-router";
import PageViewer from "./components/PageViewer";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/:index?",
            component: PageViewer,
            props: true,
        },
    ],
});

export default router;
