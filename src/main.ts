import { createApp } from "vue";

// Parent component
import App from "@src/App.vue";

const app = createApp(App);

// Routes
import router from "@plugins/router/router";

// Pinia store
import pinia from "@plugins/pinia/pinia";

// Vuetify
import vuetify from "@plugins/vuetify/vuetify";

// Localisation
import vuei18n from "@plugins/vuei18n/vue-i18n";

app.use(router);
app.use(pinia);
app.use(vuetify);
app.use(vuei18n);
app.mount("#app");

export default app;
