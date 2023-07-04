// Void functions
export const scrollToElement = (ref: any): void => {
	ref.$el.scrollIntoView({
		behavior: "smooth",
	});
};
