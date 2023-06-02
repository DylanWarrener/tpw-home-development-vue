import { createApp } from "vue";
import { createPinia } from "pinia";

// Localisation
import vuei18n from "./vue-i18n.ts";

// Vuetify
import vuetify from "./vuetify.ts";

// Routes
import router from "./router";

// Parent component
import App from "./app.vue";

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.use(vuetify);
app.use(vuei18n);
app.mount("#app");
