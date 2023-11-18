import INewsDropdownState from "@interfaces/news/dropdown/interface-news-dropdown";
import INewsSectionsState from "@src/interfaces/news/sections/interface-news-sections";
import INewsFilterState from "@interfaces/news/filters/interface-news-filters";
import INewsActiveFiltersState from "@interfaces/news/active-filters/interface-news-active-filters";

export default interface INewsState {
	dropdownOptions: INewsDropdownState;
	newsSections: INewsSectionsState[];
	filter: INewsFilterState;
	activeFilters: INewsActiveFiltersState[];
}

export interface INewsData {
	//sortedArticles: INewsSectionsState[];
}
