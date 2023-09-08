<template>
	<v-carousel cycle show-arrows="hover" color="inverted" progress="accent" :height="height">
		<slot name="content">
			<v-carousel-item cover v-for="img in images" :key="img.id" :src="img.src"></v-carousel-item>
		</slot>
	</v-carousel>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

// Interfaces
import { ICommonCarouselImagesData } from "../../../interfaces/common/carousel/interface-common-carousel";

export default defineComponent({
	name: "carousel-component",
	props: {
		images: { type: Array as PropType<ICommonCarouselImagesData[]>, required: false },
		height: { type: String, required: false, default: "42rem" },
	},
});
</script>
