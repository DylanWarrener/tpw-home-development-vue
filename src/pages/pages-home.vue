<template>
	<page-component :src="src" :title="title" :subtitle="subtitle" :btn-text="btnText"></page-component>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Stores
import { parentStore, childStores } from "../plugins/pinia/pinia";

// Components
import Page from "../components/containers/page/page.vue";

// Images
import HomePNG from "../assets/png/home/home.jpg";

export default defineComponent({
	name: "home-page-component",
	components: {
		"page-component": Page,
	},
	computed: {
		src(): string {
			return HomePNG;
		},
		title(): string {
			return this.$t("main.card.pages.home.title");
		},
		subtitle(): string {
			return this.$t("main.card.pages.home.subtitle");
		},
		btnText(): string {
			return this.$t("main.card.pages.home.btnText");
		},
	},
	setup() {
		const storeCommon = parentStore();
		const storeHome = childStores.useHomeStore();
		return { storeCommon, storeHome };
	},
	created(): void {
		this.storeCommon.setIsCanvasComponentActive(true);
		this.storeCommon.setIsBeInspiredComponentActive(true);
		this.storeCommon.setIsPortfolioComponentActive(true);
		this.storeCommon.setIsReviewComponentActive(true);
		this.storeCommon.setIsProcessOfEliminationActive(true);
		this.storeCommon.setIsLatestNewsComponentActive(true);
	},
});
</script>
