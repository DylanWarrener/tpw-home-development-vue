<template>
	<section-component :title="title" :subtitle="subtitle">
		<template #content>
			<v-container fluid class="pt-16">
				<v-row dense no-gutters class="d-flex flex-column">
					<v-col>
						<!--<dropdown-component></dropdown-component>-->
					</v-col>
					<v-col>
						<!--<carousel-component></carousel-component>-->
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

export default defineComponent({
	name: "portfolio-component",
	components: {
		"section-component": Section,
	},
	computed: {
		title(): string {
			return this.$t("common.sections.portfolio.title");
		},
		subtitle(): string {
			return this.$t("common.sections.portfolio.subtitle");
		},
	},
});
</script>
