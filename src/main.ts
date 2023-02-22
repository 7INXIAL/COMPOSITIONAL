import { createApp } from "vue";
import { createPinia } from "pinia";
const pinia = createPinia();

import "../plugins";
import { router, i18n, ElementIcons } from "../plugins/index";

import Global from "./modules/global/views/index.vue";
const app = createApp(Global);

for (const [key, component] of Object.entries(ElementIcons)) {
  app.component(key, component);
}

app.use(router);
app.use(pinia);
app.use(i18n);

app.mount("#app");
