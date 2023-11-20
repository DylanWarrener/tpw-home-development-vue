<template>
	<section-component :title="title" :subtitle="subtitle">
		<template #content>
			<v-container fluid>
				<v-row dense>
					<v-col cols="4">
						<dropdown-component :items="dropdownItems" :label="lblDropdown" @value="dropdownValue"></dropdown-component>
					</v-col>
				</v-row>
				<v-row dense>
					<v-col cols="12">
						<carousel-component :images="carouselImages"></carousel-component>
					</v-col>
				</v-row>
				<v-row dense>
					<v-col cols="12">
						<section-component container-class="pa-0" :subtitle="styleSubtitle">
							<template #title>
								<h2>{{ styleTitle }}</h2>
							</template>
							<template #content>
								<div id="container" class="w-100 h-100" style="border: 2px solid red">Content</div>
							</template>
						</section-component>
					</v-col>
				</v-row>
				<v-row dense>
					<v-col cols="12">
						<section-component container-class="pa-0" :subtitle="themeSubtitle">
							<template #title>
								<h2>{{ themeTitle }}</h2>
							</template>
							<template #content>
								<div class="cards d-flex justify-center w-100 h-100" style="border: 2px solid red">
									<div class="card">
										<v-img cover class="img" :src="pngKitchen">
											<div class="themes">
												<div class="theme theme-one">Primary</div>
												<div class="theme theme-two">Secondary</div>
												<div class="theme theme-three">Accent</div>
											</div>
										</v-img>
									</div>
								</div>
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

// Components
import Section from "@components/common/sections/common-sections.vue";
import Carousel from "@components/common/carousel/common-carousel.vue";
import Dropdown from "@components/common/dropdown/common-dropdown.vue";

// Interface
import ISectionBeInspiredData from "@interfaces/common/sections/be-inspired/interfaces-common-sections-be-inspired";

// Data
import { dropdownOptions } from "@utils/text/common/utils-text-common";

// Kitchen PNGs
import AscotLightGreyDustPNG from "@assets/png/kitchens/ascot-light-gret-dust.jpg";

export default defineComponent({
	name: "be-inspired-component",
	components: {
		"section-component": Section,
		"carousel-component": Carousel,
		"dropdown-component": Dropdown,
	},
	data(): ISectionBeInspiredData {
		return {
			dropdownItems: dropdownOptions,
			carouselImages: {
				kitchen: {
					src: "",
					alt: "",
					images: [],
				},
				bathroom: {
					src: "",
					alt: "",
					images: [],
				},
				newbuild: {
					src: "",
					alt: "",
					images: [],
				},
				extension: {
					src: "",
					alt: "",
					images: [],
				},
				refurbishment: {
					src: "",
					alt: "",
					images: [],
				},
			},
		};
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
		pngKitchen(): string {
			return AscotLightGreyDustPNG;
		},
	},
	methods: {
		dropdownValue(newValue: string) {
			let retVal;
			switch (newValue) {
				case this.$t("$vuetify.dropdown.carousel.items.kitchen"):
					retVal = [
						{
							src: AscotLightGreyDustPNG,
						},
						{
							//src: CambridgeFirGreenPNG,
						},
						{
							//src: CartmelMusselPNG,
						},
						{
							//src: GranthamChalkstoneFirGreenPNG,
						},
						{
							//src: LinearWhiteHalifaxOakPNG,
						},
						{
							//src: LucenteGlossCreamPNG,
						},
						{
							//src: NewmarketIndigoBluePNG,
						},
						{
							//src: OxfordWhitePNG,
						},
						{
							//src: StrattoDustGreyPNG,
						},
						{
							//src: VivoPtoOnyxGreyPNG,
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
});
</script>

<style>
.cards {
	.card {
		border: 2px solid green;
		position: relative;

		.img {
			width: 300px;
			height: 300px;
			transition: all 0.3s ease-in-out;

			&:hover {
				width: 600px;
			}

			.themes {
				display: flex;
				height: 7.5%;

				.theme {
					flex: 1 1 auto;
					transition: all 0.3s ease-in-out;
				}

				.theme-one {
					background-color: yellow;
				}

				.theme-two {
					background-color: green;
				}

				.theme-three {
					background-color: orange;
				}
			}
		}
	}
}
</style>
@src/utils/text/common/utils-text @src/utils/text/common/utils-text
