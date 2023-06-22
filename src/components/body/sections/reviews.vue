<template>
	<section-component class="bg-section-primary" :title="title" :subtitle="subtitle">
		<template #content>
			<v-row dense>
				<v-col cols="6">
					<v-row dense class="d-flex flex-column">
						<v-col cols="12">THEY LOVE IT</v-col>
						<v-col cols="12">
							<v-sheet border="md" class="pa-6 text-white mx-auto" color="#141518" max-width="400">
								<h2 class="text-h5 mb-6">You reconciled this account</h2>
							</v-sheet>
						</v-col>
					</v-row>
				</v-col>
				<v-col cols="6"> Content </v-col>
			</v-row>
		</template>
	</section-component>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import Section from "../../containers/section/section.vue";

export default defineComponent({
	name: "reviews-component",
	components: {
		"section-component": Section,
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
