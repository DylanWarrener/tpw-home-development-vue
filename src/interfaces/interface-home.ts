export interface IQuoteBoxStrings {
	btnText: string
    quote: string
    heading: string
}

export interface IHomeTextualData {  
    canvas: {
        quoteBox: IQuoteBoxStrings
    }
}

export default interface IHomeBaseData {
    textualData: IHomeTextualData
}