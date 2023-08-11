import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import toastify from "./plugin/toastify";
import "@/assets/css/main.css";
const app = createApp(App);

app.use(router).use(toastify);

app.mount("#app");
