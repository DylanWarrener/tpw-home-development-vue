<template>
	<section-component></section-component>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import Section from "../../containers/section/section-content.vue";

export default defineComponent({
	name: "be-inspired-component",
	components: {
		"section-component": Section,
	},
});
</script>
