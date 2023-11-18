//import { ITextualData } from "@interfaces/common/locale/interface-locale";

// Vuetify locale messages
import VuetifyDefaultLocaleMessages from "vuetify/lib/locale/en.mjs";

// Common data
import {
	// Common
	btnCardBeInspiredText,
	btnCardReviewsText,
	allPageNames,
	allPageLinks,
	mainPageNames,
	mainPageLinks,
	infoPageNames,
	infoPageLinks,
	// Header
	headerIconNames,
	// Body
	// Footer
} from "../utils/text/common/utils-text-common";

const en = {
	$vuetify: {
		icons: {
			chevronUp: "mdi-chevron-up",
			chevronRight: "mdi-chevron-right",
			chevronDown: "mdi-chevron-down",
			chevronLeft: "mdi-chevron-left",
		},
		header: {
			appBar: {
				titles: allPageNames,
				icons: {
					names: headerIconNames,
					tooltips: {
						menu: "Toggle Menu",
						search: "Toggle Search",
						theme: "Toggle Theme",
						newAccount: "Create Account",
						account: "My Account",
						settings: "Toggle Settings",
					},
					menu: "mdi-menu",
					search: "mdi-magnify",
					theme: "mdi-theme-light-dark",
					newAccount: "mdi-account-plus",
					account: "mdi-account",
					settings: "mdi-dots-vertical",
				},
			},
			navigation: {
				names: allPageNames,
				links: allPageLinks,
				icons: {
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
		pages: {
			home: {
				name: allPageNames.home,
				link: allPageLinks.home,
				images: {},
			},
			kitchen: {
				name: allPageNames.kitchen,
				link: allPageLinks.kitchen,
				images: {
					ascotLightGreyDust: {
						alt: "Ascot style kitchen",
					},
					cambridgeFirGreen: {
						alt: "Cambridge fir green style kitchen",
					},
					cartmelMussel: {
						alt: "Cartmel mussels style kitchen",
					},
					granthamChalkstoneFirGreen: {
						alt: "Grantham chalkstone fir green style kitchen",
					},
					linearWhiteHalifaxOak: {
						alt: "Linear white halifax oak style kitchen",
					},
					lucenteGlossCream: {
						alt: "Lucente gloss cream style kitchen",
					},
					newmarketIndigoBlue: {
						alt: "Newmarket indigo blue style kitchen",
					},
					oxfordWhite: {
						alt: "Oxford white style kitchen",
					},
					strattoDustGrey: {
						alt: "Stratto dust green style kitchen",
					},
					vivoPtoOnyxGrey: {
						alt: "Vivo pto onyx grey style kitchen",
					},
				},
			},
			bathroom: {
				name: allPageNames.bathroom,
				link: allPageLinks.bathroom,
				images: {},
			},
			newbuild: {
				name: allPageNames.newbuild,
				link: allPageLinks.newbuild,
				images: {},
			},
			extension: {
				name: allPageNames.extension,
				link: allPageLinks.extension,
				images: {},
			},
			refurbishment: {
				name: allPageNames.refurbishment,
				link: allPageLinks.refurbishment,
				images: {},
			},
			contact: {
				name: allPageNames.contact,
				link: allPageLinks.contact,
				images: {},
				title: "Contact Details",
				subtitle: "Please do not hesitate to contact us by either giving us a call or filling out the provided form.",
				message:
					"We are committed to responding to all inquiries within 24 hours on business days. Your questions are important to us, and we will be delighted to provide you with the information you seek.",
			},
			about: {
				name: allPageNames.about,
				link: allPageLinks.about,
				images: {},
				title: "Our team",
				subtitle:
					"At TPW, we believe that every house has the potential to become a dream home. Founded by Tom Wintle, a visionary in the world of home renovation and construction, TPW is dedicated to transforming houses into spaces that inspire, comfort, and enrich the lives of our clients.",
			},
			news: {
				name: allPageNames.news,
				link: allPageLinks.news,
				images: {},
				title: "News",
				subtitle: "See all news.",
			},
			reviews: {
				name: allPageNames.reviews,
				link: allPageLinks.reviews,
				images: {},
				title: "All Reviews",
				subtitle: "Testing reviews subtitle",
			},
		},
		sections: {
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
			processOfElimination: {
				title: "Plan of Action",
				subtitle: "See how we plan you in.",
			},
			latestReviews: {
				title: "Latest Reviews",
				subtitle: "See what other people think.",
				btnText: btnCardReviewsText,
			},
			latestNews: {
				title: "Latest News",
				subtitle: "See what is happening right now.",
			},
		},
		card: {
			rating: {
				title: "Rating overview",
				total: "Total ratings",
				max: "/5",
				btnText: "See all reviews",
			},
			canvas: {
				pages: {
					home: {
						title: "Create Your Tomorrow",
						subtitle: "Assemble your dream home today with our team of experts.",
						btnText: btnCardBeInspiredText,
					},
					kitchen: {
						title: allPageNames.kitchen,
						subtitle: "Hash your recipies with our interactive entities.",
						btnText: btnCardBeInspiredText,
					},
					bathroom: {
						title: allPageNames.bathroom,
						subtitle: "Own your restroom with our pristine collections.",
						btnText: btnCardBeInspiredText,
					},
					newbuild: {
						title: allPageNames.newbuild,
						subtitle: "Structure new homes with our hasty reinforced foundations.",
						btnText: btnCardBeInspiredText,
					},
					extension: {
						title: allPageNames.extension,
						subtitle: "Mammoth your space with our innovative styles.",
						btnText: btnCardBeInspiredText,
					},
					refurbishment: {
						title: allPageNames.refurbishment,
						subtitle: "Enlighten and re-establish your home with our ingenuious designs.",
						btnText: btnCardBeInspiredText,
					},
					contact: {
						title: `${allPageNames.contact} Us`,
						subtitle: "Get in touch and we will power up your projects together.",
						btnText: "Contact Us?",
					},
					about: {
						title: `${allPageNames.about} Us`,
						subtitle: "Discover our passion for technology and innovation.",
						btnText: "See Team?",
					},
					news: {
						title: `Our ${allPageNames.news}`,
						subtitle: "Stay updated with the latest tech trends and innovations",
						btnText: "See News?",
					},
					reviews: {
						title: `Our ${allPageNames.reviews}`,
						subtitle: "Discover home renovation gems: insights from real homeowners",
						btnText: btnCardReviewsText,
					},
				},
			},
			reviews: {
				location: "Location",
			},
		},
		dropdown: {
			carousel: {
				items: {
					kitchen: allPageNames.kitchen,
					bathroom: allPageNames.bathroom,
					newbuild: allPageNames.newbuild,
					extension: allPageNames.extension,
					refurbishment: allPageNames.refurbishment,
				},
				label: "Choose environment",
			},
		},
		carousel: {},
		main: {},
		footer: {
			navigation: {
				pageItems: {
					names: mainPageNames,
					links: mainPageLinks,
				},
				infoItems: {
					names: infoPageNames,
					links: infoPageLinks,
				},
			},
			copyrightText: "TPW Home Developments, All Rights Reserved",
			location: "United Kingdom - Cambridgeshire - March",
		},
		...VuetifyDefaultLocaleMessages,
	},
};

export default en;
