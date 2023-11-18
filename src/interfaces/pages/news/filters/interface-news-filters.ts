export default interface INewsFilterState {
	title: string;
	search: {
		label: string;
	};
	filters: INewsFilterOptionsState;
}

export interface INewsFilterOptionsState {
	type: INewsFilterRefineByType;
	date: INewsFilterRefineByDate;
}

export interface INewsFilterRefineBy {
	title: string;
	values: string[];
	currentValue: string;
}

interface INewsFilterRefineByType extends INewsFilterRefineBy {
	label: string;
}

interface INewsFilterRefineByDate extends INewsFilterRefineBy {
	header: string;
}
