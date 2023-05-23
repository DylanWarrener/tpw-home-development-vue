export interface IFooterContactDetailStrings {
  email: string
  number: string
}

export interface IFooterIcons {
  backToTop: string
}

export interface IFooterSocialStrings {
  facebook: string
  instagram: string
  twitter: string
}

export interface IFooterTextualData {
  contactDetails: IFooterContactDetailStrings
  icons: IFooterIcons
  socials: {
    links: IFooterSocialStrings
    text: IFooterSocialStrings
  }
}

export default interface IFooterData {
  textualData: IFooterTextualData
}