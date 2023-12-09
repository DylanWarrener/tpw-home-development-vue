<template></template>

<script lang="ts">
/* The HTML
<v-col cols="12">
		<h5 class="text-capitalize">{{ filter.title }}</h5>
		<v-divider class="my-4"></v-divider>
		<slot name="content"></slot>
	</v-col>
*/
import { defineComponent } from "vue";

// Intefaces
//import { INewsFilterRefineBy } from "@interfaces/news/filters/interface-news-filters";

export default defineComponent({
	name: "news-filter-options-component",
	props: {
		//filter: { type: Object as () => INewsFilterRefineBy, required: true },
	},
});
</script>
