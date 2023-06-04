<template>
	<v-container fluid>
		<v-row dense>
			<v-col cols="12">Home</v-col>
		</v-row>
	</v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Stores
import parentStore, { childStores } from "../store";

export default defineComponent({
	name: "home-page-component",
	setup() {
		const storeCommon = parentStore();
		const storeHome = childStores.useHomeStore();
		return { storeCommon, storeHome };
	},
});
</script>
