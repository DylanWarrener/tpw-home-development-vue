import { createI18n } from "vue-i18n";

// Localisation
import messages from "@locales/locales";

const i18n = createI18n({
	legacy: true,
	locale: "en",
	fallbackLocale: "en",
	messages,
});

export default i18n;

export const i18nInstance: any = i18n.global;
