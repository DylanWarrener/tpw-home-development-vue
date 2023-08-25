<template>
    <navigation-component :navigation="navigation"></navigation-component>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Store
import { parentStore } from "@plugins/pinia/pinia";

// Components
import Nav from "@components/containers/navigation/navigation.vue";

// Interface
import { ICommonNavigationData } from "@interfaces/header/navigation/interface-header-navigation";

export default defineComponent({
    name: "header-navigation-component",
    components: {
        "navigation-component": Nav,
    },
    setup() {
        const storeCommon = parentStore();
        return { storeCommon };
    },
    data(): ICommonNavigationData {
        return {
            navigation: [
                {
                    title: this.$t("header.navigation.page.name.home"),
                    icon: this.$t("header.navigation.page.icon.home"),
                    link: this.$t("header.navigation.page.link.home"),
                },
                {
                    title: this.$t("header.navigation.page.name.kitchen"),
                    icon: this.$t("header.navigation.page.icon.kitchen"),
                    link: this.$t("header.navigation.page.link.kitchen"),
                },
                {
                    title: this.$t("header.navigation.page.name.bathroom"),
                    icon: this.$t("header.navigation.page.icon.bathroom"),
                    link: this.$t("header.navigation.page.link.bathroom"),
                },
                {
                    title: this.$t("header.navigation.page.name.newbuild"),
                    icon: this.$t("header.navigation.page.icon.newbuild"),
                    link: this.$t("header.navigation.page.link.newbuild"),
                },
                {
                    title: this.$t("header.navigation.page.name.extension"),
                    icon: this.$t("header.navigation.page.icon.extension"),
                    link: this.$t("header.navigation.page.link.extension"),
                },
                {
                    title: this.$t("header.navigation.page.name.refurbishment"),
                    icon: this.$t("header.navigation.page.icon.refurbishment"),
                    link: this.$t("header.navigation.page.link.refurbishment"),
                },
                {
                    title: this.$t("header.navigation.page.name.contact"),
                    icon: this.$t("header.navigation.page.icon.contact"),
                    link: this.$t("header.navigation.page.link.contact"),
                },
                {
                    title: this.$t("header.navigation.page.name.about"),
                    icon: this.$t("header.navigation.page.icon.about"),
                    link: this.$t("header.navigation.page.link.about"),
                },
                {
                    title: this.$t("header.navigation.page.name.news"),
                    icon: this.$t("header.navigation.page.icon.news"),
                    link: this.$t("header.navigation.page.link.news"),
                },
            ],
        };
    },
});
</script>
