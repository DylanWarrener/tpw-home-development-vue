// Interfaces
import ICommonRegex from "@interfaces/common/regex/interfaces-common-regex";

// Regex
const regexPatterns: ICommonRegex = {
	strings: {
		isGreaterThanThreeCharacters: /^([a-z]{3,}(\s+)?)+$/,
		isGreaterThanThreeWords: /^([a-z]{3,}(\s+)?){4,}$/,
	},
};

/**
 * Checks that the supplied value is not empty.
 * @param {Function} translationFunction - The function to translate the value.
 * @param {string} newValue - The value to check.
 * @returns {boolean|string} - True, if the value is not empty, otherwise returns the key to the error text.
 */
export function isNotEmpty(translationFunction: Function, newValue: string): boolean | string {
	return !!newValue || translationFunction("common.validation.empty");
}
/**
 * Checks that the supplied value is >= 3 characters.
 * @param {Function} translationFunction - The function to translate the value.
 * @param {string} newValue - The value to check.
 * @returns {boolean|string} - True, if the value is greater than three words, otherwise returns the key to the error text.
 */
export function isGreaterThanThreeCharacters(translationFunction: Function, newValue: string): boolean | string {
	let retVal: boolean | string = false;
	if (!!newValue) {
		retVal = regexPatterns.strings.isGreaterThanThreeCharacters.test(newValue.toLowerCase());

		if (!retVal) retVal = translationFunction("common.validation.lessThanThreeCharacters");
	}
	return retVal;
}
/**
 * Checks that the supplied value is < 3 words.
 * @param {Function} translationFunction - The function to translate the value.
 * @param {string} newValue - The value to check.
 * @returns {boolean|string} - True, if the value is greater than three words, otherwise returns the key to the error text.
 */
export function isLessThanThreeWords(translationFunction: Function, newValue: string): boolean | string {
	let retVal: boolean | string = false;
	if (!!newValue) {
		retVal = /^([a-z]{3,}(\s+)?){1,3}$/.test(newValue.toLowerCase());

		if (!retVal) retVal = translationFunction("common.validation.greaterThanThreeWords");
	}
	return retVal;
}
