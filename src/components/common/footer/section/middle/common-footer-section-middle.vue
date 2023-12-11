<template>
	<v-row dense style="border: 2px solid green">
		<!-- Contact info -->
		<v-col cols="12" sm="12" md="12" lg="4" xl="4" xxl="4" style="border: 2px solid green">
			<h4 class="text-center">{{ data.contact.title }}</h4>
			<!-- Address -->
			<v-row dense style="border: 2px solid red">
				<v-col cols="3" style="border: 2px solid green">
					<v-icon :icon="data.contact.address.icon"></v-icon>
				</v-col>
				<v-col cols="9" style="border: 2px solid green"></v-col>
			</v-row>

			<!-- Number -->
			<v-row dense style="border: 2px solid red">
				<v-col cols="3" style="border: 2px solid green">
					<v-icon :icon="data.contact.number.icon"></v-icon>
				</v-col>
				<v-col cols="9" style="border: 2px solid green"></v-col>
			</v-row>

			<!-- Email -->
			<v-row dense style="border: 2px solid red">
				<v-col cols="3" style="border: 2px solid green">
					<v-icon :icon="data.contact.email.icon"></v-icon>
				</v-col>
				<v-col cols="9" style="border: 2px solid green"></v-col>
			</v-row>
		</v-col>

		<!-- Navigation - service pages -->
		<v-col cols="12" sm="6" md="6" lg="4" xl="4" xxl="4" style="border: 2px solid green">Navigation - service pages</v-col>

		<!-- Navigation - info pages -->
		<v-col cols="12" sm="6" md="6" lg="4" xl="4" xxl="4" style="border: 2px solid green">Navigation - info pages</v-col>
	</v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Interfaces
import { IFooterStateMiddleSectionData } from "@declaration/common/interfaces/footer/interface-common-footer";

export default defineComponent({
	name: "footer-section-middle-component",
	props: {
		data: { type: Object as () => IFooterStateMiddleSectionData, required: true },
	},
});
</script>
