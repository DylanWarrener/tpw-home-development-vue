import { defineStore } from "pinia";

// Interfaces
import IFooterState from "@declaration/common/interfaces/footer/interface-common-footer";

// Localisation
import { i18nInstance } from "@plugins/vuei18n/vue-i18n";

// SVGs
import LogoSVG from "@assets/svg/logo/logo.svg?raw";
import FacebookSVG from "@assets/svg/socials/facebook.svg?raw";
import InstagramSVG from "@assets/svg/socials/instagram.svg?raw";
import LinkedInSVG from "@assets/svg/socials/linkedin.svg?raw";
import TwitterSVG from "@assets/svg/socials/twitter.svg?raw";
import YoutubeSVG from "@assets/svg/socials/youtube.svg?raw";

const useFooterStore = defineStore("footer-store", {
	state: (): IFooterState => ({
		footerData: {
			message: "Want to keep up-date with TPW?",
			btnText: "Subscribe",
			logo: {
				src: LogoSVG,
			},
			input: {
				label: "Email address",
				placeholder: "person@gmail.com",
			},
			navigation: {
				service: {
					title: "Pages",
					items: [
						{
							title: "Kitchens",
							value: 1,
						},
						{
							title: "Bathrooms",
							value: 2,
						},
						{
							title: "Newbuilds",
							value: 3,
						},
						{
							title: "Extensions",
							value: 4,
						},
						{
							title: "Refurbishments",
							value: 5,
						},
					],
				},
				info: {
					title: "Information",
					items: [
						{
							title: "Home",
							value: 1,
						},
						{
							title: "Contact",
							value: 2,
						},
						{
							title: "About",
							value: 3,
						},
						{
							title: "News",
							value: 4,
						},
						{
							title: "Reviews",
							value: 5,
						},
					],
				},
			},
			contact: {
				addressLine1: "41 Snowley Park",
				addressLine2: "March, Peterborough",
				addressLine3: "PE71JQ",
				email: "email@gmail.com",
				number: "(+44) 07464 599 396",
			},
			socials: {
				title: "Get in Touch",
				socialTitle: "Follow Us:",
				items: {
					facebook: {
						icon: FacebookSVG,
						link: "https://www.facebook.com/Dy1an.r.warrener/",
						tooltip: "",
					},
					instagram: {
						icon: InstagramSVG,
						link: "https://www.instagram.com/d.r.w.dev/",
						tooltip: "",
					},
					linkedIn: {
						icon: LinkedInSVG,
						link: "https://www.linkedin.com/in/dylan-w-a523a112a/",
						tooltip: "",
					},
					twitter: {
						icon: TwitterSVG,
						link: "https://twitter.com/dy1anwarrener",
						tooltip: "",
					},
					youtube: {
						icon: YoutubeSVG,
						link: "https://www.youtube.com/channel/UCz6FdtGKQH4_bUSlvTSAcqQ",
						tooltip: "",
					},
				},
			},
			copyright: {
				title: "",
				date: "",
				location: "",
			},
		},
	}),
	getters: {
		getFooterData: (state: IFooterState) => state.footerData,
	},
	actions: {
		/* GETTERS */
		/* SETTERS */
		setFooterData(): void {},
	},
});

export default useFooterStore;
