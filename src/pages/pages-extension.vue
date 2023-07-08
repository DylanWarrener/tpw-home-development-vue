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
import ExtensionPNG from "../assets/png/extensions/extension.jpg";

export default defineComponent({
	name: "extension-page-component",
	components: {
		"page-component": Page,
	},
	computed: {
		src(): string {
			return ExtensionPNG;
		},
		title(): string {
			return this.$t("main.card.pages.extension.title");
		},
		subtitle(): string {
			return this.$t("main.card.pages.extension.subtitle");
		},
		btnText(): string {
			return this.$t("main.card.pages.extension.btnText");
		},
	},
	setup() {
		const storeCommon = parentStore();
		const storeExtension = childStores.useExtensionStore();
		return { storeCommon, storeExtension };
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
