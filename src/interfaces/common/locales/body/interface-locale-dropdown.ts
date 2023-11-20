export default interface IDropdownTextualData {
	carousel: IDropdownCarouselTextualData;
}

// DROPDOWN - CAROUSEL
interface IDropdownCarouselTextualData {
	items: IDropdownCanvasItemsTextualData;
	label: string;
}

// DROPDOWN - CAROUSEL - ITEMS
interface IDropdownCanvasItemsTextualData {
	kitchen: string;
	bathroom: string;
	newbuild: string;
	extension: string;
	refurbishment: string;
}
