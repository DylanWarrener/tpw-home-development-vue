<template>
	<v-carousel cycle hide-delimiters show-arrows="hover" progress="accent">
		<v-carousel-item cover v-for="images in kitchenImages" :key="images.id" :src="images.src"></v-carousel-item>
	</v-carousel>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

// Images
import AscotLightGreyDustPNG from "../../../assets/png/kitchens/ascot-light-gret-dust.jpg";
import CambridgeFirGreenPNG from "../../../assets/png/kitchens/cambridge-fir-green.jpg";
import CartmelMusselPNG from "../../../assets/png/kitchens/cartmel-mussel.jpg";
import GranthamChalkstoneFirGreenPNG from "../../../assets/png/kitchens/grantham-chalkstone-fir-green.jpg";
import LinearWhiteHalifaxOakPNG from "../../../assets/png/kitchens/linear-white-halifax-oak.jpg";
import LucenteGlossCreamPNG from "../../../assets/png/kitchens/lucente-gloss-cream.jpg";
import NewmarketIndigoBluePNG from "../../../assets/png/kitchens/newmarket-indigo-blue.jpg";
import OxfordWhitePNG from "../../../assets/png/kitchens/oxford-white.jpg";
import StrattoDustGreyPNG from "../../../assets/png/kitchens/stratto-dust-grey.jpg";
import VivoPtoOnyxGreyPNG from "../../../assets/png/kitchens/vivo-pto-onyx-grey.jpg";

export default defineComponent({
	name: "carousel-component",
	props: {
		images: { type: Array as PropType<string[]>, required: true },
	},
	computed: {
		kitchenImages() {
			return [
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
		},
	},
});
</script>
