/**
 * an exercise left for you. Use Array methods to implement these!
 */


/**
 * flatten the array of arrays so that the values of the second-level arrays are pulled up to be directly in the resulting array.
 * @param arrayOfArrays {Array[]} - an array of arrays, e.g. [[1], [2,3]]
 * @return {Array} - the flattened array, e.g. [1, 2, 3]
 */
function flattenArray(arrayOfArrays){
	//todo
}


/**
 * same as flattenArray, but with the second-level arrays inside of an object with field "arr"
 * @param arrayOfArrayFields {Object[]} - an array of objects with "arr" field, e.g. [{arr: [1]}, {arr: [2,3]}]
 * @return {Array} - the flattened array, e.g. [1, 2, 3]
 */
//try to reuse some of the code in flattenArray() for this one - especially the function passed into reduce()
function flattenArrayWithField(arrayOfArrayFields){
	//todo
}


/**
 * given the users, create a lookup object from country name to number of users in that country.
 * @param arrayOfUsers {Object[]} - an array of users that looks like this: {name: string, country: string}
 * @return {Object} a lookup from country to number.
 */
//Be aware that while our validation was broken, some people put in "usa" instead of "us"!
// Also, some people didn't put a country at all! You can just leave those out.
function totalByCountry(arrayOfUsers){
	//todo
}




module.exports = {
	flattenArray: flattenArray,
	flattenArrayWithField: flattenArrayWithField,
	totalByCountry: totalByCountry
};
