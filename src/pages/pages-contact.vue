<template>
	<page-component :src="src" :title="title" :subtitle="subtitle" :btn-text="btnText">
		<template #content>
			<section-component class="bg-section-primary" :title="title" :subtitle="subtitle"></section-component>
		</template>
	</page-component>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Stores
import { parentStore, childStores } from "@plugins/pinia/pinia";

// Components
import Page from "@components/containers/page/page.vue";
import Section from "@components/containers/section/section.vue";

// Images
import ContactPNG from "@assets/png/contact/contact.jpg";

export default defineComponent({
	name: "contact-page-component",
	components: {
		"page-component": Page,
		"section-component": Section
	},
	computed: {
		src(): string {
			return ContactPNG;
		},
		title(): string {
			return this.$t("main.card.pages.contact.title");
		},
		subtitle(): string {
			return this.$t("main.card.pages.contact.subtitle");
		},
		btnText(): string {
			return this.$t("main.card.pages.contact.btnText");
		},
	},
	setup() {
		const storeCommon = parentStore();
		const storeContact = childStores.useContactStore();
		return { storeCommon, storeContact };
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
