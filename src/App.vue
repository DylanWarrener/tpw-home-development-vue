<template>
	<v-layout>
		<!--<v-system-bar color="blue"></v-system-bar>-->
		<v-app-bar 
			prominent
			color="primary" 
			density="compact"
			scroll-behavior="hide elevate">

			<template #prepend>
				<v-app-bar-nav-icon
					variant="text"
					@click.stop="drawer = !drawer">
				</v-app-bar-nav-icon>
			</template>

			<v-app-bar-title>{{ $t("welcome") }}</v-app-bar-title>
			
			<template #append>
				<v-btn icon="mdi-dots-vertical"></v-btn>
			</template>
		</v-app-bar>
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
	methods: {}
});
</script>
