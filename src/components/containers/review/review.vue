<template>
	<v-card
		class="ma-0 pa-2 bg-default d-flex flex-column"
		variant="outlined"
		min-width="300"
		max-width="400"
		min-height="150"
		max-height="300"
	>
		<div class="d-flex flex-column justify-center align-center">
			<slot name="name">
				<h3>{{ name ? name : "Name" }}</h3>
			</slot>
			<v-rating readonly half-increments class="justify-center" color="accent" :model-value="totalRating"></v-rating>
		</div>
		<v-card-text class="pa-0 overflow-auto">
			<slot name="review">
				<p class="text-start">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan pulvinar magna at tincidunt. Ut
					efficitur aliquam tristique. Pellentesque eu leo non magna rutrum feugiat non nec lorem. Aenean sagittis
					eros et laoreet mollis. Etiam convallis erat libero, sit amet pharetra diam pellentesque bibendum. Nullam
					nisi neque, volutpat eu ante.
				</p>
			</slot>
		</v-card-text>
	</v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "review-component",
	props: {
		name: { type: String, required: false },
		review: { type: String, required: false },
	},
	data() {
		return {
			totalRatings: 3000,
			totalRating: 3.5,
		};
	},
});
</script>
