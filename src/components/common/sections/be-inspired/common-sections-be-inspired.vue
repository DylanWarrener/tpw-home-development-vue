<template>
	<section-component :title="title" :subtitle="subtitle">
		<template #content>
			<v-container fluid>
				<v-row dense>
					<v-col cols="4">
						<dropdown-component :items="dropdownOptions" :label="lblDropdown" @value="dropdownValue"></dropdown-component>
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
import { ICommonAvailableStyles } from "@interfaces/common/interfaces-common";

// Utils
import { pageServiceNames } from "@utils/text/common/pages/utils-text-common-pages";

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
			carouselImages: [],
		};
	},
	computed: {
		// Text
		title(): string {
			return this.$t("$vuetify.common.sections.beInspired.title");
		},
		styleTitle(): string {
			return this.$t("$vuetify.common.sections.beInspired.style.title");
		},
		themeTitle(): string {
			return this.$t("$vuetify.common.sections.beInspired.theme.title");
		},
		subtitle(): string {
			return this.$t("$vuetify.common.sections.beInspired.subtitle");
		},
		styleSubtitle(): string {
			return this.$t("$vuetify.common.sections.beInspired.style.subtitle");
		},
		themeSubtitle(): string {
			return this.$t("$vuetify.common.sections.beInspired.theme.subtitle");
		},
		lblDropdown(): string {
			return this.$t("$vuetify.common.sections.beInspired.dropdown.label");
		},

		// IMGs
		pngKitchen(): string {
			return AscotLightGreyDustPNG;
		},

		// Data
		dropdownOptions(): string[] {
			return this.storeCommon.getDropdownOptions;
		},
		availableKitchenStyles(): ICommonAvailableStyles[] {
			return this.storeCommon.getAvailableKitchenStyles;
		},
		availableBathroomStyles(): ICommonAvailableStyles[] {
			return this.storeCommon.getAvailableBathroomStyles;
		},
		availableNewbuildStyles(): ICommonAvailableStyles[] {
			return this.storeCommon.getAvailableNewbuildStyles;
		},
		availableExtensionStyles(): ICommonAvailableStyles[] {
			return this.storeCommon.getAvailableExtensionStyles;
		},
		availableRefurbishmentStyles(): ICommonAvailableStyles[] {
			return this.storeCommon.getAvailableRefurbishmentStyles;
		},
	},
	methods: {
		dropdownValue(newValue: string): void {
			this.carouselImages = [];
			switch (newValue) {
				case pageServiceNames.kitchen:
					this.carouselImages = this.availableKitchenStyles;
					break;
				case pageServiceNames.bathroom:
					this.carouselImages = this.availableBathroomStyles;
					break;
				case pageServiceNames.newbuild:
					this.carouselImages = this.availableNewbuildStyles;
					break;
				case pageServiceNames.extension:
					this.carouselImages = this.availableExtensionStyles;
					break;
				case pageServiceNames.refurbishment:
					this.carouselImages = this.availableRefurbishmentStyles;
					break;
			}
		},
	},
	setup() {
		const storeCommon = parentStore();
		return { storeCommon };
	},
	created(): void {
		this.carouselImages = this.availableKitchenStyles;
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
@src/utils/text/common/utils-text @src/utils/text/common/utils-text @src/interfaces/common/interfaces-common-sections
