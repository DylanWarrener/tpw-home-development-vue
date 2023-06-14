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
import Page from "../components/containers/page/page-content.vue";

// Images
import BathroomPNG from "../assets/png/bathrooms/bathroom.jpg";

export default defineComponent({
	name: "bathroom-page-component",
	components: {
		"page-component": Page,
	},
	computed: {
		src(): string {
			return BathroomPNG;
		},
		title(): string {
			return this.$t("main.card.page.bathroom.title");
		},
		subtitle(): string {
			return this.$t("main.card.page.bathroom.subtitle");
		},
		btnText(): string {
			return this.$t("main.card.page.bathroom.btnText");
		},
	},
	setup() {
		const storeCommon = parentStore();
		const storeBathroom = childStores.useBathroomStore();
		return { storeCommon, storeBathroom };
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
