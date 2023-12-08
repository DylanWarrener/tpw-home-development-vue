import { ThemeDefinition } from "vuetify";

export default interface ICommonThemes extends ThemeDefinition {
	dark: boolean;
	colors: {
		[key: string]: string | undefined;
	};
}
