export default interface IHeaderTextualData {
	appBar: IHeaderAppBarTextualData;
	navigation: IHeaderNavigationTextualData;
}

/* HEADER - APPBAR */
interface IHeaderAppBarTextualData {
	titles: IHeaderPageNamesTextualData;
	icons: IHeaderIconsTextualData;
}

// HEADER - APP BAR - TITLES
interface IHeaderPageNamesTextualData {
	home: string;
	kitchen: string;
	bathroom: string;
	newbuild: string;
	extension: string;
	refurbishment: string;
	contact: string;
	about: string;
	news: string;
	reviews: string;
}

// HEADER - APP BAR - ICONS
interface IHeaderIconsTextualData {
	names: IHeaderIconsNameTextualData;
	tooltips: IHeaderIconsTooltipsTextualData;
	menu: string;
	search: string;
	theme: string;
	newAccount: string;
	account: string;
	settings: string;
}

// HEADER - APP BAR - ICONS - NAMES
interface IHeaderIconsNameTextualData {
	menu: string;
	search: string;
	theme: string;
	newAccount: string;
	account: string;
	settings: string;
}

// HEADER - APP BAR - ICONS - TOOLTIPS
interface IHeaderIconsTooltipsTextualData {
	menu: string;
	search: string;
	theme: string;
	newAccount: string;
	account: string;
	settings: string;
}

/* HEADER - NAVGATION */
interface IHeaderNavigationTextualData {
	names: IHeaderNavigationNamesTextualData;
	links: IHeaderNavigationLinksTextualData;
	icons: IHeaderNavigationIconsTextualData;
}

// HEADER - NAVIGATION - NAMES
interface IHeaderNavigationNamesTextualData {
	home: string;
	kitchen: string;
	bathroom: string;
	newbuild: string;
	extension: string;
	refurbishment: string;
	contact: string;
	about: string;
	news: string;
	reviews: string;
}

// HEADER - NAVIGATION - LINKS
interface IHeaderNavigationLinksTextualData {
	home: string;
	kitchen: string;
	bathroom: string;
	newbuild: string;
	extension: string;
	refurbishment: string;
	contact: string;
	about: string;
	news: string;
	reviews: string;
}

// HEADER - NAVIGATION - ICONS
interface IHeaderNavigationIconsTextualData {
	home: string;
	kitchen: string;
	bathroom: string;
	newbuild: string;
	extension: string;
	refurbishment: string;
	contact: string;
	about: string;
	news: string;
	reviews: string;
}
