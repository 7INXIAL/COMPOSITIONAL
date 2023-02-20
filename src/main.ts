import { createApp } from "vue";

import { createPinia } from "pinia";
const pinia = createPinia();

import Global from "./modules/global/views/index.vue";
import * as ElementIcons from "./element-icons";
import router from "./router";
import i18n from "./i18n";
import "./store";
import "./style.css";
import "element-plus/dist/index.css";

const app = createApp(Global);

for (const [key, component] of Object.entries(ElementIcons)) {
  app.component(key, component);
}

app.use(router);
app.use(pinia);
app.use(i18n);

app.mount("#app");
