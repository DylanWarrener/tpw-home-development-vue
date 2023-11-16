// Void functions
export const scrollToElement = (elementsTopBorder: number): void => {
	window.scrollTo({
		top: elementsTopBorder,
		behavior: "smooth",
	});
};

// Return functions
export const compareEventStrings = (eventStrOne: string, eventStrTwo: string): boolean => {
	return eventStrOne === eventStrTwo ? true : false;
};

export const buildHtmlElement = (tag: string, classStyles?: string, text?: string): string => {
	return `<${tag} class="${classStyles}">${text}</${tag}>`;
};
