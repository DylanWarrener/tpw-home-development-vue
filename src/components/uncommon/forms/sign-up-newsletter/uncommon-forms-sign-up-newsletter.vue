<template>
	<common-forms-component :msg-info="msgInfo" :msg-terms-and-conditions="msgTermsAndConditions">
		<template #form-content>
			<!--<common-forms-sign-up-newsletter-component></common-forms-sign-up-newsletter-component>-->
			<!-- Change to above once I have tested all form components -->
			<common-forms-sign-up-component></common-forms-sign-up-component>
		</template>
	</common-forms-component>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import CommonForms from "@components/common/forms/common-forms.vue";
import CommonFormsSignUpNewsletter from "@components/common/forms/sign-up/newsletter/common-forms-sign-up-newsletter.vue";
import CommonFormsSignUp from "@components/common/forms/sign-up/common-forms-sign-up.vue";

export default defineComponent({
	name: "sign-up-newsletter-form-component",
	components: {
		"common-forms-component": CommonForms,
		"common-forms-sign-up-newsletter-component": CommonFormsSignUpNewsletter,
		"common-forms-sign-up-component": CommonFormsSignUp,
	},
	computed: {
		msgInfo(): string {
			return `Required fields are marked with *`;
		},
		msgTermsAndConditions(): string {
			return `By subscribing to our newsletter, you agree to receive periodic emails from TPW containing information about our latest
					products, services, promotions, and company updates. We respect your privacy and assure you that your email address and
					personal information will be handled securely and in accordance with our privacy policy. You can unsubscribe from our
					newsletters at any time by using the 'Unsubscribe' link provided in the emails or by contacting our support team
					directly. Please note that by unsubscribing, you may no longer receive important updates or exclusive offers from TPW.`;
		},
	},
});
</script>
