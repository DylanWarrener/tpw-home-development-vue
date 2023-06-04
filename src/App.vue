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
					@click.stop="navMenuClicked">
				</v-app-bar-nav-icon>
			</template>

			<v-app-bar-title>{{ $t("welcome") }}</v-app-bar-title>
			
			<template #append>
				<v-btn icon="mdi-dots-vertical"></v-btn>
			</template>
		</v-app-bar>
		<v-navigation-drawer 
			v-model="drawer"
			location="top"
			temporary>
			<v-list nav>
				<v-list-item 
					to="/"
					prepend-icon="mdi-home"
					title="Home"
					value="home">
				</v-list-item>
				<v-list-item 
					to="/kitchens"
					prepend-icon="mdi-kitchen"
					title="Kitchens"
					value="kitchens">
				</v-list-item>
			</v-list>
		</v-navigation-drawer>
		<header-component></header-component>
		<v-main>
			<router-view></router-view>
		</v-main>
		<footer-component></footer-component>
	</v-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Interfaces
import ICommonData from "./interfaces/common/interface-common";

import Header from "./components/header/header.vue";
import Footer from "./components/footer/footer.vue";

export default defineComponent({
	name: "app-component",
	components: {
		"header-component": Header,
		"footer-component": Footer,
	},
	methods: {
		navMenuClicked(): void {
			this.drawer = !this.drawer;
		}
	},
	data(): ICommonData {
		return {
			drawer: false,
			items: [
				{ title: 'Foo', value: 'foo' },
				{ title: 'Bar', value: 'bar' },
				{ title: 'Fizz', value: 'fizz' },
				{ title: 'Buzz', value: 'buzz' },
			],
		}
	},
});
</script>
