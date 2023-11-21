<template></template>

<script lang="ts">
/*
<v-row id="news_sort_dropdown" class="pa-4" style="border: 2px solid green">
	<!-- Active filters -->
	<v-col class="d-flex flex-wrap justify-start align-center" style="border: 2px solid blue; gap: 16px" v-if="activeFilters">
		<div class="d-flex justify-center align-center" :key="index" v-for="(item, index) in activeFilters">
			<v-tooltip location="bottom" v-model="item.show">
				<template #activator="{ props }">
					<v-btn density="compact" icon="mdi-filter-remove" :key="index" v-bind="props" @click="removefilter"></v-btn>
				</template>
				<span>{{ item.tooltip }}</span>
			</v-tooltip>
			<i class="text-left" style="border: 2px solid blue">{{ item.refineBy }}: {{ item.value }}</i>
		</div>
		<v-divider vertical></v-divider>
		<div class="d-flex justify-center align-center" style="border: 2px solid orange">
			<v-btn density="compact" style="border: 2px solid blue" icon="mdi-filter-remove"></v-btn>
			<i class="text-left" style="border: 2px solid blue">Date:</i>
		</div>
	</v-col>
</v-row>
*/
import { defineComponent } from "vue";

//import INewsActiveFiltersState from "@interfaces/news/active-filters/interface-news-active-filters";

export default defineComponent({
	name: "news-active-filters-component",
	props: {
		//activeFilters: { type: Array<INewsActiveFiltersState>, required: false },
	},
});
</script>
