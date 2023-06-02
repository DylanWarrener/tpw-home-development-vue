import { TranslateResult } from "vue-i18n";

declare module "@vue/runtime-core" {
	interface ComponentCustomProperties {
		$t: (key: string) => TranslateResult;
	}
}

declare module "vue-i18n" {
	interface Composer {
		t: (key: string) => TranslateResult;
	}
}
