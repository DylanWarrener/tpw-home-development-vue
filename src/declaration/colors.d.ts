interface IBase {
	base: string;
	lighten5: string;
	lighten4: string;
	lighten3: string;
	lighten2: string;
	lighten1: string;
	darken1: string;
	darken2: string;
	darken3: string;
	darken4: string;
	accent1: string;
	accent2: string;
	accent3: string;
	accent4: string;
}

declare module "vuetify/lib/util/colors" {
	const red: IBase;
	const pink: IBase;
	const purple: IBase;
	const deepPurple: IBase;
	const indigo: IBase;
	const blue: IBase;
	const lightBlue: IBase;
	const cyan: IBase;
	const teal: IBase;
	const green: IBase;
	const lightGreen: IBase;
	const lime: IBase;
	const yellow: IBase;
	const amber: IBase;
	const orange: IBase;
	const deepOrange: IBase;
	const brown: IBase;
	const blueGrey: IBase;
	const grey: IBase;
	const shades: {
		black: string;
		white: string;
		transparent: string;
	};

	export default {
		red,
		pink,
		purple,
		deepPurple,
		indigo,
		blue,
		lightBlue,
		cyan,
		teal,
		green,
		lightGreen,
		lime,
		yellow,
		amber,
		orange,
		deepOrange,
		brown,
		blueGrey,
		grey,
		shades,
	};
}
