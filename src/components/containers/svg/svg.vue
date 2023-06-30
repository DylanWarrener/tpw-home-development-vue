<template>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		:innerHTML="svgContent"
		:width="width"
		:height="height"
		:style="style"
	></svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "svg-component",
	props: {
		svgContent: { type: String, required: true },
		width: { type: String, required: false },
		height: { type: String, required: false },
		style: { type: String, required: false },
	},
});
</script>

<style scoped lang="scss">
svg {
	width: 100%;
	height: 100%;
	fill: white;
	//display: inline-block;
	//vertical-align: baseline;
	//margin-bottom: -2px;
}
</style>
