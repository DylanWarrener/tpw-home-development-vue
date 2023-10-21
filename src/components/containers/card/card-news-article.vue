<template>
	<card-component></card-component>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import Card from "@components/containers/card/card.vue";

export default defineComponent({
	name: "card-news-article-component",
	components: {
		"card-component": Card,
	},
	props: {
		btnText: { type: String, required: false },
		type: { type: String, required: false },
		title: { type: String, required: false },
		message: { type: String, required: false },
		date: { type: String, required: false },
		src: { type: String, required: false },
	},
});
</script>
