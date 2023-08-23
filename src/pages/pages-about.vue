<template>
	<page-component :src="src" :title="title" :subtitle="subtitle" :btn-text="btnText"></page-component>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Stores
import { parentStore, childStores } from "@plugins/pinia/pinia";

// Components
import Page from "@components/containers/page/page.vue";

// Images
import AboutPNG from "@assets/png/about/about.jpg";

export default defineComponent({
	name: "about-page-component",
	components: {
		"page-component": Page,
	},
	computed: {
		src(): string {
			return AboutPNG;
		},
		title(): string {
			return this.$t("main.card.pages.about.title");
		},
		subtitle(): string {
			return this.$t("main.card.pages.about.subtitle");
		},
		btnText(): string {
			return this.$t("main.card.pages.about.btnText");
		},
	},
	setup() {
		const storeCommon = parentStore();
		const storeAbout = childStores.useAboutStore();
		return { storeCommon, storeAbout };
	},
	created(): void {
		this.storeCommon.setIsCanvasComponentActive(true);
		this.storeCommon.setIsBeInspiredComponentActive(false);
		this.storeCommon.setIsPortfolioComponentActive(false);
		this.storeCommon.setIsReviewComponentActive(false);
		this.storeCommon.setIsProcessOfEliminationActive(false);
		this.storeCommon.setIsLatestNewsComponentActive(false);
	},
});
</script>
