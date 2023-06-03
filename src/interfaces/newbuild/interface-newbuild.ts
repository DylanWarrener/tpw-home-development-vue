export interface IQuoteBoxTextualData {
    heading: string
    quote: string
}

export interface ICanvasTextualData {
    quoteBox: IQuoteBoxTextualData 
}

export interface INewbuildTextualData {
    canvas: ICanvasTextualData
}

export default interface INewbuildBaseData {
    textualData: INewbuildTextualData
}