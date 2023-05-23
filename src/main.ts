import { createApp } from "vue";
import { createPinia } from "pinia";

// Vuetify
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi";
//import { createVueI18nAdapter } from "vuetify/locale/adapters/vue-i18n";
//import { createI18n, useI18n } from "vue-i18n";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// Localisation
import en from "./locale/en.json";

// Routes
import router from "./router";

// Parent component
import App from "./app.vue";

const app = createApp(App);
const pinia = createPinia();
/*
const i18n = new createI18n({
	llegacy: false, // Vuetify does not support the legacy mode of vue-i18n
	locale: "en",
	messages: { en },
});
*/
const vuetify = createVuetify({
	icons: {
		defaultSet: "mdi",
		aliases,
		sets: { mdi },
	},
	locale: {
		//adapter: createVueI18nAdapter({ i18n, useI18n }),
	},
	components,
	directives,
});

app.use(router);
app.use(pinia);
//app.use(i18n);
app.use(vuetify);

app.mount("#app");
