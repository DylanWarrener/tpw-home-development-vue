import { createApp } from "vue";

// Routes
import router from "./router";

// Pinia store
import pinia from "./pinia";

// Vuetify
import vuetify from "./vuetify";

// Localisation
import vuei18n from "./vue-i18n";

// Parent component
import App from "./app.vue";

const app = createApp(App);

app.use(router);
app.use(pinia);
app.use(vuetify);
app.use(vuei18n);
app.mount("#app");
