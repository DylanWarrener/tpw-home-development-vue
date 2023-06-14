<template>
	<section-component title="Reviews content"></section-component>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import Section from "../../containers/section/section-content.vue";

export default defineComponent({
	name: "reviews-component",
	components: {
		"section-component": Section,
	},
});
</script>
