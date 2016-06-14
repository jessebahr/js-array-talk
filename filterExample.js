

function removeFalsey(arr){
	return arr.filter(function(value){
		return value;
	});
}

function getEvenValues(arr){
	return arr.filter(function(value, i){
		return i % 2; //index 0 is item #1
	});
}

function getItemsByState(arr, state){
	return arr.filter(function(value){
		return value.state === state;
	});
}






















