import {
	pageServiceNames,
	pageServiceLinks,
	pageInfoNames,
	pageInfoLinks,
	pageAllNames,
	pageAllLinks,
} from "@constants/common/utils/objects/constants-common-utils-objects";

// ---------------------------------------------------------------------------------------------------------
// PAGES
// ---------------------------------------------------------------------------------------------------------
export const pageServiceNamesAsArrayKeys: string[] = Object.keys(pageServiceNames).map((key) => key);
export const pageServiceNamesAsArrayValues: string[] = Object.entries(pageServiceNames).map((array) => array[1]);
export const pageServiceLinksAsArray: string[] = Object.keys(pageServiceLinks).map((key) => key);
export const pageInfoNamesAsArrayKeys: string[] = Object.keys(pageInfoNames).map((key) => key);
export const pageInfoNamesAsArrayValues: string[] = Object.entries(pageInfoNames).map((array) => array[1]);
export const pageInfoLinksAsArrayValues: string[] = Object.entries(pageInfoLinks).map((array) => array[1]);
export const pageAllNamesAsArrayKeys: string[] = Object.keys(pageAllNames).map((key) => key);
export const pageAllNamesAsArrayValues: string[] = Object.entries(pageAllNames).map((array) => array[1]);
export const pageAllLinksAsArrayValues: string[] = Object.entries(pageAllLinks).map((array) => array[1]);

// ---------------------------------------------------------------------------------------------------------
// DROPDOWNS
// ---------------------------------------------------------------------------------------------------------
export const dropdownOptions: string[] = [
	pageServiceNames.kitchen,
	pageServiceNames.bathroom,
	pageServiceNames.newbuild,
	pageServiceNames.extension,
	pageServiceNames.refurbishment,
];
