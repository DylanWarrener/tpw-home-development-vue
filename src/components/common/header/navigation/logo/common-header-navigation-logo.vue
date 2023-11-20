<template>
	<img :src="src" style="width: 200px; height: 100%" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "logo-component",
	props: {
		src: { type: String, required: true },
		width: { type: String, required: false, default: "200px" },
		height: { type: String, required: false, default: "100%" },
	},
});
</script>
