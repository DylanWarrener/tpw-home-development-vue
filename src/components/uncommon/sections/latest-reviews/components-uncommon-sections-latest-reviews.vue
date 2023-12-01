<template>
	<section-component :title="title" :subtitle="subtitle">
		<template #content>
			<v-container fluid>
				<v-row style="gap: 16px">
					<!-- Review rating overview -->
					<v-col class="pa-0 d-flex flex-column align-center justify-center" style="gap: 16px; max-width: 25%">
						<!--<card-rating-component :action-btn-id="allReviewsBtnID"></card-rating-component>-->
					</v-col>

					<!-- Reviews in carousel -->
					<v-col class="border pa-0">
						<!--<carousel-component>
							<template #content>
								<v-carousel-item
									cover
									:key="index"
									:src="review.image.src"
									:alt="review.image.alt"
									v-for="(review, index) in reviews"
								>
									<div class="h-100 d-flex align-center justify-center">
										<card-review-component
											:subject="review.subject"
											:message="review.message"
											:name="review.name"
										></card-review-component>
									</div>
								</v-carousel-item>
							</template>
						</carousel-component>-->
					</v-col>
				</v-row>
			</v-container>
		</template>
	</section-component>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import Section from "@components/common/sections/common-sections.vue";
//import Carousel from "@components/containers/carousel/carousel.vue";
//import CardReview from "@components/containers/card/card-review.vue";
//import CardRating from "@components/containers/card/card-rating.vue";

// Stores
import { useCommonStore } from "@plugins/pinia/pinia";
import useReviewsStore from "@stores/pages/stores-pages-reveiws";

// IMGs
import AscotLightGreyDustPNG from "@assets/png/kitchens/ascot-light-gret-dust.jpg";

// Enums
import { BtnIDs } from "@enums/IDs/enums-ids-btn";

export default defineComponent({
	name: "reviews-component",
	components: {
		"section-component": Section,
		//"carousel-component": Carousel,
		//"card-review-component": CardReview,
		//"card-rating-component": CardRating,
	},
	data() {
		return {
			reviews: [
				{
					name: "Mr. Dylan Warrener",
					image: {
						src: AscotLightGreyDustPNG,
						alt: "",
					},
					subject: "Beautiful",
					message: "My Kitchen is now looking very clean. The team have done a great job for me, I would highly recommend",
				},
				{
					name: "Mr. George Ruff",
					image: {
						src: AscotLightGreyDustPNG,
						alt: "",
					},
					subject: "Awesome",
					message: "My house feels so much bigger now, I can finally relax, knowing how well I have done.",
				},
			],
		};
	},
	computed: {
		// IDs
		allReviewsBtnID(): string {
			return BtnIDs.ALL_REVIEWS_BTN_ID;
		},

		// Text
		title(): string {
			return this.$t("common.sections.latestReviews.title");
		},
		subtitle(): string {
			return this.$t("common.sections.latestReviews.subtitle");
		},
	},
	setup() {
		const storeCommon = useCommonStore();
		const storeReviews = useReviewsStore();
		return { storeCommon, storeReviews };
	},
});
</script>
