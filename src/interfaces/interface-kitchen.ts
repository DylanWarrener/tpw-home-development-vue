export interface IQuoteBoxTextualData {
    heading: string
    quote: string
}

export interface ICanvasTextualData {
    quoteBox: IQuoteBoxTextualData 
}

export interface IKitchenTextualData {
    canvas: ICanvasTextualData
}

export default interface IKitchenBaseData {
    textualData: IKitchenTextualData
}