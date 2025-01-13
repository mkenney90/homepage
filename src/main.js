import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";
import pages from "./data";
import { activeSection } from "./helpers/active-scroll";

const app = createApp(App);

app.use(router);

app.config.globalProperties.$pages = pages;

app.mount("#app");

activeSection();