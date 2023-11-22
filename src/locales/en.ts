// Interfaces
//import { ICommonLocalesVuetifyTextualData } from "@src/interfaces/common/locales/interfaces-common-locales";

// Utils text data
import { headerAppbarIconNames, headerAppbarIconTooltips, headerNavigationIcons } from "@utils/text/common/header/utils-text-common-header";
import { cardBtnBeInspired } from "@utils/text/common/utils-text-common";
import { pageServiceNames, pageInfoNames, pageServiceLinks, pageInfoLinks, pageAllNames, pageAllLinks } from "@src/utils/text/common/pages/utils-text-common-pages";

// Vuetify's default messages
import defaultText from "vuetify/lib/locale/en.mjs";

const en = {
	$vuetify: {
		common: {
			header: {
				appBar: {
					titles: pageAllNames,
					icons: {
						names: headerAppbarIconNames,
						tooltips: headerAppbarIconTooltips,
					},
				},
				navigation: {
					names: pageAllNames,
					links: pageAllLinks,
					icons: {
						mdi: headerNavigationIcons,
						names: pageAllNames,
					},
				},
			},
			dialogs: {
				signUpNewsletter: {
					title: "sign up",
					message: "Never miss out on our latest news, trends, styles & innovation",
					icon: {
						tooltip: "Close dialog",
					},
					form: {
						firstName: {
							label: "First name",
						},
						lastName: {
							label: "Last name",
						},
						emailAddress: {
							label: "Email address",
						},
					},
				},
			},
			pages: {
				home: {
					name: pageInfoNames.home,
					link: pageInfoLinks.home,
					images: {},
				},
				kitchen: {
					name: pageServiceNames.kitchen,
					link: pageServiceLinks.kitchen,
					images: [
						{
							alt: "Ascot style kitchen",
						},
						{
							alt: "Cambridge fir green style kitchen",
						},
						{
							alt: "Cartmel mussels style kitchen",
						},
						{
							alt: "Grantham chalkstone fir green style kitchen",
						},
						{
							alt: "Linear white halifax oak style kitchen",
						},
						{
							alt: "Lucente gloss cream style kitchen",
						},
						{
							alt: "Newmarket indigo blue style kitchen",
						},
						{
							alt: "Oxford white style kitchen",
						},
						{
							alt: "Stratto dust green style kitchen",
						},
						{
							alt: "Vivo pto onyx grey style kitchen",
						},
					],
				},
				bathroom: {
					name: pageServiceNames.bathroom,
					link: pageServiceLinks.bathroom,
					images: [
						{
							alt: "",
						},
						{
							alt: "",
						},
						{
							alt: "",
						},
						{
							alt: "",
						},
						{
							alt: "",
						},
						{
							alt: "",
						},
						{
							alt: "",
						},
						{
							alt: "",
						},
						{
							alt: "",
						},
					],
				},
				newbuild: {
					name: pageServiceNames.newbuild,
					link: pageServiceLinks.newbuild,
					images: [
						{
							alt: "Ascot style kitchen",
						},
					],
				},
				extension: {
					name: pageServiceNames.extension,
					link: pageServiceLinks.extension,
					images: [
						{
							alt: "Ascot style kitchen",
						},
					],
				},
				refurbishment: {
					name: pageServiceNames.refurbishment,
					link: pageServiceLinks.refurbishment,
					images: [
						{
							alt: "Ascot style kitchen",
						},
					],
				},
				contact: {
					name: pageInfoNames.contact,
					link: pageInfoLinks.contact,
					images: {},
					title: "Contact Details",
					subtitle: "Please do not hesitate to contact us by either giving us a call or filling out the provided form.",
					message:
						"We are committed to responding to all inquiries within 24 hours on business days. Your questions are important to us, and we will be delighted to provide you with the information you seek.",
				},
				news: {
					name: pageInfoNames.news,
					link: pageInfoLinks.news,
					images: {},
				},
				reviews: {
					name: pageInfoNames.reviews,
					link: pageInfoLinks.reviews,
					images: {},
				},
				about: {
					name: pageInfoNames.about,
					link: pageInfoLinks.about,
					images: {},
					title: "Our team",
					subtitle:
						"At TPW, we believe that every house has the potential to become a dream home. Founded by Tom Wintle, a visionary in the world of home renovation and construction, TPW is dedicated to transforming houses into spaces that inspire, comfort, and enrich the lives of our clients.",
				},
			},
			sections: {
				beInspired: {
					title: "Be Inspired",
					subtitle: "See our most popular designs.",
					dropdown: {
						items: pageServiceNames,
						label: "Choose environment",
					},
					style: {
						title: "Styles",
						subtitle: "See our most popular styles.",
					},
					theme: {
						title: "Themes",
						subtitle: "See our most popular themes.",
					},
				},
				portfolio: {
					title: "Portfolio",
					subtitle: "See what we have done already.",
				},
				processOfElimination: {
					title: "plan of action",
					subtitle: "See how we plan you in.",
				},
				allNews: {
					title: `our ${pageInfoNames.news}`,
					subtitle: `Delve deeper into all our ${pageInfoNames.news}, trends & innovation`,
				},
				latestNews: {
					title: `latest ${pageInfoNames.news}`,
					subtitle: `Examine our most recent ${pageInfoNames.news}.`,
					btnText: `uncover all ${pageInfoNames.news}?`,
				},
				allReviews: {
					title: `our ${pageInfoNames.reviews}`,
					subtitle: "Reveal customer feedback",
				},
				latestReviews: {
					title: `latest ${pageInfoNames.reviews}`,
					subtitle: `Explore our most recent ${pageInfoNames.reviews}.`,
					btnText: `study all ${pageInfoNames.reviews}?`,
				},
			},
			cards: {
				rating: {
					title: "Rating overview",
					total: "Total ratings",
					max: "/5",
					btnText: "See all reviews",
				},
				canvas: {
					pages: {
						home: {
							title: "create your tomorrow",
							subtitle: "Assemble your dream home today with our team of experts.",
							btnText: cardBtnBeInspired,
						},
						kitchen: {
							title: `all ${pageServiceNames.kitchen}`,
							subtitle: "Hash your recipies with our interactive entities.",
							btnText: cardBtnBeInspired,
						},
						bathroom: {
							title: `all ${pageServiceNames.bathroom}`,
							subtitle: "Own your restroom with our pristine collections.",
							btnText: cardBtnBeInspired,
						},
						newbuild: {
							title: `all ${pageServiceNames.newbuild}`,
							subtitle: "Structure new homes with our hasty reinforced foundations.",
							btnText: cardBtnBeInspired,
						},
						extension: {
							title: `all ${pageServiceNames.extension}`,
							subtitle: "Mammoth your space with our innovative styles.",
							btnText: cardBtnBeInspired,
						},
						refurbishment: {
							title: `all ${pageServiceNames.refurbishment}`,
							subtitle: "Enlighten and re-establish your home with our ingenuious designs.",
							btnText: cardBtnBeInspired,
						},
						contact: {
							title: `${pageInfoNames.contact} us`,
							subtitle: "Get in touch and we will power up your projects together.",
							btnText: `${pageInfoNames.contact} our team?`,
						},
						about: {
							title: `${pageInfoNames.about} us`,
							subtitle: "Discover our passion for technology and innovation.",
							btnText: `see our team?`,
						},
						news: {
							title: `all ${pageInfoNames.news}`,
							subtitle: `Stay updated with the latest ${pageInfoNames.news}, trends & innovations`,
							btnText: `reveal our ${pageInfoNames.news}?`,
						},
						reviews: {
							title: `all ${pageInfoNames.reviews}`,
							subtitle: "Discover home renovation gems: insights from real homeowners",
							btnText: `see our ${pageInfoNames.reviews}?`,
						},
					},
				},
				reviews: {
					location: "Location",
				},
			},
			footer: {
				navigation: {
					serviceItems: {
						names: pageServiceNames,
						links: pageServiceLinks,
					},
					infoItems: {
						names: pageInfoNames,
						links: pageInfoLinks,
					},
				},
				copyrightText: "TPW Home Developments, All Rights Reserved",
				location: "United Kingdom - Cambridgeshire - March",
			},
		},
		uncommon: {
			icons: {
				chevronUp: "mdi-chevron-up",
				chevronRight: "mdi-chevron-right",
				chevronDown: "mdi-chevron-down",
				chevronLeft: "mdi-chevron-left",
			},
		},
		...defaultText,
	},
};

export default en;
