export default interface ICommonRegex {
	strings: ICommonRegexStrings;
}
export interface ICommonRegexStrings {
	isGreaterThanThreeCharacters: RegExp;
	isGreaterThanThreeWords: RegExp;
}
