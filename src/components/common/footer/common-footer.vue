<template>
	<v-container fluid class="bg-inverted container">
		<!-- Back to top icon -->
		<div id="back-to-top-container">
			<v-tooltip location="top" v-model="footerData.icons.backToTop.showTooltip">
				<template #activator="{ props }">
					<v-btn icon v-bind="props" @click.stop="scrollToElement()">
						<v-icon>{{ footerData.icons.backToTop.icon }}</v-icon>
					</v-btn>
				</template>
				<span>{{ footerData.icons.backToTop.tooltip }}</span>
			</v-tooltip>
		</div>

		<!-- Footer top -->
		<footer-section-top-component :data="footerData.top"></footer-section-top-component>

		<!-- Footer middle -->
		<footer-section-middle-component :data="footerData.middle"></footer-section-middle-component>

		<!-- Footer bottom -->
		<footer-section-bottom-component :data="footerData.bottom"></footer-section-bottom-component>
	</v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Stores
import { useCommonStore } from "@plugins/pinia/pinia";
import useHeaderStore from "@stores/header/store-header";
import useFooterStore from "@stores/footer/store-footer";
import useGlobalEventStore from "@stores/events/store-events";

// Components
import FooterTop from "@components/common/footer/section/top/common-footer-section-top.vue";
import FooterMiddle from "@components/common/footer/section/middle/common-footer-section-middle.vue";
import FooterBottom from "@components/common/footer/section/bottom/common-footer-section-bottom.vue";

// Interfaces
import { IFooterData, IFooterStateData } from "@declaration/common/interfaces/footer/interface-common-footer";

// Utils
import { scrollToElement } from "@constants/common/functions/constants-common-utils-functions";

// Enums
import { Page } from "@enums/common/enums-common";

export default defineComponent({
	name: "footer-component",
	components: {
		"footer-section-top-component": FooterTop,
		"footer-section-middle-component": FooterMiddle,
		"footer-section-bottom-component": FooterBottom,
	},
	data(): IFooterData {
		return {};
	},
	computed: {
		// Data
		footerData(): IFooterStateData {
			return this.storeFooter.getFooterData;
		},
		appBarHeight(): number {
			return this.storeHeader.getAppBarHeight;
		},
	},
	methods: {
		// Utils
		scrollToElement(): void {
			const targetElement: HTMLDivElement = document.getElementById(Page.ID) as HTMLDivElement;
			scrollToElement(targetElement.offsetTop - this.appBarHeight);
		},
	},
	setup() {
		const storeCommon = useCommonStore();
		const storeHeader = useHeaderStore();
		const storeFooter = useFooterStore();
		const storeEvent = useGlobalEventStore();
		return { storeCommon, storeHeader, storeFooter, storeEvent };
	},
	created(): void {
		this.storeFooter.setFooterData();
	},
});
</script>

<style lang="scss">
#back-to-top-container {
	position: fixed;
	bottom: 1%;
	left: 5%;
	transform: translateX(-50%);

	.v-btn {
		background-color: rgb(var(--v-theme-accent));
		color: rgb(var(--v-theme-inverted));

		&:hover {
			.v-icon {
				animation-name: move-up-from-center;
				animation-duration: 1s;
				animation-iteration-count: infinite;
			}
		}
	}
}
</style>
