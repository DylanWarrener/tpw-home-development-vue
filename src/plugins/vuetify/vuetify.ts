// General import
import { createVuetify } from "vuetify";
import { createVueI18nAdapter } from "vuetify/locale/adapters/vue-i18n";
import { useI18n } from "vue-i18n";

// Localisation
import i18n from "@plugins/vuei18n/vue-i18n";

// Styles
import "vuetify/styles";
import "vuetify/dist/vuetify.min.css"; // Not sure what this is

// Material design icons
import "@mdi/font/css/materialdesignicons.min.css";
import { aliases, mdi } from "vuetify/iconsets/mdi";

// Themes
import { light, dark } from "@themes/themes";

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
    VTooltip,
    VImg,
    VForm,
    VTextarea,
    VFooter,
} from "vuetify/components";

// Transitions
import { VExpandTransition } from "vuetify/components/transitions";

// Lab components (vuetify still testing)
import { VDatePicker } from "vuetify/labs/VDatePicker";

// Directives
import { Resize, Ripple } from "vuetify/directives";

const vuetify = createVuetify({
    locale: {
        adapter: createVueI18nAdapter({ i18n, useI18n }),
    },
    icons: {
        defaultSet: "mdi",
        aliases,
        sets: { mdi },
    },
    theme: {
        defaultTheme: "light",
        themes: {
            light,
            dark,
        },
    },
    components: {
        // Components
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
        VTooltip,
        VImg,
        VForm,
        VTextarea,
        VFooter,

        // Transitions
        VExpandTransition,

        // Lab components
        VDatePicker,
    },
    directives: {
        Resize,
        Ripple,
    },
});

export default vuetify;
