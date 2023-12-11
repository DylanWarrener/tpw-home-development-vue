<template>
	<div
		class="svg-container d-flex justify-center align-center"
		:style="`width: ${width}; height: ${height}`"
		:innerHTML="svgContent"
		@click="navigateTo"
	></div>
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
