<template>
	<v-container fluid class="pa-0">
		<v-row class="ma-0 pa-0">
			<v-col cols="12" class="d-flex pa-0">
				<page-component :src="src" :title="title" :subtitle="subtitle" :btn-text="btnText"></page-component>
			</v-col>
		</v-row>
	</v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Stores
import parentStore, { childStores } from "../store";

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
			return this.$t("main.card.page.home.title");
		},
		subtitle(): string {
			return this.$t("main.card.page.home.subtitle");
		},
		btnText(): string {
			return this.$t("main.card.page.home.btnText");
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
