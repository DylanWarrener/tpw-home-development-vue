<template>
	<v-container fluid class="bg-primary">
		<!--<footer-section-top-component></footer-section-top-component>-->
		<!--<v-divider class="my-4"></v-divider>-->
		<footer-section-interactive-component></footer-section-interactive-component>
		<v-divider class="pb-4"></v-divider>
		<footer-section-bottom-component></footer-section-bottom-component>
	</v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import FooterSectionTop from "./section/top/footer-section-top.vue";
import FooterSectionInteractive from "./section/interactive/footer-section-interactive.vue";
import FooterSectionBottom from "./section/bottom/footer-section-bottom.vue";

export default defineComponent({
	name: "footer-component",
	components: {
		"footer-section-top-component": FooterSectionTop,
		"footer-section-interactive-component": FooterSectionInteractive,
		"footer-section-bottom-component": FooterSectionBottom,
	},
});
</script>
