// Locale textual data
export interface ICommonCarouselDropdownTextualData {
	items: ICommonCarouselDropdownItemsTextualData;
	label: string;
}

export interface ICommonCarouselDropdownItemsTextualData {
	kitchen: string;
	bathroom: string;
	newbuild: string;
	extension: string;
	refurbishment: string;
}

// Vue data
export interface ICommonCarouselImagesData {
	id: number;
	src: string;
}
