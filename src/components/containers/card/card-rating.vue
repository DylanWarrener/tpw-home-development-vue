<template>
	<card-component variant="outlined" max-width="300px" min-height="450px" max-height="500px" :btn-text="btnText">
		<template #title>
			<h3 class="text-center text-uppercase">{{ title }}</h3>
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

			<v-list class="pa-0 d-flex flex-column-reverse" bg-color="transparent" density="compact">
				<v-list-item v-for="(rating, i) in 5" :key="i">
					<template #prepend>
						<div class="d-flex justify-center align-center">
							<span>{{ rating }}</span>
							<v-icon icon="mdi-star" class="mx-3"></v-icon>
						</div>
					</template>
					<progress-linear-component model-value="20" height="20"></progress-linear-component>
					<template #append>
						<div class="rating-values">
							<span class="pa-2 d-flex justify-end"> {{ ratings / 5 }} </span>
						</div>
					</template>
				</v-list-item>
			</v-list>
		</template>
	</card-component>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import Card from "./card.vue";
import Rating from "../rating/rating.vue";
import Progress from "../progress/progress.vue";

export default defineComponent({
	name: "card-rating-component",
	components: {
		"card-component": Card,
		"rating-component": Rating,
		"progress-linear-component": Progress,
	},
	computed: {
		title(): string {
			return this.$t("common.card.rating.title");
		},
		btnText(): string {
			return this.$t("common.card.rating.btnText");
		},
		maxRating(): string {
			return this.$t("common.card.rating.max");
		},
		totalRatings(): string {
			return this.$t("common.card.rating.total");
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
