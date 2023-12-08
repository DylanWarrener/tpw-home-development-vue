import { defineStore } from "pinia";

// Interfaces
import INewsState from "@declaration/common/interfaces/pages/info/news/interfaces-common-pages-info-news";
//import INewsDropdownState from "@interfaces/news/dropdown/interface-news-dropdown";
//import INewsSectionsState from "@src/interfaces/news/sections/interface-news-sections";
//import INewsFilterState from "@interfaces/news/filters/interface-news-filters";
//import INewsActiveFiltersState from "@interfaces/news/active-filters/interface-news-active-filters";

// Images
import KitchenPNG from "@assets/png/kitchens/kitchen.jpg";
import BathroomPNG from "@assets/png/bathrooms/bathroom.jpg";
import NewbuildPNG from "@assets/png/newbuilds/newbuild.jpg";
import ExtensionPNG from "@assets/png/extensions/extension.jpg";
import RefurbishmentPNG from "@assets/png/refurbishments/refurbishment.jpg";

/*
articles: [
			{
				img: {
					src: KitchenPNG,
					btnText: "Read article",
				},
				article: {
					type: {
						text: "kitchens",
						tag: "p",
						colour: "text-accent",
						transform: "text-uppercase",
					},
					title: {
						text: "kitchens",
						tag: "h4",
					},
					message: {
						text: "see our new kitchen designs",
						tag: "h5",
					},
					date: {
						text: "25th September",
						tag: "h6",
					},
				},
			},
			{
				img: {
					src: KitchenPNG,
					btnText: "Read article",
				},
				article: {
					type: {
						text: "bathrooms",
						tag: "p",
						colour: "text-accent",
						transform: "text-uppercase",
					},
					title: {
						text: "all about bathrooms",
						tag: "h4",
					},
					message: {
						text: "see our new bathroom designs",
						tag: "h5",
					},
					date: {
						text: "29th September",
						tag: "h6",
					},
				},
			},
		],
*/
const useNewsStore = defineStore("news-store", {
	state: (): INewsState => ({
		dropdownOptions: {
			items: ["Ascending", "Descending"],
			label: "Sort method",
			value: "Ascending",
		},
		newsSections: [
			{
				title: "kitchens",
				articles: [
					{
						article: {
							img: {
								src: KitchenPNG,
								btnText: "read article",
							},
							type: "kitchens",
							title: "new - kitchen design",
							message: "this kitchen is an all new favourite",
							date: "monday 20th november 2023",
						},
					},
					{
						article: {
							img: {
								src: KitchenPNG,
								btnText: "read article",
							},
							type: "kitchens",
							title: "new - kitchen colour theme",
							message: "this colour theme is a mix between the colours our customers love the most",
							date: "thursday 23th november 2023",
						},
					},
				],
			},
			{
				title: "bathrooms",
				articles: [
					{
						article: {
							img: {
								src: BathroomPNG,
								btnText: "read article",
							},
							type: "bathrooms",
							title: "new - bathroom design",
							message: "this bathroom is an all new favourite",
							date: "monday 20th november 2023",
						},
					},
					{
						article: {
							img: {
								src: BathroomPNG,
								btnText: "read article",
							},
							type: "bathrooms",
							title: "new - bathroom colour theme",
							message: "this colour theme is a mix between the colours our customers love the most",
							date: "thursday 23th november 2023",
						},
					},
				],
			},
			{
				title: "newbuilds",
				articles: [
					{
						article: {
							img: {
								src: NewbuildPNG,
								btnText: "read article",
							},
							type: "newbuilds",
							title: "new - newbuild design",
							message: "this bathroom is an all new favourite",
							date: "monday 20th november 2023",
						},
					},
					{
						article: {
							img: {
								src: NewbuildPNG,
								btnText: "read article",
							},
							type: "newbuilds",
							title: "new - newbuilds colour theme",
							message: "this colour theme is a mix between the colours our customers love the most",
							date: "thursday 23th november 2023",
						},
					},
				],
			},
			{
				title: "extensions",
				articles: [
					{
						article: {
							img: {
								src: ExtensionPNG,
								btnText: "read article",
							},
							type: "extensions",
							title: "new - extension design",
							message: "this extension is an all new favourite",
							date: "monday 20th november 2023",
						},
					},
					{
						article: {
							img: {
								src: ExtensionPNG,
								btnText: "read article",
							},
							type: "extensions",
							title: "new - extension colour theme",
							message: "this colour theme is a mix between the colours our customers love the most",
							date: "thursday 23th november 2023",
						},
					},
				],
			},
			{
				title: "refurbishments",
				articles: [
					{
						article: {
							img: {
								src: RefurbishmentPNG,
								btnText: "read article",
							},
							type: "refurbishments",
							title: "new - refurbishment design",
							message: "this refurbishment is an all new favourite",
							date: "monday 20th november 2023",
						},
					},
					{
						article: {
							img: {
								src: RefurbishmentPNG,
								btnText: "read article",
							},
							type: "refurbishments",
							title: "new - refurbishment colour theme",
							message: "this colour theme is a mix between the colours our customers love the most",
							date: "thursday 23th november 2023",
						},
					},
				],
			},
		],
		filter: {
			title: "filter options",
			search: {
				label: "search for news articles?",
			},
			filters: {
				type: {
					title: "refine by type",
					label: "select a type",
					values: ["No type", "Kitchens", "Bathrooms", "Newbuilds", "Extensions", "Refurbishments"],
					currentValue: "No type",
				},
				date: {
					title: "refine by date",
					header: "select a date",
					values: [],
					currentValue: "",
				},
			},
		},
		activeFilters: [],
	}),
	getters: {
		//getNewsDropdownOptionsState: (state): INewsDropdownState => state.dropdownOptions,
		//getNewsSectionsState: (state): INewsSectionsState[] => state.newsSections,
		//getNewsFilterOptionsState: (state): INewsFilterState => state.filter,
		//getNewsActiveFiltersState: (state): INewsActiveFiltersState[] => state.activeFilters,
	},
	actions: {
		/* sortNewsArticles(sortedArticles: INewsArticlesState[]): void {
			this.articles = sortedArticles;
		},
		addActiveFilter(newFilter: INewsActiveFiltersState): void {
			this.activeFilters.push(newFilter);
		},
		removeActiveFilterByIndex(indexToRemove: number): void {
			this.activeFilters.splice(indexToRemove, 1);
		}, */
	},
});

export default useNewsStore;
