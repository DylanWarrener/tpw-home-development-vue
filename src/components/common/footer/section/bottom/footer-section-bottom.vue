<template>
	<v-row no-gutters>
		<v-col>
			<p class="text-center">&copy; {{ new Date().getFullYear() }} {{ copyrightText }}</p>
			<p class="text-center">{{ location }}</p>
		</v-col>
	</v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "footer-section-bottom-component",
	computed: {
		copyrightText(): string {
			return this.$t("$vuetify.footer.copyrightText");
		},
		location(): string {
			return this.$t("$vuetify.footer.location");
		},
	},
});
</script>
