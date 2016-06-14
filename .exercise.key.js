/**
 * answers!!!!
 *
 * don't look at these. srsly you're going to be in trouble.
 */

function flattenReduction(prev, curr){
	return prev.concat(curr);
}


function flattenArray(arrayOfArrays){
	return arrayOfArrays.reduce(flattenReduction, []);
}



function pluckArr(obj){
	return obj.arr;
}


function identity(arg){ return arg; }

function flattenArrayWithField(arrayOfArrayFields){
	return arrayOfArrayFields.
		filter(identity).
		map(pluckArr).
		filter(identity).
		reduce(flattenReduction, []);

	/* answer for the first "describe", where you don't need to check for nulls:
	return arrayOfArrayFields.
		map(pluckArr).
		reduce(flattenReduction, []);
	*/
}


function pluckCountry(user){
	return user.country;
}

function fixUSA(country){
	if (country === 'usa')
		return 'us';

	return country;
}

function toLookupReduction(prevMap, currCountry){
	if (!prevMap[currCountry])
		prevMap[currCountry] = 1;
	else
		prevMap[currCountry]++;

	return prevMap;
}

function totalByCountry(arrayOfUsers){
	return arrayOfUsers.
		map(pluckCountry).
		map(fixUSA).
		filter(identity).
		reduce(toLookupReduction, {});
}






module.exports = {
	flattenArray: flattenArray,
	flattenArrayWithField: flattenArrayWithField,
	totalByCountry: totalByCountry
};



