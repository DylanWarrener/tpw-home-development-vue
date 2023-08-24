// Void functions
export const scrollToElement = (elementsTopBorder: number): void => {
    window.scrollTo({
        top: elementsTopBorder,
        behavior: "smooth",
    });
};

export const selectingElementToScrollTo = (
    element: string,
    eventID: number,
    pageName: string,
    btnText: string,
    id: string,
    appBarHeight: number
): void => {
    const chosenElement: any = document.getElementById(id);

    if (comparableElement === `${eventID}_${pageName.toString()}_${btnText.toLowerCase()}`) {
        scrollToElement(chosenElement!.offsetTop - appBarHeight);
    }
};

// Return functions
