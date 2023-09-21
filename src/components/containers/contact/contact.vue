<template>
	<v-container>
		<v-row>
			<!-- Info -->
			<slot name="info">
				<contact-info-component :info-state="infoState" v-if="infoState"></contact-info-component>
			</slot>

			<!-- Form -->
			<slot name="form">
				<contact-form-component :form-state="formState" v-if="formState"></contact-form-component>
			</slot>
		</v-row>
	</v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import ContactInfo from "@components/containers/contact/contact-info.vue";
import ContactForm from "@components/containers/contact/contact-form.vue";

// Stores
import { childStores } from "@plugins/pinia/pinia";

// Interfaces
import { IContactInfoState, IContactFormState } from "@interfaces/contact/interface-contact";

export default defineComponent({
	name: "contact-component",
	components: {
		"contact-info-component": ContactInfo,
		"contact-form-component": ContactForm,
	},
	computed: {
		infoState(): IContactInfoState {
			return this.storeContact.getContactInfoState;
		},
		formState(): IContactFormState {
			return this.storeContact.getContactFormState;
		},
	},
	setup() {
		const storeContact = childStores.useContactStore();
		return { storeContact };
	},
});
</script>
