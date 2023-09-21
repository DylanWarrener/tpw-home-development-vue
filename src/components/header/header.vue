<template>
	<!--<v-system-bar color="blue"></v-system-bar>-->
	<v-app-bar class="bg-background-secondary" scroll-behavior="hide">
		<svg-component width="200px" height="100%" :svg-content="iconLogoSVG" :to="linkHome"></svg-component>
		<v-tooltip location="bottom" v-model="showMenu">
			<template #activator="{ props }">
				<v-btn icon :id="menu.name" v-bind="props" @click.stop="drawer = !drawer">
					<v-icon :id="menu.name">{{ menu.icon }}</v-icon>
				</v-btn>
			</template>
			<span>{{ menu.tooltip }}</span>
		</v-tooltip>
		<v-app-bar-title>{{ txtTitle }}</v-app-bar-title>
		<v-tooltip location="bottom" v-model="item.show" v-for="(item, index) in icons">
			<template #activator="{ props }">
				<v-btn icon :key="index" v-bind="props" @click="handleClick">
					<v-icon :id="item.name" :key="index">{{ item.icon }}</v-icon>
				</v-btn>
			</template>
			<span>{{ item.tooltip }}</span>
		</v-tooltip>
	</v-app-bar>
	<header-navigation-component class="bg-inverted text-default"></header-navigation-component>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Theme
import { useTheme } from "vuetify";

// Store
import { childStores, parentStore } from "@plugins/pinia/pinia";

// Components
import HeaderNav from "@components/header/navigation/header-navigation.vue";
import Logo from "@components/header/navigation/logo.vue";
import SVG from "@components/containers/svg/svg.vue";
import LogoSVG from "@assets/svg/logo/logo.svg?raw";

// Interfaces
import { IAppBarIconsInfo } from "@interfaces/header/interface-header";

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
			return this.$t("$vuetify.pages.home.name");
		},
		txtKitchen(): string {
			return this.$t("$vuetify.pages.kitchen.name");
		},
		txtBathroom(): string {
			return this.$t("$vuetify.pages.bathroom.name");
		},
		txtNewbuild(): string {
			return this.$t("$vuetify.pages.newbuild.name");
		},
		txtExtension(): string {
			return this.$t("$vuetify.pages.extension.name");
		},
		txtRefurbishment(): string {
			return this.$t("$vuetify.pages.refurbishment.name");
		},
		txtContact(): string {
			return this.$t("$vuetify.pages.contact.name");
		},
		txtAbout(): string {
			return this.$t("$vuetify.pages.about.name");
		},
		txtNews(): string {
			return this.$t("$vuetify.pages.news.name");
		},
		txtReviews(): string {
			return this.$t("$vuetify.pages.reviews.name");
		},
		txtTitle(): string | undefined {
			const title = this.$route.name;
			return title ? title?.toString() : "";
		},

		// Links
		linkHome(): string {
			return this.$t("$vuetify.pages.home.link");
		},

		// Icons
		iconLogoSVG(): string {
			return LogoSVG;
		},
		iconsAppBar() {
			return this.storeHeader.getAllAppBarIcons;
		},
		iconAppBarMenu(): IAppBarIconsInfo {
			const { menu } = this.iconsAppBar;
			return menu;
		},
		iconsAppBarOther() {
			const { menu, ...others } = this.iconsAppBar;
			return others;
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
		handleClick(element: PointerEvent): void {
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
	},
	setup() {
		const storeCommon = parentStore();
		const storeHeader = childStores.useHeaderStore();
		const theme = useTheme();
		return { storeCommon, storeHeader, theme };
	},
	data() {
		return {
			showMenu: false,
			menu: {
				name: this.$t("$vuetify.header.appBar.icons.names.menu"),
				icon: this.$t("$vuetify.header.appBar.icons.menu"),
				tooltip: this.$t("$vuetify.header.appBar.icons.tooltips.menu"),
				show: false,
			},
			icons: [
				{
					name: this.$t("$vuetify.header.appBar.icons.names.search"),
					icon: this.$t("$vuetify.header.appBar.icons.search"),
					tooltip: this.$t("$vuetify.header.appBar.icons.tooltips.search"),
					show: false,
				},
				{
					name: this.$t("$vuetify.header.appBar.icons.names.theme"),
					icon: this.$t("$vuetify.header.appBar.icons.theme"),
					tooltip: this.$t("$vuetify.header.appBar.icons.tooltips.theme"),
					show: false,
				},
				{
					name: this.$t("$vuetify.header.appBar.icons.names.newAccount"),
					icon: this.$t("$vuetify.header.appBar.icons.newAccount"),
					tooltip: this.$t("$vuetify.header.appBar.icons.tooltips.newAccount"),
					show: false,
				},
				{
					name: this.$t("$vuetify.header.appBar.icons.names.account"),
					icon: this.$t("$vuetify.header.appBar.icons.account"),
					tooltip: this.$t("$vuetify.header.appBar.icons.tooltips.account"),
					show: false,
				},
				{
					name: this.$t("$vuetify.header.appBar.icons.names.settings"),
					icon: this.$t("$vuetify.header.appBar.icons.settings"),
					tooltip: this.$t("$vuetify.header.appBar.icons.tooltips.settings"),
					show: false,
				},
			],
		};
	},
});
</script>
