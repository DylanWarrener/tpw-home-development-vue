import { defineStore } from "pinia";

// Interfaces
import IFooterState from "@declaration/common/interfaces/footer/interface-common-footer";

// Localisation
import { i18nInstance } from "@plugins/vuei18n/vue-i18n";

// Constants
import {
	URL_TPW_FACEBOOK,
	URL_TPW_INSTAGRAM,
	URL_TPW_LINKEDIN,
	URL_TPW_TWITTER,
	URL_TPW_YOUTUBE,
} from "@constants/common/primitive/constants-common-primitive";

// Icons
import { iconArrowUpThick, ICON_LOCATION } from "@constants/common/primitive/constants-common-primitive";

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
			icons: {
				backToTop: {
					icon: iconArrowUpThick,
					tooltip: "",
					showTooltip: false,
				},
			},
			top: {
				logo: {
					src: LogoSVG,
				},
				socials: {
					title: "",
					items: {
						facebook: {
							icon: FacebookSVG,
							link: URL_TPW_FACEBOOK,
							tooltip: "",
						},
						instagram: {
							icon: InstagramSVG,
							link: URL_TPW_INSTAGRAM,
							tooltip: "",
						},
						linkedIn: {
							icon: LinkedInSVG,
							link: URL_TPW_LINKEDIN,
							tooltip: "",
						},
						twitter: {
							icon: TwitterSVG,
							link: URL_TPW_TWITTER,
							tooltip: "",
						},
						youtube: {
							icon: YoutubeSVG,
							link: URL_TPW_YOUTUBE,
							tooltip: "",
						},
					},
				},
			},
			middle: {
				contact: {
					title: "",
					address: {
						icon: ICON_LOCATION,
						line1: "",
						line2: "",
						line3: "",
					},
					email: {
						icon: "",
						value: "",
					},
					number: {
						icon: "",
						value: "",
					},
				},
				navigation: {
					service: {
						title: "",
						items: [],
					},
					information: {
						title: "",
						items: [],
					},
				},
			},
			bottom: {
				copyright: {
					title: "",
					location: "",
				},
			},
		},
	}),
	getters: {
		getFooterData: (state: IFooterState) => state.footerData,
	},
	actions: {
		/* GETTERS */
		/* SETTERS */
		setFooterData(): void {
			this.footerData.icons.backToTop.tooltip = i18nInstance.t("common.footer.icons.backToTop.tooltip");

			// Top
			this.footerData.top.socials.title = i18nInstance.t("common.footer.socials.title");
			this.footerData.top.socials.items.facebook.tooltip = i18nInstance.t("common.footer.socials.items.facebook.tooltip");
			this.footerData.top.socials.items.instagram.tooltip = i18nInstance.t("common.footer.socials.items.instagram.tooltip");
			this.footerData.top.socials.items.linkedIn.tooltip = i18nInstance.t("common.footer.socials.items.linkedIn.tooltip");
			this.footerData.top.socials.items.twitter.tooltip = i18nInstance.t("common.footer.socials.items.twitter.tooltip");
			this.footerData.top.socials.items.youtube.tooltip = i18nInstance.t("common.footer.socials.items.youtube.tooltip");

			/* Middle */
			// Contact
			this.footerData.middle.contact.title = i18nInstance.t("common.footer.contact.title");
			this.footerData.middle.contact.address.line1 = i18nInstance.t("common.footer.contact.address.line1");
			this.footerData.middle.contact.address.line2 = i18nInstance.t("common.footer.contact.address.line2");
			this.footerData.middle.contact.address.line3 = i18nInstance.t("common.footer.contact.address.line3");
			this.footerData.middle.contact.number.value = i18nInstance.t("common.footer.contact.number");
			this.footerData.middle.contact.email.value = i18nInstance.t("common.footer.contact.email");
			// Navigation - Service
			this.footerData.middle.navigation.service.title = i18nInstance.t("common.footer.navigation.service.title");
			this.footerData.middle.navigation.service.items = [
				i18nInstance.t("common.footer.navigation.service.names.kitchen"),
				i18nInstance.t("common.footer.navigation.service.names.bathroom"),
				i18nInstance.t("common.footer.navigation.service.names.newbuild"),
				i18nInstance.t("common.footer.navigation.service.names.extension"),
				i18nInstance.t("common.footer.navigation.service.names.refurbishment"),
			];
			// Navigation - Information
			this.footerData.middle.navigation.information.title = i18nInstance.t("common.footer.navigation.information.title");
			this.footerData.middle.navigation.information.items = [
				i18nInstance.t("common.footer.navigation.information.names.home"),
				i18nInstance.t("common.footer.navigation.information.names.contact"),
				i18nInstance.t("common.footer.navigation.information.names.about"),
				i18nInstance.t("common.footer.navigation.information.names.news"),
				i18nInstance.t("common.footer.navigation.information.names.reviews"),
			];

			// Bottom
			this.footerData.bottom.copyright.title = i18nInstance.t("common.footer.copyright.title");
			this.footerData.bottom.copyright.location = i18nInstance.t("common.footer.copyright.location");
		},
	},
});

export default useFooterStore;
