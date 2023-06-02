import { createI18n } from "vue-i18n";

// Localisation
import en from "./locales/en.js";

const i18n = createI18n({
	locale: "en",
	messages: { en },
});

export default i18n;
