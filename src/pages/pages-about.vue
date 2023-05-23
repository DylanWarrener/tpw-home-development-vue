<template>
	<div class="about">About</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Stores
import parentStore, { childStores } from "../store";

export default defineComponent({
	name: "about-page-component",
	setup() {
		const storeCommon = parentStore();
		const storeAbout = childStores.useAboutStore();
		return { storeCommon, storeAbout };
	},
});
</script>

<style scoped lang="scss">
.about {
	border: 2px solid black;
}
</style>
