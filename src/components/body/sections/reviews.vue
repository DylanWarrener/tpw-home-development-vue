<template>
	<section-component class="bg-section-primary overflow-hidden" :title="title" :subtitle="subtitle">
		<template #content>
			<div class="d-flex flex-1-1 justify-center align-center">
				<card-rating-component></card-rating-component>
			</div>
			<div
				class="pa-4 d-flex flex-row flex-wrap flex-1-1 justify-space-evenly overflow-auto"
				style="gap: 16px; max-height: 80vh"
			>
				<card-review-component></card-review-component>
				<card-review-component></card-review-component>
				<card-review-component></card-review-component>
				<card-review-component></card-review-component>
				<card-review-component></card-review-component>
				<card-review-component></card-review-component>
				<card-review-component></card-review-component>
				<card-review-component></card-review-component>
				<card-review-component></card-review-component>
				<card-review-component></card-review-component>
			</div>
		</template>
	</section-component>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import Section from "../../containers/section/section.vue";
import CardReview from "../../containers/card/card-review.vue";
import CardRating from "../../containers/card/card-rating.vue";

export default defineComponent({
	name: "reviews-component",
	components: {
		"section-component": Section,
		"card-review-component": CardReview,
		"card-rating-component": CardRating,
	},
	computed: {
		title(): string {
			return this.$t("common.section.reviews.title");
		},
		subtitle(): string {
			return this.$t("common.section.reviews.subtitle");
		},
	},
});
</script>
