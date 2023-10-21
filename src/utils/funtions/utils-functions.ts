// Interfaces
import { INewsArticlesState } from "@interfaces/news/interface-news";

// Void functions
export const scrollToElement = (elementsTopBorder: number): void => {
    window.scrollTo({
        top: elementsTopBorder,
        behavior: "smooth",
    });
};

// Return functions
export const navigateTo = () => {};
export const compareEventStrings = (eventStrOne: string, eventStrTwo: string): boolean => {
    return eventStrOne === eventStrTwo ? true : false;
};
export const buildEventString = (eventID: number, pageRouteName: any, innerTextofElement: string): string => {
    return `${eventID}_${pageRouteName.toString()}_${innerTextofElement.toLowerCase()}`;
};
export const buildHtmlElement = (tag: string, classStyles?: string, text?: string): string => {
    return `<${tag} class="${classStyles}">${text}</${tag}>`;
};
export const SortArrayBy = (array: any, sortBy: "ascending" | "asc" | "descending" | "desc", objAccessName: string): any => {
    console.log("The array: ", array);
    console.log("The sortBy: ", sortBy);
    console.log("The object access name: ", objAccessName);

    /*
		Step 1: Check the inputted array is not empty
		Step 2: Check the object access name is not empty
		Step 3: Create a deep copy of array
		Step 4: Check the copied array contains an object 
		Step 5: Convert array object value to lower case
		Step 6: Sort the copied array
	*/

    // Step 1
    const isArrayEmpty: boolean = IsArrayEmpty(array);
    console.log("Is the array parameter empty? ", isArrayEmpty);

    // Step 2
    const isObjAccessNameEmpty: boolean = objAccessName === "" ? true : false;
    console.log("Is the object access name empty? ", isObjAccessNameEmpty);

    let retVal: any;

    if (!isArrayEmpty && !isObjAccessNameEmpty) {
        // Step 3
        const arrayCopy: any = JSON.parse(JSON.stringify(array));

        // Step 4
        const isObjectInArray: boolean = arrayCopy.some((value) => {
            return typeof value === "object";
        });
        console.log("Is object in array? ", isObjectInArray);

        // Step 5
        let sortValueToLowerCase: INewsArticlesState[];

        /*
		= arrayCopy.map((item) => {
			item.article.title.text = item.article.title.text.toLowerCase();
			return item;
		});
		*/

        // Step 6
        if (isObjectInArray) {
            sortValueToLowerCase = arrayCopy.map((item) => {
                item.article.title.text = item.article.title.text.toLowerCase();
                return item;
            });
            console.log("Array copy to lowercase: ", arrayCopy);
        } else {
            sortValueToLowerCase = arrayCopy.map((item) => {
                return item.toLowerCase();
            });
            console.log("Array copy to lowercase: ", arrayCopy);
        }

        /*
        if (sortBy === "asc" || sortBy === "ascending") {
			if (!isObjectInArray) {
				arrayCopyToLowerCase.sort((a, b) => {
					return 1;
				});
			} else {
				arrayCopyToLowerCase.sort((a, b) => {
					if (a > b) return 1;
					if (a < b) return -1;
					return 0;
				});
			}
		}

		if (sortBy === "desc" || sortBy === "descending") {
			if (!isObjectInArray) {
				arrayCopyToLowerCase.sort((a, b) => {
					return -1;
				});
			} else {
				arrayCopyToLowerCase.sort((a, b) => {
					if (a > b) return -1;
					if (a < b) return 1;
					return 0;
				});
			}
		}
        */
    }
    return retVal;
};
export const ConvertArrayToLowerCase = (array: any, isObjectInArray: boolean, objAccessName: string): any => {
    let retVal = null;
    console.log("Object access name: ", objAccessName);
    if (!isObjectInArray) {
        console.log("Array does not contain an object");
        retVal = array.map((value) => {
            return value.toLowerCase();
        });
    } else {
        console.log("Array does contain an object");
        console.log(array);
        let test = array.map((value) => {
            return value;
        });
        console.log(test);
        /*
		retVal = array.map((value) => {
			return {
				value,
				//objAccessName: value[objAccessName].toLowerCase(),
			};
		});
		*/
    }
    return retVal;
};
export const IsArray = (array: any): boolean => {
    return IsArrayEmpty(array) && Array.isArray(array);
};
export const IsArrayEmpty = (array: any): boolean => {
    return array == null && array.length == 0;
};
export const IsObject = (object: Object): boolean => {
    return IsObjectEmpty(object) && typeof object === "object";
};
export const IsObjectEmpty = (object: Object): boolean => {
    return object != null;
};
