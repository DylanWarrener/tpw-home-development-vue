import { defineStore } from "pinia";

// Interfaces
import IAboutState, { IAboutEmployeeCard } from "@interfaces/common/pages/info/about/interfaces-common-pages-info-about";

// Images
import Face1JPG from "@assets/png/about/faces/face-1.jpg";
import Face2JPG from "@assets/png/about/faces/face-2.jpg";
import Face3JPG from "@assets/png/about/faces/face-3.jpg";

// Icons
import FacebookSVG from "@assets/svg/socials/facebook.svg?raw";
import InstagramSVG from "@assets/svg/socials/instagram.svg?raw";
import LinkedInSVG from "@assets/svg/socials/linkedin.svg?raw";
import TwitterSVG from "@assets/svg/socials/twitter.svg?raw";
import YoutubeSVG from "@assets/svg/socials/youtube.svg?raw";

const useAboutStore = defineStore("about-store", {
	state: (): IAboutState => ({
		employees: [
			{
				name: "Tom Wintle",
				role: "Manager",
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
				picture: Face1JPG,
				info: "Info stuff",
				show: false,
			},
			{
				name: "Another person",
				role: "Electrician",
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
				picture: Face2JPG,
				info: "",
				show: false,
			},
			{
				name: "Another person",
				role: "Electrician",
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
				picture: Face2JPG,
				info: "",
				show: false,
			},
			{
				name: "Another person",
				role: "Plumber",
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
				picture: Face3JPG,
				info: "",
				show: false,
			},
			{
				name: "Another person",
				role: "Carpenter",
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
				picture: Face3JPG,
				info: "",
				show: false,
			},
		],
	}),
	getters: {
		//getEmployees: (state): IAboutEmployeeCard[] => state.employees,
	},
	actions: {
		/*
		modifyEmployee(index: number, newValue: IAboutEmployeeCard): void {
			this.employees[index] = newValue;
		},
		*/
	},
});

export default useAboutStore;
