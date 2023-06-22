<template>
	<v-navigation-drawer temporary color="primary" location="top" v-model="drawer">
		<v-list nav>
			<v-list-item
				v-for="item in navigation"
				:key="item.id"
				:prepend-icon="item.icon"
				:title="item.title"
				:to="item.link"
			></v-list-item>
		</v-list>
	</v-navigation-drawer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Store
import parentStore, { childStores } from "../../../store";

// Components
import Nav from "../../containers/navigation/navigation.vue";

// Interface
import { ICommonNavigationData } from "../../../interfaces/header/navigation/interface-header-navigation";

export default defineComponent({
	name: "header-navigation-component",
	components: {
		"navigation-component": Nav,
	},
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
		const storeCommon = parentStore();
		const storeHeader = childStores.useHeaderStore();
		return { storeCommon, storeHeader };
	},
	data(): ICommonNavigationData {
		return {
			navigation: [
				{
					id: 0,
					title: this.$t("header.navigation.page.name.home"),
					icon: this.$t("header.navigation.page.icon.home"),
					link: this.$t("header.navigation.page.link.home"),
				},
				{
					id: 1,
					title: this.$t("header.navigation.page.name.kitchen"),
					icon: this.$t("header.navigation.page.icon.kitchen"),
					link: this.$t("header.navigation.page.link.kitchen"),
				},
				{
					id: 2,
					title: this.$t("header.navigation.page.name.bathroom"),
					icon: this.$t("header.navigation.page.icon.bathroom"),
					link: this.$t("header.navigation.page.link.bathroom"),
				},
				{
					id: 3,
					title: this.$t("header.navigation.page.name.newbuild"),
					icon: this.$t("header.navigation.page.icon.newbuild"),
					link: this.$t("header.navigation.page.link.newbuild"),
				},
				{
					id: 4,
					title: this.$t("header.navigation.page.name.extension"),
					icon: this.$t("header.navigation.page.icon.extension"),
					link: this.$t("header.navigation.page.link.extension"),
				},
				{
					id: 5,
					title: this.$t("header.navigation.page.name.refurbishment"),
					icon: this.$t("header.navigation.page.icon.refurbishment"),
					link: this.$t("header.navigation.page.link.refurbishment"),
				},
				{
					id: 6,
					title: this.$t("header.navigation.page.name.contact"),
					icon: this.$t("header.navigation.page.icon.contact"),
					link: this.$t("header.navigation.page.link.contact"),
				},
				{
					id: 7,
					title: this.$t("header.navigation.page.name.about"),
					icon: this.$t("header.navigation.page.icon.about"),
					link: this.$t("header.navigation.page.link.about"),
				},
			],
		};
	},
});
</script>
