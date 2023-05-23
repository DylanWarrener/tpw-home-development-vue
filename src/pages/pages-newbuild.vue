<template>
	<div class="newbuild">Newbuild</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Stores
import parentStore, { childStores } from "../store";

export default defineComponent({
	name: "newbuild-page-component",
	setup() {
		const storeCommon = parentStore();
		const storeNewbuild = childStores.useNewbuildStore();
		return { storeCommon, storeNewbuild };
	},
});
</script>

<style lang="scss">
.newbuild {
	border: 2px solid black;
}
</style>
