import { createApp } from "vue";
import { createPinia } from "pinia";

// Localisation
import vuei18n from "./vue-i18n";

// Vuetify
import vuetify from "./vuetify";

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
