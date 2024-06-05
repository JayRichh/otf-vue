import { useLocalStorage } from "@vueuse/core";
import { createApp } from "vue";
import { createHead } from '@vueuse/head';

import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";

import messages from "@intlify/unplugin-vue-i18n/messages";
import { router } from "./router";

import { registerStore } from "./store";
import App from "~/App.vue";

import "~/styles/reset.css";
import "~/styles/main.css";
import "uno.css";

const app = createApp(App);
const head = createHead();
app.use(createI18n({
  legacy: false,
  locale: unref(useLocalStorage("locale", "en")),
  messages,
}));

app.use(createPinia());
registerStore();

app.use(head);

app.use(router);

app.mount("#app");
