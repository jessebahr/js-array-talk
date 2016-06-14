

function parseInts(arr){
	return arr.map(parseInt);
}

function toUsernames(arr){
	return arr.map(function(value){
		return value.username;
	});
}

function makeAlternatingColors(arr){
	var colors = ['aliceblue', 'chartreuse'];
	return arr.map(function(value, i){
		return colors[i % 2];
	})
}








