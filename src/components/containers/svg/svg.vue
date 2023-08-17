<template>
	<div :style="`width: ${width}; height: ${height}`">
		<router-link :to="to">
			<svg xmlns="http://www.w3.org/2000/svg" :innerHTML="svgContent" width="100%" height="100%" :style="style"></svg>
		</router-link>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "svg-component",
	props: {
		svgContent: { type: String, required: true },
		width: { type: String, required: false, default: "200px" },
		height: { type: String, required: false, default: "100%" },
		style: { type: String, required: false },
		to: { type: String, required: true },
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
