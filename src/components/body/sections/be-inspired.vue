<template>
	<section-component :title="sectionTitle" :subtitle="sectionSubtitle">
		<template #content>
			<v-container fluid class="pt-16">
				<v-row dense>
					<v-col cols="4">
						<dropdown-component :items="dropdownItems" :label="lblDropdown" @value="dropdownValue"></dropdown-component>
					</v-col>
				</v-row>
				<v-row dense>
					<v-col cols="12">
						<carousel-component :images="images"></carousel-component>
					</v-col>
				</v-row>
			</v-container>
		</template>
	</section-component>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Store
import parentStore from "../../../store";

// Interface
import ICommonBeInspiredData from "../../../interfaces/common/page/beInspired/interface-common-be-inspired";
import { ICommonPageDropdownTextualData } from "../../../interfaces/common/page/interface-common-page";

// Data
import { pageDropdownData } from "../../../utils/utils-common-text";

// Components
import Section from "../../containers/section/section.vue";
import Carousel from "../../containers/carousel/carousel.vue";
import Dropdown from "../../containers/dropdown/dropdown.vue";

export default defineComponent({
	name: "be-inspired-component",
	components: {
		"section-component": Section,
		"carousel-component": Carousel,
		"dropdown-component": Dropdown,
	},
	computed: {
		// Text
		sectionTitle(): string {
			return this.$t("common.section.beInspired.title");
		},
		sectionSubtitle(): string {
			return this.$t("common.section.beInspired.subtitle");
		},
		lblDropdown(): string {
			return this.$t("common.dropdown.carousel.label");
		},

		// Data
		dropdownItems(): ICommonPageDropdownTextualData {
			return this.items;
		},
	},
	methods: {
		dropdownValue(newValue: string): void {
			switch (newValue) {
				case this.$t("common.dropdown.carousel.items.kitchen"):
					break;
				case this.$t("common.dropdown.carousel.items.bathroom"):
					break;
				case this.$t("common.dropdown.carousel.items.newbuild"):
					break;
				case this.$t("common.dropdown.carousel.items.extension"):
					break;
				case this.$t("common.dropdown.carousel.items.refurbishment"):
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
			items: pageDropdownData,
			images: [],
		};
	},
});
</script>
