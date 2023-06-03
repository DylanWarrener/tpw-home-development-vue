export interface IIcons {
  dropdown: string
}

export interface ITextualData {  
    cookies?: string
    icons: IIcons
    updates?: string
}

export default interface IHeaderData {
  textualData: ITextualData
  isSmallScreenSize: boolean
  isBurgerMenuActive: boolean
  isCookiesActive: boolean
  isUpdatesActive: boolean
  isNavHidden: boolean
  navOrientation: string
  navStatus: string
}