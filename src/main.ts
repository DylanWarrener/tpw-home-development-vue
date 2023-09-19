import { createApp } from "vue";

// Routes
import router from "./plugins/router/router";

// Pinia store
import pinia from "./plugins/pinia/pinia";

// Vuetify
import vuetify from "./plugins/vuetify/vuetify";

// Localisation
import vuei18n from "./plugins/vuei18n/vue-i18n";

// Parent component
import App from "./App.vue";

const app = createApp(App);

app.use(router);
app.use(pinia);
app.use(vuetify);
app.use(vuei18n);
app.mount("#app");
