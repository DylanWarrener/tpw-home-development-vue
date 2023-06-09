import { ThemeDefinition } from "vuetify";

const themeLight: ThemeDefinition = {
	dark: false,
	colors: {
		background: "#FFFFFF",
		surface: "#FFFFFF",
		primary: "#6200EE",
		"primary-darken-1": "#3700B3",
		secondary: "#03DAC6",
		"secondary-darken-1": "#018786",
		error: "#B00020",
		info: "#2196F3",
		success: "#4CAF50",
		warning: "#FF0000",
	},
};

export const themeDark: ThemeDefinition = {
	dark: true,
	colors: {
		background: "#FFFFFF",
		surface: "#FFFFFF",
		primary: "#6200EE",
		"primary-darken-1": "#3700B3",
		secondary: "#03DAC6",
		"secondary-darken-1": "#018786",
		error: "#B00020",
		info: "#2196F3",
		success: "#4CAF50",
		warning: "#FF0000",
	},
};

export default themeLight;
