// General import
import { createVuetify } from "vuetify";

// Styles
//import "vuetify/styles";
import "vuetify/dist/vuetify.min.css";
import "@mdi/font/css/materialdesignicons.min.css";

// Icons
import { aliases, mdi } from "vuetify/iconsets/mdi";

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
	VFooter 
} from "vuetify/components";

// Directives
import { Resize, Ripple } from "vuetify/directives";

//import * as components from "vuetify/components";
//import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: { mdi },
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
    VFooter,
  },
  directives: {
    Resize,
    Ripple,
  },
});

export default vuetify;
