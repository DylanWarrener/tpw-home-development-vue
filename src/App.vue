<template>
	<v-layout class="d-flex flex-column">
		<header-component></header-component>
		<v-main>
			<router-view></router-view>
		</v-main>
		<footer-component></footer-component>
	</v-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Store
import { parentStore } from "./plugins/pinia/pinia";

// Components
import Header from "./components/header/header.vue";
import Footer from "./components/footer/footer.vue";

export default defineComponent({
	name: "app-component",
	components: {
		"header-component": Header,
		"footer-component": Footer,
	},
	setup() {
		const storeCommon = parentStore();
		return { storeCommon };
	}
});
</script>

<style lang="scss">
.border {
	border: 2px solid white;
}
</style>
