<template>
	<v-container id="news">
		<v-row>
			<v-col cols="12" style="border: 2px solid blue">
				<dropdown-component
					:items="dropdownOptions.items"
					:label="dropdownOptions.label"
					v-model="dropdownOptions.value"
				></dropdown-component>
				<news-active-filters-component :active-filters="activeFilters"></news-active-filters-component>
			</v-col>

			<v-col cols="12">
				<v-row id="news_content" style="border: 2px solid red">
					<news-articles-component :articles="articles"></news-articles-component>
					<news-filter-component :filter="filter"></news-filter-component>
				</v-row>
			</v-col>
		</v-row>
	</v-container>
</template>

<script lang="ts">
/*
<!-- Dropdown -->
		<!-- All news documents -->
		<v-row id="news_content">
			<!-- News components -->

			<!-- Filter options -->
			<v-col id="news_content-filter-options" style="border: 2px solid orange; max-width: 40%">
				<v-row class="pa-4">
					<div class="w-100 h-100" style="background-color: rgb(var(--v-theme-accent)); color: rgb(var(--v-theme-inverted))">
						<v-col cols="12">
							<h4>Filter options</h4>
						</v-col>
						<v-divider></v-divider>

						<!-- Search text box-->
						<v-col cols="12" class="d-flex justify-center align-center">
							<v-text-field
								variant="outlined"
								append-inner-icon="mdi-magnify"
								label="Search for news articles"
							></v-text-field>
						</v-col>

						<!-- Refine by ... -->
						<template :key="index" v-for="(options, index) in filterOptions.options">
							<v-col cols="12" v-html="filterOptionsHtmlBuilder(options)"></v-col>
						</template>

						<!-- <v-col id="news_filter_options" cols="12">
							<h5>Refine by Type</h5>
							<v-divider class="my-2"></v-divider>
							<v-list :items="filterOptions.options[0].element.values"></v-list>
						</v-col>

						<v-col id="news_filter_options" cols="12">
							<h5>Refine by Date</h5>
							<v-divider class="my-2"></v-divider>
							<v-date-picker class="w-100" color="inverted" header="Select a date"></v-date-picker>
						</v-col> -->
					</div>
				</v-row>
			</v-col>
		</v-row>
*/
import { defineComponent } from "vue";

// Stores
import { childStores } from "@plugins/pinia/pinia";

// Components
import Dropdown from "@components/containers/dropdown/dropdown.vue";
import NewsActiveFilters from "@components/containers/news/news-active-filters.vue";
import NewsArticles from "@components/containers/news/news-articles.vue";
import NewsFilter from "@components/containers/news/news-filter.vue";

// Interfaces
import { INewsData } from "@interfaces/news/interface-news";
import INewsDropdownState from "@interfaces/news/dropdown/interface-news-dropdown";
import INewsArticlesState from "@interfaces/news/articles/interface-news-articles";
import INewsFilterState from "@interfaces/news/filters/interface-news-filters";
import INewsActiveFiltersState from "@interfaces/news/active-filters/interface-news-active-filters";

// Enums
import { FilterSortBy } from "@enums/enums";

export default defineComponent({
	name: "news-component",
	components: {
		"dropdown-component": Dropdown,
		"news-active-filters-component": NewsActiveFilters,
		"news-articles-component": NewsArticles,
		"news-filter-component": NewsFilter,
	},
	computed: {
		// Data
		dropdownOptions(): INewsDropdownState {
			return this.storeNews.getNewsDropdownOptionsState;
		},
		articles(): INewsArticlesState[] {
			return this.storeNews.getNewsArticlesState;
		},
		filter(): INewsFilterState {
			return this.storeNews.getNewsFilterOptionsState;
		},
		activeFilters(): INewsActiveFiltersState[] {
			return this.storeNews.getNewsActiveFiltersState;
		},
	},
	methods: {
		// Events
		removefilter(): void {
			console.log("Remove filter method...");
		},

		sortArticles(filterSortBy: number, objectAccessName: string): INewsArticlesState[] {
			let retVal: INewsArticlesState[] = JSON.parse(JSON.stringify(this.articles));
			if (this.articles && objectAccessName) {
				switch (filterSortBy) {
					case FilterSortBy.ASCENDING:
						retVal.sort((a, b) => {
							if (a.article[objectAccessName].text > b.article[objectAccessName].text) return 1;
							if (a.article[objectAccessName].text < b.article[objectAccessName].text) return -1;
							return 0;
						});
						break;
					case FilterSortBy.DESCENDING:
						retVal.sort((a, b) => {
							if (a.article[objectAccessName].text > b.article[objectAccessName].text) return -1;
							if (a.article[objectAccessName].text < b.article[objectAccessName].text) return 1;
							return 0;
						});
						break;
					default:
						break;
				}
			}
			return retVal;
		},
	},
	watch: {
		dropdownOptions: {
			deep: true,
			immediate: true,
			handler(newDropdownObject: INewsDropdownState): void {
				if (newDropdownObject) {
					const dropdownObjectCopy: INewsDropdownState = JSON.parse(JSON.stringify(newDropdownObject));
					const dropdownObjectValueTextTransform: string = dropdownObjectCopy.value.toUpperCase();
					const dropdownValue: number = FilterSortBy[dropdownObjectValueTextTransform];
					this.storeNews.sortNewsArticles(this.sortArticles(dropdownValue, "title"));
				}
			},
		},
		filter: {
			deep: true,
			handler(newObject: INewsFilterState, oldObject: INewsFilterState): void {
				if (newObject && oldObject) {
					console.log("Running filter options watcher...");
				}
			},
		},
	},
	data(): INewsData {
		return {
			sortedArticles: [],
		};
	},
	setup() {
		const storeNews = childStores.useNewsStore();
		return { storeNews };
	},
});
</script>
@src/interfaces/news/sections/interface-news-articles
