<template>
	<div class="clickable" :style="`width: ${width}; height: ${height}`" @click="navigateTo">
		<svg xmlns="http://www.w3.org/2000/svg" :innerHTML="svgContent" width="100%" height="100%" :style="style"></svg>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "svg-component",
	props: {
		svgContent: { type: String, required: true },
		width: { type: String, required: false, default: "100%" },
		height: { type: String, required: false, default: "100%" },
		style: { type: String, required: false },
	},
	methods: {
		navigateTo(): void {
			this.$emit("svg-clicked");
		},
	},
});
</script>

<style scoped lang="scss">
svg {
	width: 100%;
	height: 100%;
	//fill: blue;
	//display: inline-block;
	//vertical-align: baseline;
	//margin-bottom: -2px;
}
</style>
