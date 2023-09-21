export default interface IContactTextualData {}

export interface IContactState {
	infoState: IContactInfoState;
	formState: IContactFormState;
}

export interface IContactInfoState {
	message: string;
	icons: IContactInfoIconsState[];
}
interface IContactInfoIconsState {
	icon: string;
	title: string;
	info: string;
}

export interface IContactFormState {
	title: string;
	subtitle: string;
	textFields: IContactFormTextFieldsData[];
	textArea: {
		label: string;
	};
	btnText: string;
}

interface IContactFormTextFieldsData {
	labelOne: string;
	labelTwo: string;
}

export interface IContactData {}
