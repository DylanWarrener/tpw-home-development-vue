<template>
	<div class="news">News</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Stores
import { parentStore, childStores } from "../plugins/pinia/pinia";

export default defineComponent({
	name: "news-page-component",
	setup() {
		const storeCommon = parentStore();
		const storeNews = childStores.useNewsStore();
		return { storeCommon, storeNews };
	},
});
</script>

<style lang="scss">
.news {
	border: 2px solid black;
}
</style>
