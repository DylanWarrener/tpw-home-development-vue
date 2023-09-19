<template>
	<card-component variant="flat">
		<template #title>
			<h3 class="text-center">{{ title }}</h3>
		</template>
		<template #content>
			<div class="d-flex flex-column justify-center align-center">
				<div class="text-h2">
					{{ rating }}
					<span class="text-h6 ml-n3">{{ maxRating }}</span>
				</div>
				<rating-component readonly color="accent" :model-value="rating"></rating-component>
				<p>{{ totalRatings + ": " + ratings }}</p>
			</div>
		</template>
	</card-component>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import Card from "@components/containers/card/card.vue";
import Rating from "@components/containers/rating/rating.vue";
import Progress from "@components/containers/progress/progress.vue";

export default defineComponent({
	name: "card-rating-component",
	components: {
		"card-component": Card,
		"rating-component": Rating,
		"progress-linear-component": Progress,
	},
	computed: {
		title(): string {
			return this.$t("$vuetify.card.rating.title");
		},
		btnText(): string {
			return this.$t("$vuetify.card.rating.btnText");
		},
		maxRating(): string {
			return this.$t("$vuetify.card.rating.max");
		},
		totalRatings(): string {
			return this.$t("$vuetify.card.rating.total");
		},
	},
	data() {
		return {
			ratings: 3000,
			rating: 3.5,
		};
	},
});
</script>
