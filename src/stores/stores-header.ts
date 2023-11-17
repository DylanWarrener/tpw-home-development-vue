import { defineStore } from "pinia";

// Localisation
import { i18nInstance } from "@plugins/vuei18n/vue-i18n";

// Interfaces
import IHeaderState, { IAppBarIcons } from "@interfaces/header/interface-header";

const useHeaderStore = defineStore("header-store", {
	state: (): IHeaderState => ({
		drawer: false,
		appBarIcons: {
			menu: {
				name: "",
				icon: "this.$t('$vuetify.header.appBar.icons.name.menu')",
				tooltip: "this.$t('$vuetify.header.appBar.icons.tooltips.menu')",
				showTooltip: false,
			},
			others: {
				search: {
					name: "this.$t('header.appBar.icons.name.search')",
					icon: "this.$t('header.appBar.icons.search')",
					tooltip: "this.$t('header.appBar.icons.tooltips.search')",
					showTooltip: false,
				},
				theme: {
					name: 'this.$t("header.appBar.icons.name.theme")',
					icon: 'this.$t("header.appBar.icons.theme")',
					tooltip: 'this.$t("header.appBar.icons.tooltips.theme")',
					showTooltip: false,
				},
				newAccount: {
					name: 'this.$t("header.appBar.icons.name.newAccount")',
					icon: 'this.$t("header.appBar.icons.newAccount")',
					tooltip: 'this.$t("header.appBar.icons.tooltips.newAccount")',
					showTooltip: false,
				},
				account: {
					name: 'this.$t("header.appBar.icons.name.account")',
					icon: 'this.$t("header.appBar.icons.account")',
					tooltip: 'this.$t("header.appBar.icons.tooltips.account")',
					showTooltip: false,
				},
				settings: {
					name: 'this.$t("header.appBar.icons.name.settings")',
					icon: 'this.$t("header.appBar.icons.settings")',
					tooltip: 'this.$t("header.appBar.icons.tooltips.settings")',
					showTooltip: false,
				},
			},
		},
	}),
	getters: {
		getDrawer: (state: IHeaderState): boolean => state.drawer,
		getAllAppBarIcons: (state: IHeaderState): IAppBarIcons => state.appBarIcons,
	},
	actions: {
		// Setters
		setDrawer(newValue: boolean): void {
			this.drawer = newValue;
		},
		setAppBarIcons(): void {
			// Menu
			this.appBarIcons.menu.name = i18nInstance.t("$vuetify.header.appBar.icons.name.menu");
			this.appBarIcons.menu.icon = i18nInstance.t("$vuetify.header.appBar.icons.name.menu");
			this.appBarIcons.menu.tooltip = i18nInstance.t("$vuetify.header.appBar.icons.name.menu");

			// Search
			// Theme
			// NewAccount
			// Account
			// Settings
		},

		// Getters
	},
});

useHeaderStore().setAppBarIcons();

export default useHeaderStore;
