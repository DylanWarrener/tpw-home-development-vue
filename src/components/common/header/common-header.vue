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
import { childStores } from "@plugins/pinia/pinia";

// Components
import HeaderNav from "@components/common/header/navigation/common-header-navigation.vue";
import Logo from "@components/common/header/navigation/logo/common-header-navigation-logo.vue";
import SVG from "@components/common/svg/common-svg.vue";

// Interfaces
import { IHeaderData } from "@interfaces/common/header/interfaces-common-header";
import { IAppBarIcons } from "@interfaces/common/header/appBar/interfaces-common-header-appbar";

// Utils
import { headerAppbarIconNames } from "@utils/text/common/header/utils-text-common-header";

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
	data(): IHeaderData {
		return {};
	},
	computed: {
		// Text
		txtPageHome(): string {
			return this.$t("$vuetify.common.pages.home.name");
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
		appBarIcons(): IAppBarIcons {
			return this.storeHeader.getAllAppBarIcons;
		},

		// Read & Write
		drawer: {
			get(): boolean {
				return this.storeHeader.getDrawer;
			},
			set(newValue: boolean): void {
				this.storeHeader.setDrawer(newValue);
			},
		},
	},
	methods: {
		// Events
		appBarIconClicked(element: PointerEvent): void {
			const targetElement: HTMLButtonElement = element.target as HTMLButtonElement;
			const targetID: string = targetElement.id;

			switch (targetID) {
				case headerAppbarIconNames.search:
					break;
				case headerAppbarIconNames.theme:
					this.toggleTheme();
					break;
				case headerAppbarIconNames.newAccount:
					break;
				case headerAppbarIconNames.account:
					break;
				case headerAppbarIconNames.settings:
					break;
			}
		},
		navigateTo(routeName: string): void {
			this.$router.push({ name: routeName });
		},

		// Utils
		toggleTheme(): void {
			this.theme.global.name.value = this.theme.global.current.value.dark ? "light" : "dark";
		},
	},
	setup() {
		const storeHeader = childStores.useHeaderStore();
		const theme = useTheme();
		return { storeHeader, theme };
	},
	created(): void {
		this.storeHeader.setAppBarIcons();
		this.storeHeader.setNavigationItems();
	},
});
</script>
