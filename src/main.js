import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ant from "./utils/ant";
import "./assets/less/common.less";
import VueLazyload from "vue3-lazy";

createApp(App)
  .use(router)
  .use(store)
  .use(ant)
  .use(VueLazyload, {
    preLoad: 1.3,
    error: require("@/assets/img/no_data.png"),
    loading: require("@/assets/img/wait.png"),
    attempt: 1
  })
  .mount("#app");
