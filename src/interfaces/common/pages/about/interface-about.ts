export default interface IAboutTextualData {}

export interface IAboutState {
	employees: IAboutEmployeeCard[];
}

export interface IAboutData {}

export interface IAboutEmployeeCard {
	name: string;
	role: string;
	socials: IAboutSocials[];
	picture: string;
	info: string;
	show: boolean;
}

export interface IAboutSocials {
	name: string;
	link: string;
	icon: string;
}
