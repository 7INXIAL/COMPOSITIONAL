import { createApp } from "vue";
import { createPinia } from "pinia";
const pinia = createPinia();

import * as ElementIcons from "./element-icons";

import Global from "./modules/global/views/index.vue";
const app = createApp(Global);

for (const [key, component] of Object.entries(ElementIcons)) {
  app.component(key, component);
}

app.use(router);
app.use(pinia);
app.use(i18n);

app.mount("#app");
