export interface IQuoteBoxTextualData {
    heading: string
    quote: string
}

export interface ICanvasTextualData {
    quoteBox: IQuoteBoxTextualData 
}

export interface IAboutTextualData {
    canvas: ICanvasTextualData
}

export default interface IAboutBaseData {
    textualData: IAboutTextualData
}