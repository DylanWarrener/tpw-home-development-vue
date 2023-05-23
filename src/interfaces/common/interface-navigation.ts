export interface INavigationIconTextualData {
    menu: string
    person: string
    shoppingBasket: string
}

export interface INavigationPageTextualData {
    about: string
    bathroom: string
    contact: string
    extension: string
    home: string
    kitchen: string
    newbuild: string
    refurbishment: string
}

interface INavigationTextualData {
    icons: INavigationIconTextualData
	links: INavigationPageTextualData
	text: INavigationPageTextualData
}

export default INavigationTextualData