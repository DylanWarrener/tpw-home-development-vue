// Void functions
export const scrollToElement = (elementsTopBorder: number): void => {
  window.scrollTo({
    top: elementsTopBorder,
    behavior: "smooth",
  });
};
