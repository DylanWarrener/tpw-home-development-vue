<template>
	<v-container fluid class="bg-primary">
		<!--<footer-section-top-component></footer-section-top-component>-->
		<!--<v-divider class="my-4"></v-divider>-->
		<footer-section-interactive-component></footer-section-interactive-component>
		<v-divider class="my-4"></v-divider>
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

/*

<v-row dense class="mt-4">
			<v-col class="d-flex flex-column justify-center">
				<h4 class="text-center">Pages</h4>
				<v-btn
					class="my-2 justify-start"
					color="transparent"
					variant="flat"
					rounded="lg"
					v-for="item in navigation"
					:key="item.id"
					:prepend-icon="item.icon"
					:to="item.link"
				>
					{{ item.title }}
				</v-btn>
			</v-col>
			<v-col class="d-flex justify-center">
				<h4>Socials</h4>
			</v-col>
			<v-col class="d-flex justify-center">
				<h4>Company</h4>
			</v-col>
			<v-col class="d-flex justify-center">
				<h4>Get in touch</h4>
			</v-col>
		</v-row>
		<v-divider></v-divider>
		<v-row dense>
			<v-col class="d-flex justify-center"
				>Copyright &copy; TPW Home Developments {{ new Date().getFullYear() }}</v-col
			>
			<v-col class="d-flex justify-center"></v-col>
		</v-row>
*/
</script>
