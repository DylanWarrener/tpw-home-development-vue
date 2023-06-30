<template>
	<card-component variant="outlined" :title="defaultName" max-width="300px">
		<template #content>
			<rating-component readonly color="accent" :model-value="rating"></rating-component>
			<p class="text-start overflow-auto" style="min-height: 80px; max-height: 125px">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan pulvinar magna at tincidunt. Ut
				efficitur aliquam tristique. Pellentesque eu leo non magna rutrum feugiat non nec lorem. Aenean sagittis eros
				et laoreet mollis. Etiam convallis erat libero, sit amet pharetra diam pellentesque bibendum. Nullam nisi
				neque, volutpat eu ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan pulvinar
				magna at tincidunt. Ut efficitur aliquam tristique. Pellentesque eu leo non magna rutrum feugiat non nec
				lorem. Aenean sagittis eros et laoreet mollis. Etiam convallis erat libero, sit amet pharetra diam
				pellentesque bibendum. Nullam nisi neque, volutpat eu ante.
			</p>
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
import Card from "./card.vue";
import Rating from "../rating/rating.vue";

export default defineComponent({
	name: "card-review-component",
	components: {
		"card-component": Card,
		"rating-component": Rating,
	},
	props: {
		name: { type: String, required: false },
	},
	computed: {
		defaultName(): string {
			return this.name ? this.name : "Name";
		},
	},
	data() {
		return {
			rating: 3.5,
		};
	},
});
</script>
