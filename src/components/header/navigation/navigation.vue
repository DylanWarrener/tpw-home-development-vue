<template>
	<v-navigation-drawer v-model="drawer" location="top" temporary>
		<v-list nav>
			<v-list-item v-for="item in navigation" :key="item.id" :prepend-icon="item.icon" :title="item.title" :to="item.link"></v-list-item>
		</v-list>
	</v-navigation-drawer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Store
import parentStore, { childStores } from "../../../store";

// Interface
import INavigationData from "../../../interfaces/common/header/navigation/interface-navigation";

export default defineComponent({
	name: "navigation-component",
	computed: {
		drawer: {
			get(): boolean {
				return this.storeHeader.getDrawer;
			},
			set(newValue: boolean) {
				this.storeHeader.setDrawer(newValue);
			},
		},
	},
	setup() {
		const storeBase = parentStore();
		const storeHeader = childStores.useHeaderStore();
		return { storeBase, storeHeader };
	},
	data(): INavigationData {
		return {
			navigation: [
				{
					id: 0,
					title: this.$t("header.navigation.text.home"),
					icon: this.$t("header.navigation.icons.home"),
					link: this.$t("header.navigation.links.home"),
				},
				{
					id: 1,
					title: this.$t("header.navigation.text.kitchen"),
					icon: this.$t("header.navigation.icons.kitchen"),
					link: this.$t("header.navigation.links.kitchen"),
				},
				{
					id: 2,
					title: this.$t("header.navigation.text.bathroom"),
					icon: this.$t("header.navigation.icons.bathroom"),
					link: this.$t("header.navigation.links.bathroom"),
				},
				{
					id: 3,
					title: this.$t("header.navigation.text.newbuild"),
					icon: this.$t("header.navigation.icons.newbuild"),
					link: this.$t("header.navigation.links.newbuild"),
				},
				{
					id: 4,
					title: this.$t("header.navigation.text.extension"),
					icon: this.$t("header.navigation.icons.extension"),
					link: "/extensions",
				},
				{
					id: 5,
					title: this.$t("header.navigation.text.refurbishment"),
					icon: this.$t("header.navigation.icons.refurbishment"),
					link: "/refurbishments",
				},
				{
					id: 6,
					title: this.$t("header.navigation.text.contact"),
					icon: this.$t("header.navigation.icons.contact"),
					link: this.$t("header.navigation.links.contact"),
				},
				{
					id: 7,
					title: this.$t("header.navigation.text.about"),
					icon: this.$t("header.navigation.icons.about"),
					link: this.$t("header.navigation.links.about"),
				},
			],
		};
	},
});
</script>
