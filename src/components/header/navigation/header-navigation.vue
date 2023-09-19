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
					title: this.$t("$vuetify.pages.home.name"),
					icon: this.$t("$vuetify.header.navigation.icons.home"),
					link: this.$t("$vuetify.header.navigation.links.home"),
				},
				{
					title: this.$t("$vuetify.pages.kitchen.name"),
					icon: this.$t("$vuetify.header.navigation.icons.kitchen"),
					link: this.$t("$vuetify.header.navigation.links.kitchen"),
				},
				{
					title: this.$t("$vuetify.pages.bathroom.name"),
					icon: this.$t("$vuetify.header.navigation.icons.bathroom"),
					link: this.$t("$vuetify.header.navigation.links.bathroom"),
				},
				{
					title: this.$t("$vuetify.pages.newbuild.name"),
					icon: this.$t("$vuetify.header.navigation.icons.newbuild"),
					link: this.$t("$vuetify.header.navigation.links.newbuild"),
				},
				{
					title: this.$t("$vuetify.pages.extension.name"),
					icon: this.$t("$vuetify.header.navigation.icons.extension"),
					link: this.$t("$vuetify.header.navigation.links.extension"),
				},
				{
					title: this.$t("$vuetify.pages.refurbishment.name"),
					icon: this.$t("$vuetify.header.navigation.icons.refurbishment"),
					link: this.$t("$vuetify.header.navigation.links.refurbishment"),
				},
				{
					title: this.$t("$vuetify.pages.contact.name"),
					icon: this.$t("$vuetify.header.navigation.icons.contact"),
					link: this.$t("$vuetify.header.navigation.links.contact"),
				},
				{
					title: this.$t("$vuetify.pages.about.name"),
					icon: this.$t("$vuetify.header.navigation.icons.about"),
					link: this.$t("$vuetify.header.navigation.links.about"),
				},
				{
					title: this.$t("$vuetify.pages.news.name"),
					icon: this.$t("$vuetify.header.navigation.icons.news"),
					link: this.$t("$vuetify.header.navigation.links.news"),
				},
				{
					title: this.$t("$vuetify.pages.reviews.name"),
					icon: this.$t("$vuetify.header.navigation.icons.reviews"),
					link: this.$t("$vuetify.header.navigation.links.reviews"),
				},
			],
		};
	},
});
</script>
