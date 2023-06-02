// General import
import { createVuetify } from "vuetify";
import { VLayout, VMain, VAppBar, VFooter } from "vuetify/components";

// Styles
//import "vuetify/styles";
import "vuetify/dist/vuetify.min.css";
//import "@mdi/font/css/materialdesignicons.min.css";

// Icons
//import { aliases, mdi } from "vuetify/iconsets/mdi";

// Components
//import { VLayout, VAppBar, VMain, VTextField, VBtn, VCard, VFooter } from "vuetify/components";

// Directives
//import { Resize, Ripple } from "vuetify/directives";

//import * as components from "vuetify/components";
//import * as directives from "vuetify/directives";

const vuetify = createVuetify({
	/* icons: {
		iconfont: "mdi",
		defaultSet: "mdi",
		aliases,
		sets: { mdi },
	}, */
	/* components,
	directives, */
	components: {
		VLayout,
		VMain,
		VAppBar,
		VFooter,
	},
	/* directives: {
		Resize,
		Ripple,
	}, */
});

export default vuetify;
