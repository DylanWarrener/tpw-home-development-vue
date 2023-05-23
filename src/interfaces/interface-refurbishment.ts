export interface IQuoteBoxTextualData {
    heading: string
    quote: string
}

export interface ICanvasTextualData {
    quoteBox: IQuoteBoxTextualData 
}

export interface IRefubishmentTextualData {
    canvas: ICanvasTextualData
}

export default interface IRefubishmentBaseData {
    textualData: IRefubishmentTextualData
}