<template>
	<card-component card-class="w-50 pa-2" variant="outlined" max-height="h-50">
		<template #content>
			<v-container fluid class="d-flex flex-column" style="gap: 8px">
				<v-row dense>
					<h6 class="text-left text-h6 text-capitalize font-weight-bold">{{ subject }}</h6>
				</v-row>
				<v-row dense>
					<p class="text-left text-body-1 font-italic">"{{ message }}"</p>
				</v-row>
				<v-row dense>
					<p class="text-left text-body-2 font-weight-bold">{{ name }}</p>
				</v-row>
				<v-row dense>
					<v-col cols="6" class="d-flex align-center justify-center overflow-hidden">
						<rating-component readonly color="accent" density="compact" :model-value="rating"></rating-component>
					</v-col>
					<v-col cols="6" class="text-left d-flex align-center justify-center">
						<p class="text-body-1">
							{{ locationPrefix }}: <b>{{ location }}</b>
						</p>
					</v-col>
				</v-row>
			</v-container>
		</template>
	</card-component>
</template>

<script lang="ts">
/*
<v-card
		class="ma-0 bg-default"
		min-width="300"
		max-width="400"
		min-height="150"
		max-height="300"
	>
		<v-card-text class="pa-0 overflow-auto">
			<slot name="review">
				<p class="text-start">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan pulvinar magna at tincidunt. Ut
					efficitur aliquam tristique. Pellentesque eu leo non magna rutrum feugiat non nec lorem. Aenean sagittis eros
					et laoreet mollis. Etiam convallis erat libero, sit amet pharetra diam pellentesque bibendum. Nullam nisi
					neque, volutpat eu ante.
				</p>
			</slot>
		</v-card-text>
	</v-card>
*/
import { defineComponent } from "vue";

// Components
import Card from "@components/containers/card/card.vue";
import Rating from "@components/containers/rating/rating.vue";

export default defineComponent({
	name: "card-review-component",
	components: {
		"card-component": Card,
		"rating-component": Rating,
	},
	props: {
		name: { type: String, required: false, default: "Name" },
		subject: { type: String, required: true },
		message: { type: String, required: true },
		location: { type: String, required: false, default: "N/A" },
	},
	computed: {
		locationPrefix(): string {
			return this.$t("common.card.reviews.location");
		},
	},
	data() {
		return {
			rating: 3.5,
		};
	},
});
</script>
