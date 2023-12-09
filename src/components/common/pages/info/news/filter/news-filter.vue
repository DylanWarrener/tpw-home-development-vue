<template></template>

<script lang="ts">
/* The HTML
<v-col id="news_filter" style="border: 2px solid orange; max-width: 40%">
		<v-row class="pa-4">
			<div class="w-100 h-100" style="background-color: rgb(var(--v-theme-accent)); color: rgb(var(--v-theme-inverted))">
				<v-col cols="12">
					<h4>{{ filter.title }}</h4>
				</v-col>
				<v-divider></v-divider>

				<!-- Search text box-->
				<v-col cols="12" class="d-flex justify-center align-center">
					<v-text-field variant="outlined" append-inner-icon="mdi-magnify" :label="filter.search.label"></v-text-field>
				</v-col>

				<!-- Refine by Type -->
				<news-filter-options-component :filter="filter.filters.type">
					<template #content>
						<dropdown-component :label="filter.filters.type.label" :items="filter.filters.type.values" @value="filter.filters.type.currentValue"></dropdown-component>
					</template>
				</news-filter-options-component>

				<!-- Refine by Date -->
				<news-filter-options-component :filter="filter.filters.date">
					<template #content>
						<!--<v-date-picker class="w-100" color="inverted" :header="filter.filters.date.header"></v-date-picker>-->
					</template>
				</news-filter-options-component>
			</div>
		</v-row>
	</v-col>
*/
import { defineComponent } from "vue";

// Components
//import NewsFilterOptions from "@components/containers/news/news-filter-options.vue";
//import Dropdown from "@components/containers/dropdown/dropdown.vue";

// Interfaces
//import INewsFilterState from "@interfaces/news/filters/interface-news-filters";

// Enums
import { FilterRefineBy } from "@enums/common/enums";

export default defineComponent({
	name: "news-filter-component",
	components: {
		//"news-filter-options-component": NewsFilterOptions,
		//"dropdown-component": Dropdown,
	},
	props: {
		//filter: { type: Object as () => INewsFilterState, required: true },
	},
	methods: {
		// Utils
		IsFilterRefinedByType(title: string): boolean {
			return title === FilterRefineBy.TYPE;
		},
		IsFilterRefinedByDate(title: string): boolean {
			return title === FilterRefineBy.DATE;
		},
	},
});
</script>

<style lang="scss">
#news_filter {
	.v-label {
		color: rgb(var(--v-theme-inverted));
	}

	.v-field__field {
		.v-select__selection {
			color: rgb(var(--v-theme-inverted));
		}
	}

	.v-field--active {
		.v-field__append-inner {
			.v-icon {
				opacity: 1;
			}
		}
	}

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

	.v-sheet {
		background-color: transparent;
		border: transparent;
		color: rgb(var(--v-theme-inverted));

		.v-btn {
			background-color: transparent;
			color: rgb(var(--v-theme-inverted));
		}

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
@src/enums/common/enums
