// General import
import { createVuetify } from "vuetify";

// Styles
import "vuetify/styles";
import "vuetify/dist/vuetify.min.css";
import "@mdi/font/css/materialdesignicons.min.css";

// Icons
import { aliases, mdi } from "vuetify/iconsets/mdi";

// Themes
import { themeLight, themeDark } from "../../themes/themes";

// Components
import {
	VLayout,
	VSystemBar,
	VAppBar,
	VAppBarNavIcon,
	VAppBarTitle,
	VBtn,
	VNavigationDrawer,
	VList,
	VListItem,
	VMain,
	VContainer,
	VRow,
	VCol,
	VSheet,
	VParallax,
	VCard,
	VCardItem,
	VCardTitle,
	VCardSubtitle,
	VCardText,
	VCardActions,
	VHover,
	VSpacer,
	VSelect,
	VDivider,
	VCarousel,
	VCarouselItem,
	VTextField,
	VIcon,
	VRating,
	VProgressLinear,
	VFooter,
} from "vuetify/components";

// Directives
import { Resize, Ripple } from "vuetify/directives";

const vuetify = createVuetify({
	icons: {
		defaultSet: "mdi",
		aliases,
		sets: { mdi },
	},
	theme: {
		defaultTheme: "themeLight",
		themes: {
			themeLight,
			themeDark,
		},
	},
	components: {
		VLayout,
		VSystemBar,
		VAppBar,
		VAppBarNavIcon,
		VAppBarTitle,
		VBtn,
		VNavigationDrawer,
		VList,
		VListItem,
		VMain,
		VContainer,
		VRow,
		VCol,
		VSheet,
		VParallax,
		VCard,
		VCardItem,
		VCardTitle,
		VCardSubtitle,
		VCardText,
		VCardActions,
		VHover,
		VSpacer,
		VSelect,
		VDivider,
		VCarousel,
		VCarouselItem,
		VTextField,
		VIcon,
		VRating,
		VProgressLinear,
		VFooter,
	},
	directives: {
		Resize,
		Ripple,
	},
});

export default vuetify;
