<template>
	<section-component title="Portfolio content"></section-component>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import Section from "../../containers/section/section-content.vue";

export default defineComponent({
	name: "portfolio-component",
	components: {
		"section-component": Section,
	},
});
</script>
