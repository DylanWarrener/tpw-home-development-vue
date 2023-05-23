<template>
	<div class="kitchen">Kitchen</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Stores
import parentStore, { childStores } from "../store";

export default defineComponent({
	name: "kitchen-page-component",
	setup() {
		const storeCommon = parentStore();
		const storeKitchen = childStores.useKitchenStore();
		return { storeCommon, storeKitchen };
	},
});
</script>

<style lang="scss">
.kitchen {
	border: 2px solid black;
}
</style>
