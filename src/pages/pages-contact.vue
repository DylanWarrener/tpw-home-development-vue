<template>
	<div class="contact">Contact</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Stores
import parentStore, { childStores } from "../store";

export default defineComponent({
	name: "contact-page-component",
	setup() {
		const storeCommon = parentStore();
		const storeContact = childStores.useContactStore();
		return { storeCommon, storeContact };
	},
});
</script>

<style lang="scss">
.contact {
	border: 2px solid black;
}
</style>
