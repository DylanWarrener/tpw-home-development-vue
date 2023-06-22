import { ICommonCarouselImagesData } from "../../carousel/interface-common-carousel";

// Locale textual data
export default interface ICommonBeInspiredTextualData {}

// Pinia state
export interface ICommonBeInspiredState {}

// Vue data
export interface ICommonBeInspiredData {
	items: string[];
	images: ICommonCarouselImagesData[];
}
