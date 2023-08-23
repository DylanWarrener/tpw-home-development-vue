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
import KitchenPNG from "@assets/png/kitchens/kitchen.jpg";

export default defineComponent({
	name: "kitchen-page-component",
	components: {
		"page-component": Page,
	},
	computed: {
		src(): string {
			return KitchenPNG;
		},
		title(): string {
			return this.$t("main.card.pages.kitchen.title");
		},
		subtitle(): string {
			return this.$t("main.card.pages.kitchen.subtitle");
		},
		btnText(): string {
			return this.$t("main.card.pages.kitchen.btnText");
		},
	},
	setup() {
		const storeCommon = parentStore();
		const storeKitchen = childStores.useKitchenStore();
		return { storeCommon, storeKitchen };
	},
	created(): void {
		this.storeCommon.setIsCanvasComponentActive(true);
		this.storeCommon.setIsBeInspiredComponentActive(true);
		this.storeCommon.setIsPortfolioComponentActive(true);
		this.storeCommon.setIsReviewComponentActive(false);
		this.storeCommon.setIsProcessOfEliminationActive(false);
		this.storeCommon.setIsLatestNewsComponentActive(false);
	},
});
</script>
