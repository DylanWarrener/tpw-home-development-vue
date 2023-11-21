<template>
	<card-component variant="flat">
		<template #content> About content </template>
	</card-component>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
//import Card from "@components/containers/card/card.vue";

export default defineComponent({
	name: "card-about-component",
	components: {
		//"card-component": Card,
	},
});
</script>
