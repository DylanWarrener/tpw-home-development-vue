<template>
	<section-component class="bg-section-primary" :title="title" :subtitle="subtitle">
		<template #content>
			Content
		</template>
	</section-component>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import Section from "../../containers/section/section.vue";

export default defineComponent({
	name: "latest-news-component",
	components: {
		"section-component": Section,
	},
	computed: {
		title(): string {
			return this.$t("common.section.latestNews.title");
		},
		subtitle(): string {
			return this.$t("common.section.latestNews.subtitle");
		},
	},
});
</script>
