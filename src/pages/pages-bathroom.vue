<template>
	<div class="bathroom">Bathroom</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Stores
import parentStore, { childStores } from "../store";

export default defineComponent({
	name: "bathroom-page-component",
	setup() {
		const storeCommon = parentStore();
		const storeBathroom = childStores.useBathroomStore();
		return { storeCommon, storeBathroom };
	},
});
</script>

<style lang="scss">
.bathroom {
	border: 2px solid black;
}
</style>
