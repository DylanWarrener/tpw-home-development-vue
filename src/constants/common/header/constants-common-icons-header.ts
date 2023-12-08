// Interfaces
import { IHeaderAppBarIcons, IHeaderNavigationIcons } from "@src/declaration/common/interfaces/header/interface-common-header";

export const headerAppbarIconNames: IHeaderIconNames = {
	menu: "menu",
	search: "search",
	theme: "theme",
	newAccount: "newAccount",
	account: "account",
	settings: "settings",
};
export const headerAppbarIcons: IHeaderAppBarIcons = {
	menu: "mdi-menu",
	search: "mdi-magnify",
	theme: "mdi-theme-light-dark",
	newAccount: "mdi-account-plus",
	account: "mdi-account",
	settings: "mdi-dots-vertical",
};
export const headerAppbarIconTooltips: IHeaderIconTooltips = {
	menu: "Toggle Menu",
	search: "Toggle Search",
	theme: "Toggle Theme",
	newAccount: "Create Account",
	account: "My Account",
	settings: "Toggle Settings",
};
export const headerNavigationIcons: IHeaderNavigationIcons = {
	home: "mdi-home",
	kitchen: "mdi-faucet",
	bathroom: "mdi-shower-head",
	newbuild: "mdi-office-building-plus",
	extension: "mdi-toy-brick-plus",
	refurbishment: "mdi-brush",
	contact: "mdi-email-fast",
	about: "mdi-information",
	news: "mdi-newspaper",
	reviews: "mdi-message-draw",
};
