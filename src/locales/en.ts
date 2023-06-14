import ITextualData from "../interfaces/common/locale/interface-locale";

// Common page name data
import { btnCardText, pageNameData } from "../utils/utils-common-text";

const en: ITextualData = {
	common: {
		card: {
			btnText: btnCardText,
		},
		page: {
			name: pageNameData,
		},
		icon: {},
	},
	header: {
		appBar: {
			icon: {
				verticalDots: "mdi-dots-vertical",
			},
			page: {
				name: pageNameData,
			},
		},
		navigation: {
			page: {
				name: pageNameData,
				link: {
					home: "/",
					kitchen: "/kitchens",
					bathroom: "/bathrooms",
					newbuild: "/newbuilds",
					extension: "/extensions",
					refurbishment: "/refurbishments",
					contact: "/contact",
					about: "/about",
				},
				icon: {
					home: "mdi-home",
					kitchen: "mdi-faucet",
					bathroom: "mdi-shower-head",
					newbuild: "mdi-office-building-plus",
					extension: "mdi-toy-brick-plus",
					refurbishment: "mdi-brush",
					contact: "mdi-email-fast",
					about: "mdi-information",
				},
			},
		},
	},
	main: {
		card: {
			page: {
				home: {
					title: "Change by Choice, not by Chance",
					subtitle: "Assemble your dream home with our team of experts.",
					btnText: btnCardText,
				},
				kitchen: {
					title: pageNameData.kitchen,
					subtitle: "Hash your recipies with our interactive entities.",
					btnText: btnCardText,
				},
				bathroom: {
					title: pageNameData.bathroom,
					subtitle: "Own your restroom with our pristine collections.",
					btnText: btnCardText,
				},
				newbuild: {
					title: pageNameData.newbuild,
					subtitle: "Structure new homes with our hasty reinforced foundations.",
					btnText: btnCardText,
				},
				extension: {
					title: pageNameData.extension,
					subtitle: "Mammoth your space with our innovative styles.",
					btnText: btnCardText,
				},
				refurbishment: {
					title: pageNameData.refurbishment,
					subtitle: "Enlighten and re-establish your home with our ingenuious designs.",
					btnText: btnCardText,
				},
				contact: {
					title: pageNameData.contact,
					subtitle: "",
					btnText: "Contact Us?",
				},
				about: {
					title: pageNameData.about,
					subtitle: "",
					btnText: "See Team?",
				},
			},
		},
	},
	footer: {},
};

export default en;
