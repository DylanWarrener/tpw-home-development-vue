import { defineStore } from "pinia";

// Interfaces
import { IFooterState, IFooterFirstColData, IFooterSecondColData, IFooterThirdColData } from "../interfaces/footer/interface-footer";

// SVGs
import LogoSVG from "@assets/svg/logo/logo.svg?raw";
import FacebookSVG from "@assets/svg/socials/facebook.svg?raw";
import InstagramSVG from "@assets/svg/socials/instagram.svg?raw";
import LinkedInSVG from "@assets/svg/socials/linkedin.svg?raw";
import TwitterSVG from "@assets/svg/socials/twitter.svg?raw";
import YoutubeSVG from "@assets/svg/socials/youtube.svg?raw";

const useFooterStore = defineStore("footerStore", {
	state: (): IFooterState => ({
		data: {
			firstCol: {
				src: LogoSVG,
				message: "Want to keep up-date with TPW?",
				input: {
					label: "Email address",
					placeholder: "person@gmail.com",
				},
				btnText: "Subscribe",
			},
			secondCol: {
				pageNavItems: {
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
				infoNavItems: {
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
			thirdCol: {
				title: "Get in Touch",
				addressLine1: "41 Snowley Park",
				addressLine2: "March, Peterborough",
				addressLine3: "PE71JQ",
				email: "email@gmail.com",
				number: "(+44) 07464 599 396",
				socialTitle: "Follow Us:",
				socials: [
					{
						name: "Facebook",
						link: "https://www.facebook.com/Dy1an.r.warrener/",
						icon: FacebookSVG,
					},
					{
						name: "Instagram",
						link: "https://www.instagram.com/d.r.w.dev/",
						icon: InstagramSVG,
					},
					{
						name: "LinkedIn",
						link: "https://www.linkedin.com/in/dylan-w-a523a112a/",
						icon: LinkedInSVG,
					},
					{
						name: "Twitter",
						link: "https://twitter.com/dy1anwarrener",
						icon: TwitterSVG,
					},
					{
						name: "Youtube",
						link: "https://www.youtube.com/channel/UCz6FdtGKQH4_bUSlvTSAcqQ",
						icon: YoutubeSVG,
					},
				],
			},
		},
	}),
	getters: {
		getFirstColData: (state): IFooterFirstColData => state.data.firstCol,
		getSecondColData: (state): IFooterSecondColData => state.data.secondCol,
		getThirdColData: (state): IFooterThirdColData => state.data.thirdCol,
	},
	actions: {},
});

export default useFooterStore;
