import { defineStore } from "pinia";

// Interfaces
import IHeaderState, {
	IHeaderAppBarIcons,
	IHeaderNavigationData,
} from "@declaration/common/interfaces/header/interface-common-header";

// Enums
import { StoreIDs } from "@enums/common/stores/enums-common-stores";
import { AppBarDensity } from "@enums/common/header/enums-common-header";

// Localisation
import { i18nInstance } from "@plugins/vuei18n/vue-i18n";

// Constants
import {
	headerAppbarIcons,
	headerAppbarIconNames,
	headerNavigationIcons,
} from "@constants/common/objects/header/constants-common-objects-header.js";
import { pageAllNamesAsArrayKeys } from "@constants/common/arrays/constants-common-utils-arrays";

const useHeaderStore = defineStore(StoreIDs.HEADER_STORE_ID, {
	state: (): IHeaderState => ({
		//// App bar
		drawer: false,
		appBarHeight: AppBarDensity.DEFAULT,
		appBarIcons: {
			menu: {
				id: headerAppbarIconNames.menu,
				icon: headerAppbarIcons.menu,
				tooltip: "",
				showTooltip: false,
			},
			others: {
				search: {
					id: headerAppbarIconNames.search,
					icon: headerAppbarIcons.search,
					tooltip: "",
					showTooltip: false,
				},
				theme: {
					id: headerAppbarIconNames.theme,
					icon: headerAppbarIcons.theme,
					tooltip: "",
					showTooltip: false,
				},
				newAccount: {
					id: headerAppbarIconNames.newAccount,
					icon: headerAppbarIcons.newAccount,
					tooltip: "",
					showTooltip: false,
				},
				account: {
					id: headerAppbarIconNames.account,
					icon: headerAppbarIcons.account,
					tooltip: "",
					showTooltip: false,
				},
				settings: {
					id: headerAppbarIconNames.settings,
					icon: headerAppbarIcons.settings,
					tooltip: "",
					showTooltip: false,
				},
			},
		},
		navigation: [
			{
				title: "",
				icon: headerNavigationIcons.home,
				link: "",
			},
			{
				title: "",
				icon: headerNavigationIcons.kitchen,
				link: "",
			},
			{
				title: "",
				icon: headerNavigationIcons.bathroom,
				link: "",
			},
			{
				title: "",
				icon: headerNavigationIcons.newbuild,
				link: "",
			},
			{
				title: "",
				icon: headerNavigationIcons.extension,
				link: "",
			},
			{
				title: "",
				icon: headerNavigationIcons.refurbishment,
				link: "",
			},
			{
				title: "",
				icon: headerNavigationIcons.contact,
				link: "",
			},
			{
				title: "",
				icon: headerNavigationIcons.news,
				link: "",
			},
			{
				title: "",
				icon: headerNavigationIcons.reviews,
				link: "",
			},
			{
				title: "",
				icon: headerNavigationIcons.about,
				link: "",
			},
		],
	}),
	getters: {
		//// App bar
		getDrawer: (state: IHeaderState): boolean => state.drawer,
		getAppBarHeight: (state: IHeaderState): number => state.appBarHeight,
		getAllAppBarIcons: (state: IHeaderState): IHeaderAppBarIcons => state.appBarIcons,
		getNavigationItems: (state: IHeaderState): IHeaderNavigationData[] => state.navigation,
	},
	actions: {
		/* GETTERS */

		/* SETTERS */
		//// App bar
		setDrawer(newValue: boolean): void {
			this.drawer = newValue;
		},
		setAppBarIcons(): void {
			// Menu
			this.appBarIcons.menu.tooltip = i18nInstance.t("common.header.appBar.icons.tooltips.menu");

			// Search
			this.appBarIcons.others.search.tooltip = i18nInstance.t("common.header.appBar.icons.tooltips.search");

			// Theme
			this.appBarIcons.others.theme.tooltip = i18nInstance.t("common.header.appBar.icons.tooltips.theme");

			// NewAccount
			this.appBarIcons.others.newAccount.tooltip = i18nInstance.t("common.header.appBar.icons.tooltips.newAccount");

			// Account
			this.appBarIcons.others.account.tooltip = i18nInstance.t("common.header.appBar.icons.tooltips.account");

			// Settings
			this.appBarIcons.others.settings.tooltip = i18nInstance.t("common.header.appBar.icons.tooltips.settings");
		},
		setNavigationItems(): void {
			for (let i = 0; i < this.navigation.length; i++) {
				this.navigation[i].title = i18nInstance.t(`common.header.navigation.names.${pageAllNamesAsArrayKeys[i]}`);
				this.navigation[i].link = i18nInstance.t(`common.header.navigation.names.${pageAllNamesAsArrayKeys[i]}`);
			}
		},
	},
});

export default useHeaderStore;
