// Interfaces
import ICommonThemes from "../interfaces/common/themes/interface-common-theme";

// Colours
import colors from "vuetify/lib/util/colors";

const colours: any = {
	primary: "#8E898D",
	secondary: "#3C354E",
	accent: "#7F017F",
	white: "#FFFFFF",
	black: "#000000",
	red: "#FF0000",
	green: "#00FF00",
	blue: "#0000FF",
	yellow: "#FFFF00",
	orange: "#FFA500",
};

export const light: ICommonThemes = {
	dark: false,
	colors: {
		default: colours.black,
		inverted: colours.white,
		primary: colours.primary,
		secondary: colours.secondary,
		accent: colors.purple.darken3,
		white: colours.white,
		black: colours.black,
		footer: colours.white,
		error: colours.red,
		warning: colours.orange,
		info: colours.yellow,
		success: colours.green,
		"background-primary": colours.primary,
		"background-secondary": colours.white,
		"section-primary": colours.primary,
		"section-secondary": colours.white,
	},
};

export const dark: ICommonThemes = {
	dark: true,
	colors: {
		default: colours.white,
		inverted: colours.black,
		primary: colours.primary,
		secondary: colours.secondary,
		accent: colors.purple.lighten2,
		white: colours.white,
		black: colours.black,
		footer: colours.white,
		error: colours.red,
		warning: colours.orange,
		info: colours.yellow,
		success: colours.green,
		"background-primary": colours.secondary,
		"background-secondary": colours.black,
		"section-primary": colours.secondary,
		"section-secondary": colours.black,
	},
};
