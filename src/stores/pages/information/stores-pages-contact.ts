import { defineStore } from "pinia";

import {
	IContactState,
	IContactInfoState,
	IContactFormState,
} from "@declaration/common/interfaces/pages/info/contact/interfaces-common-pages-info-contact";

const useContactStore = defineStore("contact-store", {
	state: (): IContactState => ({
		infoState: {
			message:
				"We are committed to responding to all inquiries within 24 hours on business days. Your questions are important to us, and we will be delighted to provide you with the information you seek.",
			icons: [
				{
					icon: "mdi-map-marker-outline",
					title: "Location",
					info: "41 Snowley Park, Whittlesey, Peterborough, Cambridgeshire, PE7 1JQ, UK",
				},
				{
					icon: "mdi-email-outline",
					title: "Email",
					info: "tpw@tpw.com",
				},
				{
					icon: "mdi-phone-outline",
					title: "Phone",
					info: "+44 (0) 7464 599 396",
				},
			],
		},
		formState: {
			title: "Ready to get started?",
			subtitle: "Your email address will not be published. Required fields are marked with *",
			textFields: [
				{
					labelOne: "First Name*",
					labelTwo: "Email*",
				},
				{
					labelOne: "Last Name*",
					labelTwo: "Phone*",
				},
			],
			textArea: {
				label: "Message*",
			},
			btnText: "Send message",
		},
	}),
	getters: {
		getContactInfoState: (state): IContactInfoState => state.infoState,
		getContactFormState: (state): IContactFormState => state.formState,
	},
	actions: {},
});

export default useContactStore;
