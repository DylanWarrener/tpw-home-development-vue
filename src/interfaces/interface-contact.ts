export interface IQuoteBoxTextualData {
    heading: string
    quote: string
}

export interface ICanvasTextualData {
    quoteBox: IQuoteBoxTextualData 
}

export interface IContactTextualData {
    canvas: ICanvasTextualData
}

export default interface IContactBaseData {
    textualData: IContactTextualData
}