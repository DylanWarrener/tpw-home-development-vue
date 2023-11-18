import { defineStore } from "pinia";

// Localisation
import { i18nInstance } from "@plugins/vuei18n/vue-i18n";

// Interfaces
import IHeaderState from "@interfaces/header/interface-header";
import { IAppBarIcons } from "@interfaces/header/appBar/interface-header-appbar";
import { IHeaderNavigation } from "@interfaces/header/navigation/interface-header-navigation";

const useHeaderStore = defineStore("header-store", {
	state: (): IHeaderState => ({
		drawer: false,
		appBarIcons: {
			menu: {
				id: "",
				icon: "",
				tooltip: "",
				showTooltip: false,
			},
			others: {
				search: {
					id: "",
					icon: "",
					tooltip: "",
					showTooltip: false,
				},
				theme: {
					id: "",
					icon: "",
					tooltip: "",
					showTooltip: false,
				},
				newAccount: {
					id: "",
					icon: "",
					tooltip: "",
					showTooltip: false,
				},
				account: {
					id: "",
					icon: "",
					tooltip: "",
					showTooltip: false,
				},
				settings: {
					id: "",
					icon: "",
					tooltip: "",
					showTooltip: false,
				},
			},
		},
		navigation: {
			home: {
				title: "",
				icon: "",
				link: "",
			},
			kitchen: {
				title: "",
				icon: "",
				link: "",
			},
			bathroom: {
				title: "",
				icon: "",
				link: "",
			},
			newbuild: {
				title: "",
				icon: "",
				link: "",
			},
			extension: {
				title: "",
				icon: "",
				link: "",
			},
			refurbishment: {
				title: "",
				icon: "",
				link: "",
			},
			contact: {
				title: "",
				icon: "",
				link: "",
			},
			about: {
				title: "",
				icon: "",
				link: "",
			},
			news: {
				title: "",
				icon: "",
				link: "",
			},
			reviews: {
				title: "",
				icon: "",
				link: "",
			},
		},
	}),
	getters: {
		getDrawer: (state: IHeaderState): boolean => state.drawer,
		getAllAppBarIcons: (state: IHeaderState): IAppBarIcons => state.appBarIcons,
		getNavigationItems: (state: IHeaderState): IHeaderNavigation => state.navigation,
	},
	actions: {
		// Setters
		setDrawer(newValue: boolean): void {
			this.drawer = newValue;
		},
		setAppBarIcons(): void {
			// Menu
			this.appBarIcons.menu.id = i18nInstance.t("$vuetify.header.appBar.icons.names.menu");
			this.appBarIcons.menu.icon = i18nInstance.t("$vuetify.header.appBar.icons.menu");
			this.appBarIcons.menu.tooltip = i18nInstance.t("$vuetify.header.appBar.icons.tooltips.menu");

			// Search
			this.appBarIcons.others.search.id = i18nInstance.t("$vuetify.header.appBar.icons.names.search");
			this.appBarIcons.others.search.icon = i18nInstance.t("$vuetify.header.appBar.icons.search");
			this.appBarIcons.others.search.tooltip = i18nInstance.t("$vuetify.header.appBar.icons.tooltips.search");

			// Theme
			this.appBarIcons.others.theme.id = i18nInstance.t("$vuetify.header.appBar.icons.names.theme");
			this.appBarIcons.others.theme.icon = i18nInstance.t("$vuetify.header.appBar.icons.theme");
			this.appBarIcons.others.theme.tooltip = i18nInstance.t("$vuetify.header.appBar.icons.tooltips.theme");

			// NewAccount
			this.appBarIcons.others.newAccount.id = i18nInstance.t("$vuetify.header.appBar.icons.names.newAccount");
			this.appBarIcons.others.newAccount.icon = i18nInstance.t("$vuetify.header.appBar.icons.newAccount");
			this.appBarIcons.others.newAccount.tooltip = i18nInstance.t("$vuetify.header.appBar.icons.tooltips.newAccount");

			// Account
			this.appBarIcons.others.account.id = i18nInstance.t("$vuetify.header.appBar.icons.names.account");
			this.appBarIcons.others.account.icon = i18nInstance.t("$vuetify.header.appBar.icons.account");
			this.appBarIcons.others.account.tooltip = i18nInstance.t("$vuetify.header.appBar.icons.tooltips.account");

			// Settings
			this.appBarIcons.others.settings.id = i18nInstance.t("$vuetify.header.appBar.icons.names.settings");
			this.appBarIcons.others.settings.icon = i18nInstance.t("$vuetify.header.appBar.icons.settings");
			this.appBarIcons.others.settings.tooltip = i18nInstance.t("$vuetify.header.appBar.icons.tooltips.settings");
		},
		setNavigationItems(): void {
			// Home
			this.navigation.home.title = i18nInstance.t("$vuetify.header.navigation.names.home");
			this.navigation.home.icon = i18nInstance.t("$vuetify.header.navigation.icons.home");
			this.navigation.home.link = i18nInstance.t("$vuetify.header.navigation.links.home");

			// Kitchen
			this.navigation.kitchen.title = i18nInstance.t("$vuetify.header.navigation.names.kitchen");
			this.navigation.kitchen.icon = i18nInstance.t("$vuetify.header.navigation.icons.kitchen");
			this.navigation.kitchen.link = i18nInstance.t("$vuetify.header.navigation.links.kitchen");

			// Bathroom
			this.navigation.bathroom.title = i18nInstance.t("$vuetify.header.navigation.names.bathroom");
			this.navigation.bathroom.icon = i18nInstance.t("$vuetify.header.navigation.icons.bathroom");
			this.navigation.bathroom.link = i18nInstance.t("$vuetify.header.navigation.links.bathroom");

			// Newbuild
			this.navigation.newbuild.title = i18nInstance.t("$vuetify.header.navigation.names.newbuild");
			this.navigation.newbuild.icon = i18nInstance.t("$vuetify.header.navigation.icons.newbuild");
			this.navigation.newbuild.link = i18nInstance.t("$vuetify.header.navigation.links.newbuild");

			// Extension
			this.navigation.extension.title = i18nInstance.t("$vuetify.header.navigation.names.extension");
			this.navigation.extension.icon = i18nInstance.t("$vuetify.header.navigation.icons.extension");
			this.navigation.extension.link = i18nInstance.t("$vuetify.header.navigation.links.extension");

			// Refurbishment
			this.navigation.refurbishment.title = i18nInstance.t("$vuetify.header.navigation.names.refurbishment");
			this.navigation.refurbishment.icon = i18nInstance.t("$vuetify.header.navigation.icons.refurbishment");
			this.navigation.refurbishment.link = i18nInstance.t("$vuetify.header.navigation.links.refurbishment");

			// Contact
			this.navigation.contact.title = i18nInstance.t("$vuetify.header.navigation.names.contact");
			this.navigation.contact.icon = i18nInstance.t("$vuetify.header.navigation.icons.contact");
			this.navigation.contact.link = i18nInstance.t("$vuetify.header.navigation.links.contact");

			// About
			this.navigation.about.title = i18nInstance.t("$vuetify.header.navigation.names.about");
			this.navigation.about.icon = i18nInstance.t("$vuetify.header.navigation.icons.about");
			this.navigation.about.link = i18nInstance.t("$vuetify.header.navigation.links.about");

			// News
			this.navigation.news.title = i18nInstance.t("$vuetify.header.navigation.names.news");
			this.navigation.news.icon = i18nInstance.t("$vuetify.header.navigation.icons.news");
			this.navigation.news.link = i18nInstance.t("$vuetify.header.navigation.links.news");

			// Reviews
			this.navigation.reviews.title = i18nInstance.t("$vuetify.header.navigation.names.reviews");
			this.navigation.reviews.icon = i18nInstance.t("$vuetify.header.navigation.icons.reviews");
			this.navigation.reviews.link = i18nInstance.t("$vuetify.header.navigation.links.reviews");
		},

		// Getters
	},
});

export default useHeaderStore;
