<template>
	<v-container fluid class="container_forms">
		<!-- Form -->
		<v-form class="d-flex flex-row flex-wrap text-inverted">
			<!-- Message -->
			<v-col cols="12">
				<p>{{ msgInfo }}</p>
			</v-col>

			<!-- All input fields -->
			<v-col cols="12">
				<v-row dense>
					<slot name="form-content"></slot>
				</v-row>
			</v-col>

			<!-- Terms message -->
			<v-col cols="12">
				<i>{{ msgTermsAndConditions }}</i>
			</v-col>
		</v-form>
	</v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "common-forms-component",
	props: {
		msgInfo: { type: String, required: false },
		msgTermsAndConditions: { type: String, required: false },
	},
});
</script>

<style lang="scss">
.container_forms {
	.v-field-label {
		color: rgb(var(--v-theme-inverted));
	}
}
</style>
