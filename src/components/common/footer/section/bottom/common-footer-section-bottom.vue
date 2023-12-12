<template>
	<v-row dense class="py-4">
		<v-col cols="12">
			<p class="text-center">&copy; {{ new Date().getFullYear() }} {{ data.copyright.title }}</p>
			<p class="text-center">{{ data.copyright.location }}</p>
		</v-col>
	</v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Interfaces
import { IFooterStateBottomSectionData } from "@declaration/common/interfaces/footer/interface-common-footer";

export default defineComponent({
	name: "footer-section-bottom-component",
	props: {
		data: { type: Object as () => IFooterStateBottomSectionData, required: true },
	},
});
</script>
