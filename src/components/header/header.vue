<template>
    <!--<v-system-bar color="blue"></v-system-bar>-->
    <v-app-bar class="bg-white text-default" scroll-behavior="hide">
        <svg-component :svg-content="logoSVG" :to="home"></svg-component>
        <v-btn :icon="menu" @click.stop="drawer = !drawer"></v-btn>
        <v-app-bar-title>
            {{ title }}
        </v-app-bar-title>
        <v-btn class="btn" :icon="item.icon" :key="item.id" v-for="item in icons"></v-btn>
    </v-app-bar>
    <header-navigation-component class="bg-inverted text-default"></header-navigation-component>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Store
import { parentStore } from "@plugins/pinia/pinia";

// Components
import HeaderNav from "@components/header/navigation/header-navigation.vue";
import Logo from "@components/header/navigation/logo.vue";
import SVG from "@components/containers/svg/svg.vue";
import LogoSVG from "@assets/svg/logo/logo.svg?raw";

export default defineComponent({
    name: "header-component",
    components: {
        "header-navigation-component": HeaderNav,
        "logo-component": Logo,
        "svg-component": SVG,
    },
    computed: {
        // Text
        txtHome(): string {
            return this.$t("header.appBar.titles.home");
        },
        txtKitchen(): string {
            return this.$t("header.appBar.titles.kitchen");
        },
        txtBathroom(): string {
            return this.$t("header.appBar.titles.bathroom");
        },
        txtNewbuild(): string {
            return this.$t("header.appBar.titles.newbuild");
        },
        txtExtension(): string {
            return this.$t("header.appBar.titles.extension");
        },
        txtRefurbishment(): string {
            return this.$t("header.appBar.titles.refurbishment");
        },
        txtContact(): string {
            return this.$t("header.appBar.titles.contact");
        },
        txtAbout(): string {
            return this.$t("header.appBar.titles.about");
        },
        title(): string {
            let retVal: string = "";
            switch (this.$route.name) {
                case this.txtHome:
                    retVal = this.txtHome;
                    break;
                case this.txtKitchen:
                    retVal = this.txtKitchen;
                    break;
                case this.txtBathroom:
                    retVal = this.txtBathroom;
                    break;
                case this.txtNewbuild:
                    retVal = this.txtNewbuild;
                    break;
                case this.txtExtension:
                    retVal = this.txtExtension;
                    break;
                case this.txtRefurbishment:
                    retVal = this.txtRefurbishment;
                    break;
                case this.txtContact:
                    retVal = this.txtContact;
                    break;
                case this.txtAbout:
                    retVal = this.txtAbout;
                    break;
            }
            return retVal;
        },

        // Links
        home(): string {
            return this.$t("header.navigation.page.link.home");
        },

        // Icons
        menu(): string {
            return this.$t("header.appBar.icons.menu");
        },
        newAccount(): string {
            return this.$t("header.appBar.icons.newAccount");
        },
        account(): string {
            return this.$t("header.appBar.icons.account");
        },
        settings(): string {
            return this.$t("header.appBar.icons.settings");
        },
        search(): string {
            return this.$t("header.appBar.icons.search");
        },
        logoSVG(): string {
            return LogoSVG;
        },

        // Conditional
        drawer: {
            get(): boolean {
                return this.storeCommon.getDrawer;
            },
            set(newValue: boolean): void {
                this.storeCommon.setDrawer(newValue);
            },
        },
    },
    setup() {
        const storeCommon = parentStore();
        return { storeCommon };
    },
    data() {
        return {
            icons: [
                {
                    id: 0,
                    icon: this.$t("header.appBar.icons.search"),
                },
                {
                    id: 1,
                    icon: this.$t("header.appBar.icons.newAccount"),
                },
                {
                    id: 2,
                    icon: this.$t("header.appBar.icons.account"),
                },
                {
                    id: 3,
                    icon: this.$t("header.appBar.icons.settings"),
                },
            ],
        };
    },
});
</script>
