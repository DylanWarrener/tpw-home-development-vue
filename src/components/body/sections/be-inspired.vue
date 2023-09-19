<template>
	<section-component :title="title" :subtitle="subtitle">
		<template #content>
			<v-container fluid>
				<v-row dense>
					<v-col cols="4">
						<dropdown-component :items="items" :label="lblDropdown" @value="dropdownValue"></dropdown-component>
					</v-col>
				</v-row>
				<v-row dense>
					<v-col cols="12">
						<carousel-component :images="carouselImages"></carousel-component>
					</v-col>
				</v-row>
				<v-row dense>
					<v-col cols="12">
						<section-component :subtitle="styleSubtitle">
							<template #title>
								<h2>{{ styleTitle }}</h2>
							</template>
							<template #content> Style cards go here </template>
						</section-component>
					</v-col>
				</v-row>
				<v-row dense>
					<v-col cols="12">
						<section-component :subtitle="themeSubtitle">
							<template #title>
								<h2>{{ themeTitle }}</h2>
							</template>
							<template #content> Theme cards go here </template>
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
			return this.$t("$vuetify.sections.beInspired.title");
		},
		styleTitle(): string {
			return this.$t("$vuetify.sections.beInspired.style.title");
		},
		themeTitle(): string {
			return this.$t("$vuetify.sections.beInspired.theme.title");
		},
		subtitle(): string {
			return this.$t("$vuetify.sections.beInspired.subtitle");
		},
		styleSubtitle(): string {
			return this.$t("$vuetify.sections.beInspired.style.subtitle");
		},
		themeSubtitle(): string {
			return this.$t("$vuetify.sections.beInspired.theme.subtitle");
		},
		lblDropdown(): string {
			return this.$t("$vuetify.dropdown.carousel.label");
		},

		// Images
		carouselImages(): ICommonCarouselImagesData[] {
			return this.images;
		},
	},
	methods: {
		dropdownValue(newValue: string): { src: string }[] {
			let retVal;
			switch (newValue) {
				case this.$t("$vuetify.dropdown.carousel.items.kitchen"):
					retVal = [
						{
							src: AscotLightGreyDustPNG,
						},
						{
							src: CambridgeFirGreenPNG,
						},
						{
							src: CartmelMusselPNG,
						},
						{
							src: GranthamChalkstoneFirGreenPNG,
						},
						{
							src: LinearWhiteHalifaxOakPNG,
						},
						{
							src: LucenteGlossCreamPNG,
						},
						{
							src: NewmarketIndigoBluePNG,
						},
						{
							src: OxfordWhitePNG,
						},
						{
							src: StrattoDustGreyPNG,
						},
						{
							src: VivoPtoOnyxGreyPNG,
						},
					];
					break;
				case this.$t("$vuetify.dropdown.carousel.items.bathroom"):
					retVal = [
						{
							src: AscotLightGreyDustPNG,
						},
					];
					break;
				case this.$t("$vuetify.dropdown.carousel.items.newbuild"):
					retVal = [
						{
							src: AscotLightGreyDustPNG,
						},
					];
					break;
				case this.$t("$vuetify.dropdown.carousel.items.extension"):
					retVal = [
						{
							src: AscotLightGreyDustPNG,
						},
					];
					break;
				case this.$t("$vuetify.dropdown.carousel.items.refurbishment"):
					retVal = [
						{
							src: AscotLightGreyDustPNG,
						},
					];
					break;
			}
			return retVal;
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
					src: AscotLightGreyDustPNG,
					alt: this.$t("$vuetify.pages.kitchen.images.ascotLightGreyDust.alt"),
				},
				{
					src: CambridgeFirGreenPNG,
					alt: this.$t("$vuetify.pages.kitchen.images.cambridgeFirGreen.alt"),
				},
				{
					src: CartmelMusselPNG,
					alt: this.$t("$vuetify.pages.kitchen.images.cartmelMussel.alt"),
				},
				{
					src: GranthamChalkstoneFirGreenPNG,
					alt: this.$t("$vuetify.pages.kitchen.images.granthamChalkstoneFirGreen.alt"),
				},
				{
					src: LinearWhiteHalifaxOakPNG,
					alt: this.$t("$vuetify.pages.kitchen.images.linearWhiteHalifaxOak.alt"),
				},
				{
					src: LucenteGlossCreamPNG,
					alt: this.$t("$vuetify.pages.kitchen.images.lucenteGlossCream.alt"),
				},
				{
					src: NewmarketIndigoBluePNG,
					alt: this.$t("$vuetify.pages.kitchen.images.newmarketIndigoBlue.alt"),
				},
				{
					src: OxfordWhitePNG,
					alt: this.$t("$vuetify.pages.kitchen.images.oxfordWhite.alt"),
				},
				{
					src: StrattoDustGreyPNG,
					alt: this.$t("$vuetify.pages.kitchen.images.strattoDustGrey.alt"),
				},
				{
					src: VivoPtoOnyxGreyPNG,
					alt: this.$t("$vuetify.pages.kitchen.images.vivoPtoOnyxGrey.alt"),
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
