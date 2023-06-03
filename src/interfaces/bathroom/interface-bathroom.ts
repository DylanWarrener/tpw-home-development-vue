export interface IQuoteBoxTextualData {
    heading: string
    quote: string
}

export interface ICanvasTextualData {
    quoteBox: IQuoteBoxTextualData 
}

export interface IBathroomTextualData {
    canvas: ICanvasTextualData
}

export default interface IBathroomBaseData {
    textualData: IBathroomTextualData
}