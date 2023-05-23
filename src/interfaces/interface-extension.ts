export interface IQuoteBoxTextualData {
    heading: string
    quote: string
}

export interface ICanvasTextualData {
    quoteBox: IQuoteBoxTextualData 
}

export interface IExtensionTextualData {
    canvas: ICanvasTextualData
}

export default interface IExtensionBaseData {
    textualData: IExtensionTextualData
}