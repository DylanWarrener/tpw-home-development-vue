<template>
	<section-component :title="title" :subtitle="subtitle">
		<template #content>
			<v-container fluid>
				<v-row dense>
					<v-col cols="4">
						<dropdown-component :items="items" :label="lblDropdown" @value="dropdownValue"></dropdown-component>
					</v-col>
				</v-row>
				<v-row dense style="height: 450px">
					<v-col cols="12" class="h-100">
						<carousel-component class="h-100" :images="carouselImages"></carousel-component>
					</v-col>
				</v-row>
				<v-row dense>
					<v-col cols="12">
						<section-component :subtitle="styleSubtitle">
							<template #title>
								<h2>{{ styleTitle }}</h2>
							</template>
							<template #content>
								Style cards go here
								<!--<card-style-component></card-style-component>-->
							</template>
						</section-component>
					</v-col>
				</v-row>
				<v-row dense>
					<v-col cols="12">
						<section-component :subtitle="themeSubtitle">
							<template #title>
								<h2>{{ themeTitle }}</h2>
							</template>
							<template #content>
								Theme cards go here
								<!--<card-theme-component></card-theme-component>-->
							</template>
						</section-component>
					</v-col>
				</v-row>
			</v-container>
		</template>
	</section-component>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Store
import { parentStore } from "@plugins/pinia/pinia";

// Interface
import { ICommonBeInspiredData } from "@interfaces/common/page/beInspired/interface-common-be-inspired";
import { ICommonCarouselImagesData } from "@interfaces/common/carousel/interface-common-carousel";

// Data
import { carouselDropdownItems } from "@utils/text/utils-text";

// Kitchen images
import AscotLightGreyDustPNG from "@assets/png/kitchens/ascot-light-gret-dust.jpg";
import CambridgeFirGreenPNG from "@assets/png/kitchens/cambridge-fir-green.jpg";
import CartmelMusselPNG from "@assets/png/kitchens/cartmel-mussel.jpg";
import GranthamChalkstoneFirGreenPNG from "@assets/png/kitchens/grantham-chalkstone-fir-green.jpg";
import LinearWhiteHalifaxOakPNG from "@assets/png/kitchens/linear-white-halifax-oak.jpg";
import LucenteGlossCreamPNG from "@assets/png/kitchens/lucente-gloss-cream.jpg";
import NewmarketIndigoBluePNG from "@assets/png/kitchens/newmarket-indigo-blue.jpg";
import OxfordWhitePNG from "@assets/png/kitchens/oxford-white.jpg";
import StrattoDustGreyPNG from "@assets/png/kitchens/stratto-dust-grey.jpg";
import VivoPtoOnyxGreyPNG from "@assets/png/kitchens/vivo-pto-onyx-grey.jpg";

// Components
import Section from "@components/containers/section/section.vue";
import Carousel from "@components/containers/carousel/carousel.vue";
import Dropdown from "@components/containers/dropdown/dropdown.vue";
import CardStyle from "@components/containers/card/card-styles.vue";
import CardTheme from "@components/containers/card/card-themes.vue";

export default defineComponent({
	name: "be-inspired-component",
	components: {
		"section-component": Section,
		"carousel-component": Carousel,
		"dropdown-component": Dropdown,
		"card-style-component": CardStyle,
		"card-theme-component": CardTheme,
	},
	computed: {
		// Text
		title(): string {
			return this.$t("common.section.beInspired.title");
		},
		styleTitle(): string {
			return this.$t("common.section.beInspired.style.title");
		},
		themeTitle(): string {
			return this.$t("common.section.beInspired.theme.title");
		},
		subtitle(): string {
			return this.$t("common.section.beInspired.subtitle");
		},
		styleSubtitle(): string {
			return this.$t("common.section.beInspired.style.subtitle");
		},
		themeSubtitle(): string {
			return this.$t("common.section.beInspired.theme.subtitle");
		},
		lblDropdown(): string {
			return this.$t("common.dropdown.carousel.label");
		},

		// Images
		carouselImages(): ICommonCarouselImagesData[] {
			return this.images;
		},
	},
	methods: {
		dropdownValue(newValue: string): void {
			switch (newValue) {
				case this.$t("common.dropdown.carousel.items.kitchen"):
					this.images = [
						{
							id: 0,
							src: AscotLightGreyDustPNG,
						},
						{
							id: 1,
							src: CambridgeFirGreenPNG,
						},
						{
							id: 2,
							src: CartmelMusselPNG,
						},
						{
							id: 3,
							src: GranthamChalkstoneFirGreenPNG,
						},
						{
							id: 4,
							src: LinearWhiteHalifaxOakPNG,
						},
						{
							id: 5,
							src: LucenteGlossCreamPNG,
						},
						{
							id: 6,
							src: NewmarketIndigoBluePNG,
						},
						{
							id: 7,
							src: OxfordWhitePNG,
						},
						{
							id: 8,
							src: StrattoDustGreyPNG,
						},
						{
							id: 9,
							src: VivoPtoOnyxGreyPNG,
						},
					];
					break;
				case this.$t("common.dropdown.carousel.items.bathroom"):
					this.images = [
						{
							id: 0,
							src: AscotLightGreyDustPNG,
						},
					];
					break;
				case this.$t("common.dropdown.carousel.items.newbuild"):
					this.images = [
						{
							id: 0,
							src: AscotLightGreyDustPNG,
						},
					];
					break;
				case this.$t("common.dropdown.carousel.items.extension"):
					this.images = [
						{
							id: 0,
							src: AscotLightGreyDustPNG,
						},
					];
					break;
				case this.$t("common.dropdown.carousel.items.refurbishment"):
					this.images = [
						{
							id: 0,
							src: AscotLightGreyDustPNG,
						},
					];
					break;
			}
		},
	},
	setup() {
		const storeCommon = parentStore();
		return { storeCommon };
	},
	data(): ICommonBeInspiredData {
		return {
			items: carouselDropdownItems,
			images: [
				{
					id: 0,
					src: AscotLightGreyDustPNG,
				},
				{
					id: 1,
					src: CambridgeFirGreenPNG,
				},
				{
					id: 2,
					src: CartmelMusselPNG,
				},
				{
					id: 3,
					src: GranthamChalkstoneFirGreenPNG,
				},
				{
					id: 4,
					src: LinearWhiteHalifaxOakPNG,
				},
				{
					id: 5,
					src: LucenteGlossCreamPNG,
				},
				{
					id: 6,
					src: NewmarketIndigoBluePNG,
				},
				{
					id: 7,
					src: OxfordWhitePNG,
				},
				{
					id: 8,
					src: StrattoDustGreyPNG,
				},
				{
					id: 9,
					src: VivoPtoOnyxGreyPNG,
				},
			],
		};
	},
});
</script>

<style>
.background {
	background-color: white;
}
</style>
../../../utils/text/utils-common-text ../../../utils/text/utils-text
