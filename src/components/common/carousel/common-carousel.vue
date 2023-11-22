<template>
	<v-carousel cycle show-arrows="hover" color="inverted" progress="accent" :height="height">
		<slot name="content">
			<v-carousel-item cover :key="index" :src="img.src" :alt="img.alt" v-for="(img, index) in images"></v-carousel-item>
		</slot>
	</v-carousel>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

// Interfaces
import { ICommonAvailableStyles } from "@interfaces/common/interfaces-common";

export default defineComponent({
	name: "carousel-component",
	props: {
		images: { type: Array as PropType<ICommonAvailableStyles[]>, required: true },
		height: { type: String, required: false, default: "42rem" },
	},
});
</script>
