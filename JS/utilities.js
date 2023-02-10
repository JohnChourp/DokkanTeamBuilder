//1. The function `removeDuplicates` takes one parameter: `arr`, which is an array that you want to remove duplicates from.
//2. Inside the function, a new `Set` object is created from `arr` using the spread operator `(...)`.
//The spread operator collects all the elements of `arr` and spreads them out into the `Set` constructor, which creates a new set from the elements.
//3. Because a `Set` only allows unique values, all duplicates will be automatically removed when the `Set` is created.
//4. The spread operator is then used again to convert the `Set` back into an array, which is stored in the result.
//5. Finally, the result is returned by the function.
//So, the purpose of this function is to remove duplicates from an array. 
//By using the `Set` object, the function takes advantage of its optimized uniqueness checks to efficiently remove duplicates. 
//The spread operator is used to convert the `Set` into an array, making it easier to work with the result.
function removeDuplicates(arr) {
	return [...new Set(arr)];
}



//1. `Array(rows)` creates an array with `rows` number of empty slots, which are `undefined` by default.
//2. `fill()` method is used to fill all the slots in the array with a specific value, in this case `null`.
//3. `map()` method is then used to iterate over each slot of the array and transform it into a new array of the desired length, specified by the `columns` argument.
//4. `Array(columns).fill()` creates an array with `columns` number of empty slots, which are `null` due to the `fill()` method being called with no arguments.
//5. Finally, `map()` returns an array of arrays with the desired dimensions, where each inner array is of length `columns` and filled with `null`.
//This function creates a 2-dimensional array of size `rows` by `columns` filled with `null` values.
//Version 1
// function create2DimensionalArray(rows, columns) {
// 	return Array.from(Array(rows), () => new Array(columns));
// }

//Version 2
// function create2DimensionalArray(rows, columns) {
// 	return Array(rows).fill(null).map(() => Array(columns));
// }
//Version 3
function create2DimensionalArray(rows, columns) {
	return Array(rows).fill().map(() => Array(columns).fill());
}

// the function `cleanArray` is a function that takes an array `arr` and a value deleteValue as its arguments.
// The purpose of the function is to return a new array that does not contain the `deleteValue` element.
// The function achieves this by using the `filter` method of the Array object. 
// The filter method creates a new array with all elements that pass the test implemented by the provided function. 
// In this case, the provided function is an anonymous arrow function that takes `val` as an argument and returns `true` if `val` is not equal to `deleteValue`, and `false` otherwise.
// The `filter` method only creates a new array with the desired values and returns it/
function cleanArray(arr, deleteValue) {
	return arr.filter(val => val !== deleteValue);
}



//1. The function `setAttributes` takes two parameters: `elem` and `...attrs`. 
//`elem` is an element to which attributes will be set, while `...attrs` is the spread operator that collects all the remaining arguments into an array.
//2. The function uses a for loop to iterate over the `attrs` array. 
//The loop starts from `0` and continues until `i` is less than the length of `attrs`.
//3. Inside the loop, the function sets an attribute for the `elem` element by calling the `setAttribute` method. 
//The first argument passed to `setAttribute` is the attribute name, which is stored in `attrs[i]`. 
//The second argument is the attribute value, which is stored in `attrs[i + 1]`.
//4. The loop increments `i` by 2 after each iteration, so that it accesses the attribute name and value pairs in the `attrs` array in the correct order.
//5. When the loop completes, all the attributes have been set for the `elem` element.
//So, the purpose of this function is to make it easier to set multiple attributes for an element in one call, instead of having to make separate calls to `setAttribute` for each attribute. 
//The function takes advantage of the spread operator to collect all the attribute-value pairs into an array, making it more flexible and easier to work with.
function setAttributes(elem, ...attrs) {
	for (var i = 0; i < attrs.length; i += 2) {
		elem.setAttribute(attrs[i], attrs[i + 1]);
	}
}