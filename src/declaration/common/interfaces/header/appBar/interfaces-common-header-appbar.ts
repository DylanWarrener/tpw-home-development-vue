export interface IAppBarIcons {
	menu: IAppBarIconsInfo;
	others: {
		search: IAppBarIconsInfo;
		theme: IAppBarIconsInfo;
		newAccount: IAppBarIconsInfo;
		account: IAppBarIconsInfo;
		settings: IAppBarIconsInfo;
	};
}

export interface IAppBarIconsInfo {
	id: string;
	icon: string;
	tooltip: string;
	showTooltip: boolean;
}
