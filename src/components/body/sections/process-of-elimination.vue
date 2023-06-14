<template>
	<section-component title="Process of elimination content"></section-component>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import Section from "../../containers/section/section-content.vue";

export default defineComponent({
	name: "process-of-elimination-component",
	components: {
		"section-component": Section,
	},
});
</script>
