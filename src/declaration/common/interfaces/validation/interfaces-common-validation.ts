// Types
//import type { TFunctionValidator } = typeof import("@")

//type TFunctionValidator = (translationFunction: Function, newValue: string) => boolean | string;

import type { TFunctionValidator } from "@src/declaration/types/functions/validation/declaration-functions-validation";

/* Validator interfaces */
export interface ICommonValidatorsName {
	isGreaterThanThreeCharacters: TFunctionValidator;
	isLessThanThreeWords: TFunctionValidator;
}
export interface ICommonValidatorsEmail {
	isGreaterThanThreeCharacters: TFunctionValidator;
	isUsernameValid: TFunctionValidator;
	isSymbolAtPresent: TFunctionValidator;
	isMailServerValid: TFunctionValidator;
	isDomainValid: TFunctionValidator;
}
