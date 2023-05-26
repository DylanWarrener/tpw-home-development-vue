import { createApp } from "vue";
import { createPinia } from "pinia";
import { createVuetify } from "vuetify";
import { createI18n } from "vue-i18n";

// Vuetify styles
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";

// Vuetify icons
import { aliases, mdi } from "vuetify/iconsets/mdi";

// Vuetify components & directives
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// Localisation
import en from "./locales/en.json";

// Routes
import router from "./router";

// Parent component
import App from "./app.vue";

const app = createApp(App);
const pinia = createPinia();
const i18n = createI18n({
	locale: "en",
	message: {
		en: {
			test: "Testing localisation",
		},
	},
});
const vuetify = createVuetify({
	icons: {
		defaultSet: "mdi",
		aliases,
		sets: { mdi },
	},
	components,
	directives,
});

app.use(router);
app.use(pinia);
app.use(vuetify);
app.use(i18n);
app.mount("#app");
