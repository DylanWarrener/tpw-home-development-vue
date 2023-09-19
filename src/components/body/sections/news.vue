<template>
	<section-component class="bg-white" :title="title" :subtitle="subtitle">
		<template #content> Content </template>
	</section-component>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import Section from "@components/containers/section/section.vue";

export default defineComponent({
	name: "news-component",
	components: {
		"section-component": Section,
	},
	computed: {
		title(): string {
			return this.$t("$vuetify.sections.news.title");
		},
		subtitle(): string {
			return this.$t("$vuetify.sections.news.subtitle");
		},
	},
});
</script>
