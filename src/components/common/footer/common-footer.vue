<template>
	<v-container fluid class="bg-inverted container">
		<!--<footer-section-interactive-component
			:first-col-data="firstColData"
			:second-col-data="secondColData"
			:third-col-data="thirdColData"
		></footer-section-interactive-component>
		<v-divider class="pb-4"></v-divider>
		<footer-section-bottom-component></footer-section-bottom-component>-->
	</v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Stores
import { useCommonStore } from "@plugins/pinia/pinia";
import useFooterStore from "@stores/footer/store-footer";
import useGlobalEventStore from "@stores/events/store-events";

// Interfaces
import { IFooterData } from "@declaration/common/interfaces/footer/interface-common-footer";
//import { IFooterData, IFooterFirstColData, IFooterSecondColData, IFooterThirdColData } from "@interfaces/footer/interface-footer";

export default defineComponent({
	name: "footer-component",
	computed: {
		/*firstColData(): IFooterFirstColData {
			return this.storeFooter.getFirstColData;
		},
		secondColData(): IFooterSecondColData {
			return this.storeFooter.getSecondColData;
		},
		thirdColData(): IFooterThirdColData {
			return this.storeFooter.getThirdColData;
		},*/
	},
	data(): IFooterData {
		return {};
	},
	setup() {
		const storeCommon = useCommonStore();
		const storeFooter = useFooterStore();
		const storeEvent = useGlobalEventStore();
		return { storeCommon, storeFooter, storeEvent };
	},
});
</script>
@src/interfaces/common/footer/interfaces-footer @src/interfaces/common/footer/interfaces-common-footer @src/stores/events/store-events
