// Use when finished website
import ITextualData from "../interfaces/common/locale/interface-locale";

// Common page name data
import { btnCardText, pageNames } from "../utils/text/utils-text";

const en = {
	common: {
		card: {
			rating: {
				title: "Rating overview",
				btnText: "See all reviews",
				max: "/5",
				total: "Total ratings",
			},
			btnText: btnCardText,
		},
		dropdown: {
			carousel: {
				items: {
					kitchen: pageNames.kitchen,
					bathroom: pageNames.bathroom,
					newbuild: pageNames.newbuild,
					extension: pageNames.extension,
					refurbishment: pageNames.refurbishment,
				},
				label: "Choose environment",
			},
		},
		icon: {},
		pages: {
			name: pageNames,
		},
		section: {
			beInspired: {
				title: "Be Inspired",
				subtitle: "See our most popular designs.",
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
			reviews: {
				title: "Reviews",
				subtitle: "See what other people think.",
			},
			processOfElimination: {
				title: "Plan of Action",
				subtitle: "See how we plan you in.",
			},
			latestNews: {
				title: "Latest News",
				subtitle: "See what is happening right now.",
			},
		},
	},
	header: {
		appBar: {
			icons: {
				menu: "mdi-menu",
				newAccount: "mdi-account-plus",
				account: "mdi-account",
				verticalDots: "mdi-dots-vertical",
			},
			titles: pageNames,
		},
		navigation: {
			page: {
				name: pageNames,
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
			pages: {
				home: {
					title: "Change by Choice, not by Chance",
					subtitle: "Assemble your dream home with our team of experts.",
					btnText: btnCardText,
				},
				kitchen: {
					title: pageNames.kitchen,
					subtitle: "Hash your recipies with our interactive entities.",
					btnText: btnCardText,
				},
				bathroom: {
					title: pageNames.bathroom,
					subtitle: "Own your restroom with our pristine collections.",
					btnText: btnCardText,
				},
				newbuild: {
					title: pageNames.newbuild,
					subtitle: "Structure new homes with our hasty reinforced foundations.",
					btnText: btnCardText,
				},
				extension: {
					title: pageNames.extension,
					subtitle: "Mammoth your space with our innovative styles.",
					btnText: btnCardText,
				},
				refurbishment: {
					title: pageNames.refurbishment,
					subtitle: "Enlighten and re-establish your home with our ingenuious designs.",
					btnText: btnCardText,
				},
				contact: {
					title: "Contact",
					subtitle: "",
					btnText: "Contact Us?",
				},
				about: {
					title: "About",
					subtitle: "",
					btnText: "See Team?",
				},
			},
		},
	},
	footer: {
		copyrightText: "TPW Home Developments, All Rights Reserved",
		location: "United Kingdom - Cambridgeshire - March",
	},
};

export default en;
