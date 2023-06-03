<template>
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
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "header-component",
	props: ['drawer'],
	data() {
		return {
			group: null,
			items: [
				{ title: 'Foo', value: 'foo' },
				{ title: 'Bar', value: 'bar' },
				{ title: 'Fizz', value: 'fizz' },
				{ title: 'Buzz', value: 'buzz' },
			],
		}
	}
});
</script>
