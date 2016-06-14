
//don't use, this is the broken example!
function sum(arr){
	return arr.reduce(function(prev, curr){
		return prev + curr;
	});
}


function makeExistenceLookup(arr){
	return arr.reduce(function(prev, curr){
		prev[curr] = true;
		return prev;
	}, {});
}





function sumFixed(arr){
	return arr.reduce(function(prev, curr){
		return prev + curr;
	}, 0);
}
sum([5, 10, 20]);







sum(); makeExistenceLookup(); sumFixed();