<template>
	<card-component variant="outlined" card-class="bg-accent text-inverted w-50 pa-2" max-height="h-50">
		<template #content>
			<v-container fluid class="d-flex flex-column" style="gap: 8px">
				<v-row class="text-left">
					<v-col cols="12">
						<h4>{{ subject }}</h4>
					</v-col>
					<v-col cols="12">
						<p class="font-italic">"{{ message }}"</p>
					</v-col>
					<v-col cols="12">
						<h6>{{ name }}</h6>
					</v-col>
					<v-col cols="12">
						<v-row class="text-center">
							<v-col>
								<rating-component readonly color="accent" density="compact" :model-value="rating"></rating-component>
							</v-col>
							<v-col>
								<p>
									{{ locationPrefix }}: <b>{{ location }}</b>
								</p>
							</v-col>
						</v-row>
					</v-col>
				</v-row>
			</v-container>
		</template>
	</card-component>
</template>

<script lang="ts">
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
			return this.$t("$vuetify.card.reviews.location");
		},
	},
	data() {
		return {
			rating: 3.5,
		};
	},
});
</script>
