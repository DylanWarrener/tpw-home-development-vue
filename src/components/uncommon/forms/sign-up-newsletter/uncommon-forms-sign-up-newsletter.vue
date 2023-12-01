<template>
	<common-forms-component :msg-terms-and-conditions="msgTermsAndConditions">
		<template #form-content>
			<common-forms-sign-up-newsletter-component></common-forms-sign-up-newsletter-component>
		</template>
	</common-forms-component>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import CommonForms from "@components/common/forms/common-forms.vue";
import CommonFormsSignUpNewsletter from "@components/common/forms/sign-up/newsletter/common-forms-sign-up-newsletter.vue";

export default defineComponent({
	name: "sign-up-newsletter-form-component",
	components: {
		"common-forms-component": CommonForms,
		"common-forms-sign-up-newsletter-component": CommonFormsSignUpNewsletter,
	},
	computed: {
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
