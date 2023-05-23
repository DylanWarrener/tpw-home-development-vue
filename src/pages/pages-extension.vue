<template>
	<div class="extension">Extension</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Stores
import parentStore, { childStores } from "../store";

export default defineComponent({
	name: "extension-page-component",
	setup() {
		const storeCommon = parentStore();
		const storeExtension = childStores.useExtensionStore();
		return { storeCommon, storeExtension };
	},
});
</script>

<style lang="scss">
.extension {
	border: 2px solid black;
}
</style>
