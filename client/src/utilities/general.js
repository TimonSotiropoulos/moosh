// *******************************************************
// Utilities - General Helper Functinos
// -------------------------------------------------------
// This file contains general utility functions
// -------------------------------------------------------

/**
 * @function WAIT
 * Pauses execution for a set period of time useful for simulating
 * loading situations
 * @returns none
 */
export const WAIT = ms => new Promise((r, j)=>setTimeout(r, ms));

/**
 * @function swapArrayElements
 * Swaps two elements inside an array
 * @param array - Initial Array containing the elements to swap
 * @param indexA - position of first array item
 * @param indexB - position of secont array item
 * @return array with elements swapped
 */
export const swapArrayElements = (arr, indexA, indexB) => {
    var temp = arr[indexA];
    arr[indexA] = arr[indexB];
    arr[indexB] = temp;
    return arr;
};

/**
 * @function itemIsInArray
 * Looks for the given item inside an array
 * @returns {Boolean} Boolean - A True or False reponse
 */
export const itemIsInArray = (array, key) => {
    return array.includes(key);
}

/**
 * @function itemIsNotInArray
 * Looks for the given item inside an array
 * @returns {Boolean} Boolean - A True or False reponse
 */
export const itemIsNotInArray = (array, key) => {
    return !array.includes(key);
}

/**
 * @function addItemToArray
 * Creates a new array by merging the provided array with the new value
 * @returns {Array} Array - A new array containing all the previous values and the new one
 */
export const addItemToArray = (array, value) => {
    return array.concat([value]);
}

/**
 * @function removeArrayOfItemsFromArray
 * Creates a new array by merging the provided array with the new value
 * @returns {Array} Array - A new array with the array of values removed
 */
export const removeArrayOfItemsFromArray = (array, values) => {
    let tempArray = array;
    values.forEach((value) => {
        tempArray = removeItemFromArray(tempArray, value);
    });
    return tempArray;
}

/**
 * @function removeItemFromArray
 * Removes the item in the array that needs to be removed and returns a new
 * instance of the array
 * @returns {Array} Array - A new array with the provided value removed
 */
export const removeItemFromArray = (array, value) => {
    if (itemIsNotInArray(array, value)) {
        return array;
    }
    const indexToRemove = array.indexOf(value);
    const startOfArray = array.slice(0, indexToRemove);
    const endOfArray = array.slice(indexToRemove + 1);
    return startOfArray.concat(endOfArray);
}


/**
 * @function searchArrayInArrayForItem
 * @description determine if an array contains one or more items from another array.
 * @param {array} haystack the array to search.
 * @param {array} arr the array providing items to check for in the haystack.
 * @return {boolean} true|false if haystack contains at least one item from arr.
 */
export const searchArrayInArrayForItem = function (haystack, arr) {
    return arr.some(function (v) {
        return haystack.indexOf(v) >= 0;
    });
};

/**
 * @function transformArrayToUppercase
 * @description transform array elements to uppercase
 * @param {array} haystack the array to search.
 * @param {array} arr the array providing items to check for in the haystack.
 * @return {boolean} true|false if haystack contains at least one item from arr.
 */
export const transformArrayToUppercase = (array) => {
    return array.map((item) => {
        return item.toUpperCase();
    })
};


/**
 * @function translateNumberToNewRange
 * Transforms a value from one range of numbers to the new range
 * @returns {Number} Number - A translated number
 */
export const translateNumberToNewRange = (input, inputRange, outputRange) => {
    const output = ((input - inputRange.low) / (inputRange.high - inputRange.low)) * (outputRange.high - outputRange.low) + outputRange.low;
    return output;
}

/**
 * @function getCurrentMonth
 * Gets a well formatted month using todays current date.
 * @returns {String} String - A string of the returned date
 */
export const getCurrentMonth = (input, inputRange, outputRange) => {
    var d = new Date();
    var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November",  "December"];
    return month[d.getMonth()];
}
