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
		retVal = /^([a-z]{3,}(\s+)?).+$/.test(newValue.toLowerCase());

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
/**
 * Checks that the supplied value is a valid username for an email.
 * @param {Function} translationFunction - The function to translate the value.
 * @param {string} newValue - The value to check.
 * @returns {boolean|string} - True, if the value is a valid username for an email, otherwise returns the key to the error text.
 */
export function isUsernameValid(translationFunction: Function, newValue: string): boolean | string {
	let retVal: boolean | string = false;
	if (!!newValue) {
		retVal = /^([a-z\d\.-]{3,}).+$/.test(newValue.toLowerCase());

		if (!retVal) retVal = translationFunction("common.validation.email.invalidUsername");
	}
	return retVal;
}
/**
 * Checks that the supplied value contains an @ symbol within the email.
 * @param {Function} translationFunction - The function to translate the value.
 * @param {string} newValue - The value to check.
 * @returns {boolean|string} - True, if the value contains an @ symbol within the email, otherwise returns the key to the error text.
 */
export function isSymbolAtPresent(translationFunction: Function, newValue: string): boolean | string {
	let retVal: boolean | string = false;
	if (!!newValue) {
		retVal = /^([a-z\d\.-]+)@(.+)?$/.test(newValue.toLowerCase());

		if (!retVal) retVal = translationFunction("common.validation.email.invalidAt");
	}
	return retVal;
}
/**
 * Checks that the supplied value is a valid mail server within the email.
 * @param {Function} translationFunction - The function to translate the value.
 * @param {string} newValue - The value to check.
 * @returns {boolean|string} - True, if the value is a valid mail server within the email, otherwise returns the key to the error text.
 */
export function isMailServerValid(translationFunction: Function, newValue: string): boolean | string {
	let retVal: boolean | string = false;
	if (!!newValue) {
		retVal = /^([a-z\d\.-]+)@([a-z\d-]{2,})(.+)?$/.test(newValue.toLowerCase());

		if (!retVal) retVal = translationFunction("common.validation.email.invalidMailServer");
	}
	return retVal;
}
/**
 * Checks that the supplied value is a valid domain within the email.
 * @param {Function} translationFunction - The function to translate the value.
 * @param {string} newValue - The value to check.
 * @returns {boolean|string} - True, if the value is a valid domain within the email, otherwise returns the key to the error text.
 */
export function isDomainValid(translationFunction: Function, newValue: string): boolean | string {
	let retVal: boolean | string = false;
	if (!!newValue) {
		retVal = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})\.?([a-z]{2,8})?$/.test(newValue.toLowerCase());

		if (!retVal) retVal = translationFunction("common.validation.email.invalidDomain");
	}
	return retVal;
}
