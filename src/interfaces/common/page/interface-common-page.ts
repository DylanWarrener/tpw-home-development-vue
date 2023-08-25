import {
    IHomeCardTextualData,
    IKitchenCardTextualData,
    IBathroomCardTextualData,
    INewbuildCardTextualData,
    IExtensionCardTextualData,
    IRefurbishmentCardTextualData,
    IContactCardTextualData,
    IAboutCardTextualData,
} from "../card/interface-common-card";

// Locale textual data
export default interface ICommonPageTextualData {
    name: ICommonPageStringTextualData;
    link?: ICommonPageStringTextualData;
    icon?: ICommonPageStringTextualData;
}

export interface ICommonPageStringTextualData {
    home: string;
    kitchen: string;
    bathroom: string;
    newbuild: string;
    extension: string;
    refurbishment: string;
    contact: string;
    about: string;
    news: string;
}

export interface ICommonPageCardTextualData {
    home: IHomeCardTextualData;
    kitchen: IKitchenCardTextualData;
    bathroom: IBathroomCardTextualData;
    newbuild: INewbuildCardTextualData;
    extension: IExtensionCardTextualData;
    refurbishment: IRefurbishmentCardTextualData;
    contact: IContactCardTextualData;
    about: IAboutCardTextualData;
}
