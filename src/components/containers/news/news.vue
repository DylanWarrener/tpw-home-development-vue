<template>
	<v-container id="news" style="border: 2px solid red">
		<!-- Dropdown -->
		<v-row id="news_sort_dropdown" class="pa-4" style="border: 2px solid green">
			<v-col cols="3" class="text-left" style="border: 2px solid red">
				<dropdown-component :items="dropdownOptions.items" :label="dropdownOptions.label"></dropdown-component>
			</v-col>
		</v-row>

		<!-- All news documents -->
		<v-row id="news_content">
			<!-- News components -->
			<v-col id="news_content-article">
				<v-row class="pa-4" style="border: 2px solid red" :key="index" v-for="(item, index) in articles">
					<!-- IMGs -->
					<v-col class="d-flex" style="border: 2px solid yellow">
						<v-img cover :src="item.img.src">
							<div class="w-100 h-100 d-flex justify-center align-center">
								<v-btn variant="flat">{{ item.img.btnText }}</v-btn>
							</div>
						</v-img>
					</v-col>

					<!-- Article -->
					<v-col style="border: 2px solid yellow">
						<v-row class="text-left">
							<template :key="index" v-for="(article, index) in item.article">
								<v-col
									cols="12"
									:key="index"
									v-html="htmlBuilder(article.tag, article.text, article.colour, article.transform)"
									v-if="article.text"
								></v-col>
							</template>
						</v-row>
					</v-col>
				</v-row>
			</v-col>

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
						<!--<template :key="index" v-for="(options, index) in filterOptions.options">
							<v-col cols="12" v-html="filterOptionsHtmlBuilder(options)"></v-col>
						</template>-->

						<v-col id="news_filter_options-type" cols="12">
							<h5>Refine by Type</h5>
							<v-divider class="my-2" color="inverted"></v-divider>
							<v-list id="news_filter_options_type-list" :items="filterOptions.options[0].element.values"></v-list>
						</v-col>

						<v-col cols="12">
							<h5>Refine by Date</h5>
							<v-divider class="my-2" color="inverted"></v-divider>
							<v-date-picker class="w-100" color="inverted" header="Select a date"></v-date-picker>
						</v-col>
					</div>
				</v-row>
			</v-col>
		</v-row>
	</v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Stores
import { parentStore } from "@plugins/pinia/pinia";

// Components
import Dropdown from "@components/containers/dropdown/dropdown.vue";

// Interfaces
import {
	INewsArticlesState,
	INewsDropdownOptionsState,
	INewsFilterOptionsState,
	INewsAvailableFilterOptions,
} from "@interfaces/news/interface-news";

// Utils
import { buildHtmlElement } from "@utils/utils";

export default defineComponent({
	name: "news-component",
	components: {
		"dropdown-component": Dropdown,
	},
	props: {
		dropdownOptions: { type: Object as () => INewsDropdownOptionsState, required: true },
		articles: { type: Array<INewsArticlesState>, required: true },
		filterOptions: { type: Object as () => INewsFilterOptionsState, required: true },
	},
	methods: {
		htmlBuilder(tag: string, text?: string, colour?: string, transform?: string): string {
			const styles: string = `${colour ? colour : ""} ${transform ? transform : ""}`;
			return buildHtmlElement(tag, styles, text);
		},
		//title: { tag?: string; text: string }, element: { tag: string; text: string }
		filterOptionsHtmlBuilder(options: INewsAvailableFilterOptions): string {
			const titleTag: string = options.title.tag ? options.title.tag : "h5";
			const titleElement: string = `<${titleTag}>${options.title.text ? options.title.text : ""}</${titleTag}>`;
			const divider: string = `<v-divider class="my-2"></v-divider>`;
			const mainElement: string = `<${options.element.tag}></${options.element.tag}>`;
			return `${titleElement} ${divider} ${mainElement}`;
		},
	},
	setup() {
		const storeCommon = parentStore();
		return { storeCommon };
	},
});
</script>

<style lang="scss">
#news {
	.v-img {
		.v-btn {
			background-color: rgba(var(--v-theme-accent), 0.7);
			color: rgb(var(--v-theme-inverted));

			&:hover {
				background-color: rgb(var(--v-theme-accent));
			}
		}
	}

	#news_content-filter-options {
		.v-label {
			color: rgb(var(--v-theme-inverted));
		}

		.v-field--active {
			.v-field__append-inner {
				.v-icon {
					opacity: 1;
				}
			}
		}

		#news_filter_options-type {
			.v-list {
				background-color: transparent;

				.v-list-item {
					color: rgb(var(--v-theme-inverted));
					cursor: pointer;

					&:hover {
						background-color: rgb(var(--v-theme-inverted));
						color: rgb(var(--v-theme-default));
					}
				}
			}
		}
	}

	.v-date-picker {
		.v-btn {
			background-color: transparent;
			color: rgb(var(--v-theme-inverted));
		}
	}

	.v-sheet {
		background-color: transparent;
		border: transparent;
		color: rgb(var(--v-theme-inverted));

		.v-btn {
			&:hover {
				background-color: rgb(var(--v-theme-inverted)) !important;
				color: rgb(var(--v-theme-default)) !important;
			}
		}

		.v-picker-title {
			color: rgb(var(--v-theme-inverted));
		}

		.v-picker__body {
			.v-date-picker-month {
				.v-date-picker-month__days {
					.v-date-picker-month__day {
						.v-btn--variant-outlined {
							border: thin solid rgb(var(--v-theme-inverted));
						}
					}
				}
			}
		}
	}
}
</style>
