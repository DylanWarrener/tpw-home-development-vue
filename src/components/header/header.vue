<template>
    <!--<v-system-bar color="blue"></v-system-bar>-->
    <v-app-bar class="bg-background-secondary" scroll-behavior="hide">
        <svg-component width="200px" height="100%" :svg-content="iconLogoSVG" @svg-clicked="navigateTo(txtPageHome)"></svg-component>
        <v-tooltip location="bottom" v-model="appBarIcons.menu.showTooltip">
            <template #activator="{ props }">
                <v-btn icon :id="appBarIcons.menu.id" v-bind="props" @click.stop="drawer = !drawer">
                    <v-icon :id="appBarIcons.menu.id">{{ appBarIcons.menu.icon }}</v-icon>
                </v-btn>
            </template>
            <span>{{ appBarIcons.menu.tooltip }}</span>
        </v-tooltip>
        <v-app-bar-title>{{ txtAppBarTitle }}</v-app-bar-title>
        <v-tooltip location="bottom" v-model="item.showTooltip" v-for="(item, index) in appBarIcons.others">
            <template #activator="{ props }">
                <v-btn icon :key="index" v-bind="props" @click="appBarIconClicked">
                    <v-icon :id="item.id" :key="index">{{ item.icon }}</v-icon>
                </v-btn>
            </template>
            <span>{{ item.tooltip }}</span>
        </v-tooltip>
    </v-app-bar>
    <header-navigation-component class="bg-inverted text-default"></header-navigation-component>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouteRecordName } from "vue-router";

// Stores
import { childStores, parentStore } from "@plugins/pinia/pinia";

// Components
import HeaderNav from "@components/header/navigation/header-navigation.vue";
import Logo from "@components/header/navigation/logo.vue";
import SVG from "@components/containers/svg/svg.vue";

// IMGs
import LogoSVG from "@assets/svg/logo/logo.svg?raw";

// Theme
import { useTheme } from "vuetify";

export default defineComponent({
    name: "header-component",
    components: {
        "header-navigation-component": HeaderNav,
        "logo-component": Logo,
        "svg-component": SVG,
    },
    computed: {
        // Text
        txtPageHome(): string {
            return this.$t("$vuetify.pages.home.name");
        },
        txtAppBarTitle(): string {
            let retVal: string = "";
            if (this.$route.name) {
                const currentPageName: RouteRecordName = this.$route.name;
                retVal = currentPageName.toString();
            }
            return retVal;
        },

        // Icons
        iconLogoSVG(): string {
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
    methods: {
        // Events
        appBarIconClicked(element: PointerEvent): void {
            const targetElement: HTMLButtonElement = element.target as HTMLButtonElement;
            const targetID: string = targetElement.id;

            switch (targetID) {
                case this.$t("$vuetify.header.appBar.icons.names.search"):
                    break;
                case this.$t("$vuetify.header.appBar.icons.names.theme"):
                    this.toggleTheme();
                    break;
                case this.$t("$vuetify.header.appBar.icons.names.newAccount"):
                    break;
                case this.$t("$vuetify.header.appBar.icons.names.account"):
                    break;
                case this.$t("$vuetify.header.appBar.icons.names.settings"):
                    break;
            }
        },
        toggleTheme(): void {
            this.theme.global.name.value = this.theme.global.current.value.dark ? "light" : "dark";
        },
        navigateTo(pageName: string): void {
            this.$router.push({ name: pageName });
        },
    },
    setup() {
        const storeCommon = parentStore();
        const storeHeader = childStores.useHeaderStore();
        const theme = useTheme();
        return { storeCommon, storeHeader, theme };
    },
    data() {
        return {
            appBarIcons: {
                menu: {
                    id: this.$t("$vuetify.header.appBar.icons.names.menu"),
                    icon: this.$t("$vuetify.header.appBar.icons.menu"),
                    tooltip: this.$t("$vuetify.header.appBar.icons.tooltips.menu"),
                    showTooltip: false,
                },
                others: [
                    {
                        id: this.$t("$vuetify.header.appBar.icons.names.search"),
                        icon: this.$t("$vuetify.header.appBar.icons.search"),
                        tooltip: this.$t("$vuetify.header.appBar.icons.tooltips.search"),
                        showTooltip: false,
                    },
                    {
                        id: this.$t("$vuetify.header.appBar.icons.names.theme"),
                        icon: this.$t("$vuetify.header.appBar.icons.theme"),
                        tooltip: this.$t("$vuetify.header.appBar.icons.tooltips.theme"),
                        showTooltip: false,
                    },
                    {
                        id: this.$t("$vuetify.header.appBar.icons.names.newAccount"),
                        icon: this.$t("$vuetify.header.appBar.icons.newAccount"),
                        tooltip: this.$t("$vuetify.header.appBar.icons.tooltips.newAccount"),
                        showTooltip: false,
                    },
                    {
                        id: this.$t("$vuetify.header.appBar.icons.names.account"),
                        icon: this.$t("$vuetify.header.appBar.icons.account"),
                        tooltip: this.$t("$vuetify.header.appBar.icons.tooltips.account"),
                        showTooltip: false,
                    },
                    {
                        id: this.$t("$vuetify.header.appBar.icons.names.settings"),
                        icon: this.$t("$vuetify.header.appBar.icons.settings"),
                        tooltip: this.$t("$vuetify.header.appBar.icons.tooltips.settings"),
                        showTooltip: false,
                    },
                ],
            },
        };
    },
});
</script>
