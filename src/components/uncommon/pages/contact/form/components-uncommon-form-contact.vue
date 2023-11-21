<template></template>

<script lang="ts">
/* The HTML
<v-col id="contact_form" class="pa-8">
		<v-row class="pa-4 contact_form-row">
			<v-col cols="12" class="d-flex justify-center">
				<h4>{{ formState.title }}</h4>
			</v-col>
			<v-col cols="12">
				<p>{{ formState.subtitle }}</p>
			</v-col>
			<v-col>
				<v-form>
					<v-row>
						<v-col cols="6" :key="index" v-for="(item, index) in formState.textFields">
							<v-row>
								<v-col cols="12">
									<v-text-field variant="outlined" :label="item.labelOne"></v-text-field>
								</v-col>
								<v-col cols="12">
									<v-text-field variant="outlined" :label="item.labelTwo"></v-text-field>
								</v-col>
							</v-row>
						</v-col>
						<v-col cols="12">
							<v-textarea variant="outlined" :label="formState.textArea.label"></v-textarea>
						</v-col>
						<v-col cols="12" class="text-left">
							<v-btn variant="outlined">{{ formState.btnText }}</v-btn>
						</v-col>
					</v-row>
				</v-form>
			</v-col>
		</v-row>
	</v-col>
*/
import { defineComponent } from "vue";

// Interfaces
//import { IContactFormState } from "@interfaces/contact/interface-contact";

export default defineComponent({
	name: "contact-form-component",
	props: {
		//formState: { type: Object as () => IContactFormState, required: true },
	},
});
</script>

<style lang="scss">
#contact_form {
	color: rgb(var(--v-theme-inverted));
	position: relative;

	.contact_form-row {
		background-color: rgb(var(--v-theme-accent));
	}

	.v-label {
		color: rgb(var(--v-theme-inverted));
	}

	.v-btn {
		color: #b58dcd;
		border: thin solid #b58dcd;

		&:hover {
			color: rgb(var(--v-theme-inverted));
			border: thin solid rgb(var(--v-theme-inverted));
		}
	}
}
</style>
