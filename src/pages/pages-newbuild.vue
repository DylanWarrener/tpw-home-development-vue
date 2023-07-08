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
import NewbuildPNG from "../assets/png/newbuilds/newbuild.jpg";

export default defineComponent({
	name: "newbuild-page-component",
	components: {
		"page-component": Page,
	},
	computed: {
		src(): string {
			return NewbuildPNG;
		},
		title(): string {
			return this.$t("main.card.pages.newbuild.title");
		},
		subtitle(): string {
			return this.$t("main.card.pages.newbuild.subtitle");
		},
		btnText(): string {
			return this.$t("main.card.pages.newbuild.btnText");
		},
	},
	setup() {
		const storeCommon = parentStore();
		const storeNewbuild = childStores.useNewbuildStore();
		return { storeCommon, storeNewbuild };
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
