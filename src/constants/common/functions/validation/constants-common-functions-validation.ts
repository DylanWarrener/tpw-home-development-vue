// Validation helper functions
import {
	isGreaterThanThreeCharacters,
	isLessThanThreeWords,
	isUsernameValid,
	isSymbolAtPresent,
	isMailServerValid,
	isDomainValid,
	isNotEmpty,
} from "@constants/common/functions/validation/helpers/constants-common-functions-validation-helpers";

// Interfaces
//import { ICommonValidatorsName, ICommonValidatorsEmail } from "@declaration/common/interfaces/validation/interface-common-validation";

// In order of execution
const nameValidators = {
	isGreaterThanThreeCharacters,
	isLessThanThreeWords,
};
const emailValidators = {
	isGreaterThanThreeCharacters,
	isUsernameValid,
	isSymbolAtPresent,
	isMailServerValid,
	isDomainValid,
};

/**
 * Checks that the supplied value is a valid name.
 * @param {Function} translationFunction - The function to translate the value.
 * @param {string} newValue - The value to check.
 * @returns {boolean|string} - True, if the value is a valid name, otherwise returns the key to the error text.
 */
export function isNameValid(translationFunction: Function, newValue: string): boolean | string {
	let retVal: boolean | string = false;
	if (!!newValue) {
		for (const [_, validatorFunction] of Object.entries(nameValidators)) {
			retVal = validatorFunction(translationFunction, newValue);
			if (typeof retVal === "string") return retVal;
		}
	} else {
		retVal = isNotEmpty(translationFunction, newValue);
		if (typeof retVal === "string") return retVal;
	}
	return retVal;
}
/**
 * Checks that the supplied value is a valid email.
 * @param {Function} translationFunction - The function to translate the value.
 * @param {string} newValue - The value to check.
 * @returns {boolean|string} - True, if the value is a valid email, otherwise returns the key to the error text.
 */
export function isEmailValid(translationFunction: Function, newValue: string): boolean | string {
	let retVal: boolean | string = false;
	if (!!newValue) {
		for (const [_, validatorFunction] of Object.entries(emailValidators)) {
			retVal = validatorFunction(translationFunction, newValue);
			if (typeof retVal === "string") return retVal;
		}
	} else {
		retVal = isNotEmpty(translationFunction, newValue);
		if (typeof retVal === "string") return retVal;
	}
	return retVal;
}
