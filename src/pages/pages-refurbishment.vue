<template>
	<div class="refurbishment">Refurbishment</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Stores
import parentStore, { childStores } from "../store";

export default defineComponent({
	name: "refurbishment-page-component",
	setup() {
		const storeCommon = parentStore();
		const storeRefurbishment = childStores.useRefurbishmentStore();
		return { storeCommon, storeRefurbishment };
	},
});
</script>

<style lang="scss">
.refurbishment {
	border: 2px solid black;
}
</style>
