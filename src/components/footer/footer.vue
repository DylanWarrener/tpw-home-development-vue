<template>
	<v-container fluid class="bg-inverted container">
		<!--<footer-section-top-component></footer-section-top-component>-->
		<!--<v-divider class="my-4"></v-divider>-->
		<footer-section-interactive-component
			:first-col-data="firstColData"
			:second-col-data="secondColData"
			:third-col-data="thirdColData"
		></footer-section-interactive-component>
		<v-divider class="pb-4"></v-divider>
		<footer-section-bottom-component></footer-section-bottom-component>
	</v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Stores
import { parentStore, childStores, eventStores } from "@plugins/pinia/pinia";

// Components
import FooterSectionTop from "@components/footer/section/top/footer-section-top.vue";
import FooterSectionInteractive from "@components/footer/section/interactive/footer-section-interactive.vue";
import FooterSectionBottom from "@components/footer/section/bottom/footer-section-bottom.vue";

// Interfaces
import { IFooterData, IFooterFirstColData, IFooterSecondColData, IFooterThirdColData } from "@interfaces/footer/interface-footer";

export default defineComponent({
	name: "footer-component",
	components: {
		"footer-section-top-component": FooterSectionTop,
		"footer-section-interactive-component": FooterSectionInteractive,
		"footer-section-bottom-component": FooterSectionBottom,
	},
	computed: {
		firstColData(): IFooterFirstColData {
			return this.storeFooter.getFirstColData;
		},
		secondColData(): IFooterSecondColData {
			return this.storeFooter.getSecondColData;
		},
		thirdColData(): IFooterThirdColData {
			return this.storeFooter.getThirdColData;
		},
	},
	data(): IFooterData {
		return {};
	},
	setup() {
		const storeCommon = parentStore();
		const storeFooter = childStores.useFooterStore();
		const storeEvent = eventStores.useGlobalEventStore();
		return { storeCommon, storeFooter, storeEvent };
	},
});
</script>
