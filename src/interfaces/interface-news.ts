export interface IQuoteBoxTextualData {
    heading: string
    quote: string
}

export interface ICanvasTextualData {
    quoteBox: IQuoteBoxTextualData 
}

export interface INewsTextualData {
    canvas: ICanvasTextualData
}

export default interface INewsBaseData {
    textualData: INewsTextualData
}