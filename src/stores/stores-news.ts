import { defineStore } from "pinia";

// Interfaces
import { INewsState, INewsDropdownOptionsState, INewsArticlesState, INewsFilterOptionsState } from "@interfaces/news/interface-news";

// Images
import KitchenPNG from "@assets/png/kitchens/kitchen.jpg";

const useNewsStore = defineStore("newsStore", {
	state: (): INewsState => ({
		dropdownOptions: {
			items: ["Alphabetical A - Z", "Alphabetical Z - A", "Date newest first", "Date oldest first"],
			label: "Sort method",
		},
		articles: [
			{
				img: {
					src: KitchenPNG,
					btnText: "Read article",
				},
				article: [
					{
						text: "Kitchens",
						tag: "p",
						colour: "text-accent",
						transform: "text-uppercase",
					},
					{
						text: "Kitchens",
						tag: "h4",
					},
					{
						text: "Our new kitchen designs.",
						tag: "h5",
					},
					{
						text: "",
						tag: "p",
					},
					{
						text: "25th September",
						tag: "h6",
					},
				],
			},
		],
		filterOptions: {
			title: "Filter options",
			search: {
				label: "Search for news articles?",
			},
			options: [
				{
					title: {
						text: "Refine by Type",
					},
					element: {
						tag: "v-list",
						values: ["Kitchens", "Bathrooms", "Newbuilds", "Extensions", "Refurbishments"],
					},
				},
				{
					title: {
						text: "Refine by Date",
					},
					element: {
						tag: "v-date-picker",
						values: [],
					},
				},
			],
		},
	}),
	getters: {
		getNewsDropdownOptionsState: (state): INewsDropdownOptionsState => state.dropdownOptions,
		getNewsArticlesState: (state): INewsArticlesState[] => state.articles,
		getNewsFilterOptionsState: (state): INewsFilterOptionsState => state.filterOptions,
	},
	actions: {},
});

export default useNewsStore;
