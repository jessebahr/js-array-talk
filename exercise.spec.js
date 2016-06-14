var exercise = require('./exercise.js');

/**
 * Jasmine tests for the exercise
 *
 * Setup:
 * npm install
 *
 * Run:
 * npm test
 *
 *
 * remove the "x" from "xdescribe" when you're ready for the next one.
 */

describe('flattenArray()', function(){
	it('returns an array', function(){
		var result = exercise.flattenArray([[0]]);

		expect(Array.isArray(result)).toBe(true);
	});

	it('flattens a single array', function(){
		var result = exercise.flattenArray([[0]]);

		expect(result[0]).toBe(0);
	});

	it('flattens 2 arrays', function(){
		var result = exercise.flattenArray([[1], [2]]);

		expect(result[0]).toBe(1);
		expect(result[1]).toBe(2);
	});

	it('flattens arrays with lots of stuff in them', function(){
		var result = exercise.flattenArray([[5,6], [7,8]]);

		expect(result[0]).toBe(5);
		expect(result[1]).toBe(6);
		expect(result[2]).toBe(7);
		expect(result[3]).toBe(8);
	});

	it('handles an empty array', function(){
		var result = exercise.flattenArray([]);

		expect(result.length).toBe(0);
	});

	it('handles multiple empty arrays', function(){
		var result = exercise.flattenArray([[9], [], [10]]);

		expect(result.length).toBe(2);
		expect(result[0]).toBe(9);
		expect(result[1]).toBe(10);
	});
});

xdescribe('flattenArrayWithField()', function(){
	//these are basically the same tests

	it('returns an array', function(){
		var result = exercise.flattenArrayWithField([{arr: [0]}]);

		expect(Array.isArray(result)).toBe(true);
	});

	it('flattens a single array', function(){
		var result = exercise.flattenArrayWithField([{arr: [0]}]);

		expect(result[0]).toBe(0);
	});

	it('flattens 2 arrays', function(){
		var result = exercise.flattenArrayWithField([{arr: [1]}, {arr: [2]}]);

		expect(result[0]).toBe(1);
		expect(result[1]).toBe(2);
	});

	it('flattens arrays with lots of stuff in them', function(){
		var result = exercise.flattenArrayWithField([{arr: [5,6]}, {arr: [7,8]}]);

		expect(result[0]).toBe(5);
		expect(result[1]).toBe(6);
		expect(result[2]).toBe(7);
		expect(result[3]).toBe(8);
	});

	it('handles an empty array', function(){
		var result = exercise.flattenArrayWithField([]);

		expect(result.length).toBe(0);
	});

	it('handles multiple empty arrays', function(){
		var result = exercise.flattenArrayWithField([{arr: [9]}, {arr: []}, {arr: [10]}]);

		expect(result.length).toBe(2);
		expect(result[0]).toBe(9);
		expect(result[1]).toBe(10);
	});
});

xdescribe('flattenArrayWithField handles nulls', function(){
	it('skips an object without an "arr" field', function(){
		var result = exercise.flattenArrayWithField([{arr: [1]}, {}, {arr: [2]}]);

		expect(result[0]).toBe(1);
		expect(result[1]).toBe(2);
	});

	it('skips a null object', function(){
		var result = exercise.flattenArrayWithField([{arr: [7]}, null, {arr: [8]}]);

		expect(result[0]).toBe(7);
		expect(result[1]).toBe(8);
	});
});

xdescribe('totalByCountry()', function(){
	it('makes a lookup for people from the UK', function(){
		var result = exercise.totalByCountry([
			{name: 'Asdf Qwerty', country: 'uk'},
			{name: 'Jkl Dvorak', country: 'uk'}
		]);

		expect(result.uk).toBe(2);
	});

	it('includes 2 countries', function(){
		var result = exercise.totalByCountry([
			{name: 'Asdf Qwerty', country: 'uk'},
			{name: 'Jkl Dvorak', country: 'us'}
		]);

		expect(result.uk).toBe(1);
		expect(result.us).toBe(1);
	});

	it('leaves out people with falsey countries', function(){
		var result = exercise.totalByCountry([
			{name: 'Asdf Qwerty', country: 'uk'},
			{name: 'Jkl Dvorak'},
			{name: 'Fred Simpson', country: null},
			{name: 'Homer Griffin', country: false}
		]);

		expect(result.uk).toBe(1);
		expect(result[undefined]).not.toBeDefined();
		expect(result[null]).not.toBeDefined();
		expect(result[false]).not.toBeDefined();
	});

	it('fixes "usa" to "us"', function(){
		var result = exercise.totalByCountry([
			{name: 'Fred Simpson', country: 'us'},
			{name: 'Homer Griffin', country: 'usa'}
		]);

		expect(result.us).toBe(2);
	});
});