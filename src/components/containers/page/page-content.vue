<template>
	<v-sheet class="w-100 h-100 border">
		<canvas-component :src="src"></canvas-component>
		<be-inspired-component></be-inspired-component>
		<portfolio-component></portfolio-component>
		<reviews-component></reviews-component>
		<process-of-elimination-component></process-of-elimination-component>
		<latest-news-component></latest-news-component>
	</v-sheet>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import Canvas from "../canvas/canvas.vue";
import BeInspired from "../../body/sections/be-inspired.vue";
import Portfolio from "../../body/sections/portfolio.vue";
import Reviews from "../../body/sections/reviews.vue";
import ProcessOfElimination from "../../body/sections/process-of-elimination.vue";
import LatestNews from "../../body/sections/latest-news.vue";

export default defineComponent({
	name: "page-content-component",
	props: {
		src: { type: String, required: true },
	},
	components: {
		"canvas-component": Canvas,
		"be-inspired-component": BeInspired,
		"portfolio-component": Portfolio,
		"reviews-component": Reviews,
		"process-of-elimination-component": ProcessOfElimination,
		"latest-news-component": LatestNews,
	},
});
</script>
