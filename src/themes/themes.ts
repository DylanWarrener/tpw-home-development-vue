import { ThemeDefinition } from "vuetify";

const themeLight: ThemeDefinition = {
	dark: false,
	colors: {
		primary: "#777494",
		secondary: "#3d3a4f",
		accent: "#7f017f",
		white: "#FFFFFF",
		black: "#000000",
		background: "",
		surface: "",
		error: "#B00020",
		info: "",
		success: "",
		warning: "#FF0000",
		"primary-darken-1": "#3700B3",
		"secondary-darken-1": "#018786",
	},
};

export const themeDark: ThemeDefinition = {
	dark: true,
	colors: {
		primary: "#3d3a4f",
		secondary: "#777494",
		accent: "#6813A4",
		white: "#FFFFFF",
		black: "#000000",
		background: "",
		surface: "",
		error: "#B00020",
		info: "",
		success: "",
		warning: "#FF0000",
		"primary-darken-1": "#3700B3",
		"secondary-darken-1": "#018786",
	},
};

export default themeLight;
