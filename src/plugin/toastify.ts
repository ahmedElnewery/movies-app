import type { Plugin } from "vue";
import Vue3Toastify, { type ToastContainerOptions } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const toastify: Plugin = {
  install(app, options) {
    app.use(Vue3Toastify, {
      autoClose: 3000,
      theme: "dark",
    } as ToastContainerOptions);
  },
};
export default toastify;
