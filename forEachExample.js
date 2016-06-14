function sum_traditional_for(arr){
	var sum = 0;
	for (var i = 0, len = arr.length; i < len; i++){
		sum += arr[i];
	}

	return sum;
}

function sum_for_in(arr){
	var sum = 0;
	for (var i in arr){
		if (arr.hasOwnProperty(i))
			sum += arr[i];
	}

	return sum;
}

function sum_forEach(arr){
	var sum = 0;
	arr.forEach(function(value){
		sum += value;
	});

	return sum;
}



function matches(){}



function findSomething_traditional(arr, item){
	for (var i = 0, len = arr.length; i < len; i++){
		if (matches(arr[i], item))
			return arr[i];
	}
}



function findSomething_forEach(arr, item){
	arr.forEach(function(value){
		if (matches(value, item))
			return value;
	});
}



function makeIncrementingArray_traditional(arr){
	var result = [];

	for (var i = 0, len = arr.length; i < len; i++){
		result[i] = function(){
			return arr[i]++;
		};
	}

	return result;
}




function makeIncrementingArray_forEach(arr){
	var result = [];

	arr.forEach(function(value, i){
		result[i] = function(){
			return arr[i]++;
		};
	});

	return result;
}









