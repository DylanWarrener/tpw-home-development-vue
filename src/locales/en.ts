// Use when finished website
//import ITextualData from "../interfaces/common/locale/interface-locale";

// Common page name data
import { btnCardBeInspiredText, btnCardReviewsText, pageNames } from "../utils/text/utils-text";

const en = {
	common: {
		pages: {
			name: pageNames,
		},
		card: {
			rating: {
				title: "Rating overview",
				btnText: "See all reviews",
				max: "/5",
				total: "Total ratings",
			},
			canvas: {
				pages: {
					home: {
						title: "Create Your Tomorrow",
						subtitle: "Assemble your dream home today with our team of experts.",
						btnText: btnCardBeInspiredText,
					},
					kitchen: {
						title: pageNames.kitchen,
						subtitle: "Hash your recipies with our interactive entities.",
						btnText: btnCardBeInspiredText,
					},
					bathroom: {
						title: pageNames.bathroom,
						subtitle: "Own your restroom with our pristine collections.",
						btnText: btnCardBeInspiredText,
					},
					newbuild: {
						title: pageNames.newbuild,
						subtitle: "Structure new homes with our hasty reinforced foundations.",
						btnText: btnCardBeInspiredText,
					},
					extension: {
						title: pageNames.extension,
						subtitle: "Mammoth your space with our innovative styles.",
						btnText: btnCardBeInspiredText,
					},
					refurbishment: {
						title: pageNames.refurbishment,
						subtitle: "Enlighten and re-establish your home with our ingenuious designs.",
						btnText: btnCardBeInspiredText,
					},
					contact: {
						title: `${pageNames.contact} Us`,
						subtitle: "Get in touch and we will power up your projects together",
						btnText: "Contact Us?",
					},
					about: {
						title: `${pageNames.about} Us`,
						subtitle: "Current solutions for modern needs: your neighborhood electricians",
						btnText: "See Team?",
					},
					reviews: {
						title: `Our ${pageNames.reviews}`,
						subtitle: "Discover home renovation gems: insights from real homeowners",
						btnText: btnCardReviewsText,
					},
				},
			},
			reviews: {
				location: "Location",
			},
		},
		section: {
			pages: {
				about: {
					title: "Get to know us",
					subtitle:
						"At TPW, we believe that every house has the potential to become a dream home. Founded by Tom Wintle, a visionary in the world of home renovation and construction, TPW is dedicated to transforming houses into spaces that inspire, comfort, and enrich the lives of our clients.",
				},
				contact: {
					title: "Testing contact header",
					subtitle: "Testing contact subheader",
				},
			},
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
				btnText: btnCardReviewsText,
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
	},
	header: {
		appBar: {
			icons: {
				name: {
					menu: "menu",
					newAccount: "newAccount",
					account: "account",
					settings: "settings",
					search: "search",
					theme: "theme",
				},
				menu: "mdi-menu",
				newAccount: "mdi-account-plus",
				account: "mdi-account",
				settings: "mdi-dots-vertical",
				search: "mdi-magnify",
				theme: "mdi-theme-light-dark",
			},
			tooltips: {
				menu: "Toggle Menu",
				newAccount: "Create Account",
				account: "My Account",
				settings: "Toggle Settings",
				search: "Toggle Search",
				theme: "Toggle Theme",
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
					news: "/news",
					reviews: "/reviews",
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
					news: "mdi-newspaper",
					reviews: "mdi-message-draw",
				},
			},
		},
	},
	main: {},
	footer: {
		copyrightText: "TPW Home Developments, All Rights Reserved",
		location: "United Kingdom - Cambridgeshire - March",
	},
};

export default en;
