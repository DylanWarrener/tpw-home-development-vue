<template>
	<v-layout>
		<header-component></header-component>
		<v-main>
			<router-view></router-view>
		</v-main>
		<footer-component></footer-component>
	</v-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Header from "./components/header/header.vue";
import Footer from "./components/footer/footer.vue";

export default defineComponent({
	name: "app-component",
	components: {
		"header-component": Header,
		"footer-component": Footer,
	},
});
</script>
