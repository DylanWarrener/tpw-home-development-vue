<template>
	<!--<v-system-bar color="blue"></v-system-bar>-->
	<v-app-bar class="bg-background-secondary" scroll-behavior="hide">
		<svg-component :svg-content="logoSVG" :to="home"></svg-component>
		<v-tooltip location="bottom" v-model="showMenu">
			<template #activator="{ props }">
				<v-btn icon :id="menu.name" v-bind="props" @click.stop="drawer = !drawer">
					<v-icon :id="menu.name">{{ menu.icon }}</v-icon>
				</v-btn>
			</template>
			<span>{{ menu.tooltip }}</span>
		</v-tooltip>
		<v-app-bar-title>
			{{ title }}
		</v-app-bar-title>
		<v-tooltip location="bottom" v-model="item.show" v-for="item in icons">
			<template #activator="{ props }">
				<v-btn icon :key="item.id" v-bind="props" @click="handleClick">
					<v-icon :id="item.name" :key="item.id">{{ item.icon }}</v-icon>
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
import { parentStore } from "@plugins/pinia/pinia";

// Components
import HeaderNav from "@components/header/navigation/header-navigation.vue";
import Logo from "@components/header/navigation/logo.vue";
import SVG from "@components/containers/svg/svg.vue";
import LogoSVG from "@assets/svg/logo/logo.svg?raw";

// Utils
import { headerIconNames } from "@utils/text/utils-text";

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
		txtNews(): string {
			return this.$t("header.appBar.titles.news");
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
				case this.txtNews:
					retVal = this.txtNews;
					break;
			}
			return retVal;
		},

		// Links
		home(): string {
			return this.$t("header.navigation.page.link.home");
		},

		// Icons
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
	methods: {
		// Events
		handleClick(element: PointerEvent): void {
			const targetElement: HTMLButtonElement = element.target as HTMLButtonElement;
			const targetID: string = targetElement.id;

			switch (targetID) {
				case headerIconNames.menu:
					break;
				case headerIconNames.search:
					break;
				case headerIconNames.theme:
					this.toggleTheme();
					break;
				case headerIconNames.newAccount:
					break;
				case headerIconNames.account:
					break;
				case headerIconNames.settings:
					break;
			}
		},
		toggleTheme(): void {
			this.theme.global.name.value = this.theme.global.current.value.dark ? "light" : "dark";
		},
	},
	setup() {
		const storeCommon = parentStore();
		const theme = useTheme();
		return { storeCommon, theme };
	},
	data() {
		return {
			showMenu: false,
			menu: {
				name: headerIconNames.menu,
				icon: this.$t("header.appBar.icons.menu"),
				tooltip: this.$t("header.appBar.tooltips.menu"),
				show: false,
			},
			icons: [
				{
					id: 0,
					name: headerIconNames.search,
					icon: this.$t("header.appBar.icons.search"),
					tooltip: this.$t("header.appBar.tooltips.search"),
					show: false,
				},
				{
					id: 1,
					name: headerIconNames.theme,
					icon: this.$t("header.appBar.icons.theme"),
					tooltip: this.$t("header.appBar.tooltips.theme"),
					show: false,
				},
				{
					id: 2,
					name: headerIconNames.newAccount,
					icon: this.$t("header.appBar.icons.newAccount"),
					tooltip: this.$t("header.appBar.tooltips.newAccount"),
					show: false,
				},
				{
					id: 3,
					name: headerIconNames.account,
					icon: this.$t("header.appBar.icons.account"),
					tooltip: this.$t("header.appBar.tooltips.account"),
					show: false,
				},
				{
					id: 4,
					name: headerIconNames.settings,
					icon: this.$t("header.appBar.icons.settings"),
					tooltip: this.$t("header.appBar.tooltips.settings"),
					show: false,
				},
			],
		};
	},
});
</script>
