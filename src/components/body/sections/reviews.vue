<template>
	<section-component :title="title" :subtitle="subtitle">
		<template #content>
			<v-container fluid>
				<v-row class="pa-4">
					<v-col cols="4" class="border pa-0 d-flex flex-column align-center justify-center" style="gap: 16px">
						<card-rating-component></card-rating-component>
						<v-btn variant="outlined">{{ btnText }}</v-btn>
					</v-col>
					<v-col cols="8" class="border pa-4">
						<carousel-component class="border" height="400px">
							<template #content>
								<v-carousel-item cover :src="review.src" :key="review.id" v-for="review in reviews">
									<div class="h-100 d-flex align-center justify-center">
										<card-review-component
											:subject="review.subject"
											:message="review.message"
											:name="review.name"
										></card-review-component>
									</div>
								</v-carousel-item>
							</template>
						</carousel-component>
					</v-col>
				</v-row>
			</v-container>
		</template>
	</section-component>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import Section from "@components/containers/section/section.vue";
import Carousel from "@components/containers/carousel/carousel.vue";
import CardReview from "@components/containers/card/card-review.vue";
import CardRating from "@components/containers/card/card-rating.vue";

// Images
import AscotLightGreyDustPNG from "@assets/png/kitchens/ascot-light-gret-dust.jpg";

export default defineComponent({
	name: "reviews-component",
	components: {
		"section-component": Section,
		"carousel-component": Carousel,
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
		btnText(): string {
			return this.$t("common.section.reviews.btnText");
		},
	},
	data() {
		return {
			reviews: [
				{
					id: 0,
					name: "Mr. Dylan Warrener",
					src: AscotLightGreyDustPNG,
					subject: "Beautiful",
					message: "My Kitchen is now looking very clean. The team have done a great job for me, I would highly recommend",
				},
				{
					id: 1,
					name: "Mr. George Ruff",
					src: AscotLightGreyDustPNG,
					subject: "Awesome",
					message: "My house feels so much bigger now, I can finally relax, knowing how well I have done.",
				},
			],
		};
	},
});
</script>
