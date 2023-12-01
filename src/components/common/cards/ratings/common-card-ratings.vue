<template>
	<card-component
		variant="outlined"
		card-class="bg-accent text-inverted pa-2"
		action-class="justify-center"
		:btn-text="btnText"
		:action-btn-id="actionBtnId"
	>
		<template #content>
			<v-container>
				<v-row>
					<v-col cols="12">
						<h2>
							{{ rating }}
							<span class="text-h6 ml-n3">{{ maxRating }}</span>
						</h2>
					</v-col>
					<v-col cols="12">
						<rating-component readonly color="accent" :model-value="rating"></rating-component>
					</v-col>
					<v-col cols="12">
						<p>{{ totalRatings + ": " + ratings }}</p>
					</v-col>
				</v-row>
			</v-container>
		</template>
	</card-component>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import Card from "@components/common/cards/common-cards.vue";
import Rating from "@components/common/ratings/common-ratings.vue";
import Progress from "@components/common/progress/common-progress.vue";

export default defineComponent({
	name: "card-rating-component",
	components: {
		"card-component": Card,
		"rating-component": Rating,
		"progress-linear-component": Progress,
	},
	props: {
		actionBtnId: { type: String, required: true },
	},
	computed: {
		btnText(): string {
			return this.$t("card.rating.btnText");
		},
		maxRating(): string {
			return this.$t("card.rating.max");
		},
		totalRatings(): string {
			return this.$t("card.rating.total");
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
