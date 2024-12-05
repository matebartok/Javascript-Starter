// forEach: Executes a function for each array element.
[1, 2, 3].forEach((value, index) => console.log(value, index)); // Logs each value and index

// map: Creates a new array by transforming each element.
const doubled = [1, 2, 3].map(x => x * 2); // [2, 4, 6]

// filter: Creates a new array with elements that satisfy a condition.
const evens = [1, 2, 3, 4].filter(x => x % 2 === 0); // [2, 4]

// reduce: Reduces an array to a single value.
const sum = [1, 2, 3].reduce((acc, curr) => acc + curr, 0); // 6

// reduceRight: Like reduce, but works from right to left.
const reversedSum = [1, 2, 3].reduceRight((acc, curr) => acc + curr, 0); // 6

// find: Returns the first element that matches a condition.
const firstEven = [1, 3, 4, 5].find(x => x % 2 === 0); // 4

// findIndex: Returns the index of the first element that matches a condition.
const firstEvenIndex = [1, 3, 4, 5].findIndex(x => x % 2 === 0); // 2

// some: Checks if at least one element satisfies a condition.
const hasEven = [1, 3, 4, 5].some(x => x % 2 === 0); // true

// every: Checks if all elements satisfy a condition.
const allEven = [2, 4, 6].every(x => x % 2 === 0); // true

// sort: Sorts the array in place.
const sorted = [3, 1, 2].sort((a, b) => a - b); // [1, 2, 3]

// reverse: Reverses the array in place.
const reversed = [1, 2, 3].reverse(); // [3, 2, 1]

// concat: Combines arrays into a new array.
const combined = [1, 2].concat([3, 4]); // [1, 2, 3, 4]

// slice: Returns a portion of the array.
const sliced = [1, 2, 3, 4].slice(1, 3); // [2, 3]

// splice: Modifies an array by adding/removing elements.
const arr = [1, 2, 3];
arr.splice(1, 1, 99); // Removes 1 element at index 1, adds 99. Result: [1, 99, 3]

// includes: Checks if the array contains a value.
const hasThree = [1, 2, 3].includes(3); // true

// indexOf: Returns the first index of a value.
const index = [1, 2, 3, 2].indexOf(2); // 1

// lastIndexOf: Returns the last index of a value.
const lastIndex = [1, 2, 3, 2].lastIndexOf(2); // 3

// join: Combines array elements into a string.
const joined = [1, 2, 3].join('-'); // "1-2-3"

// push: Adds elements to the end of the array.
const pushed = [1, 2];
pushed.push(3); // [1, 2, 3]

// pop: Removes the last element and returns it.
const popped = [1, 2, 3];
popped.pop(); // 3. Result: [1, 2]

// shift: Removes the first element and returns it.
const shifted = [1, 2, 3];
shifted.shift(); // 1. Result: [2, 3]

// unshift: Adds elements to the beginning of the array.
const unshifted = [2, 3];
unshifted.unshift(1); // [1, 2, 3]

// flat: Flattens nested arrays.
const flattened = [1, [2, [3]]].flat(2); // [1, 2, 3]

// flatMap: Maps and flattens in a single step.
const flatMapped = [1, 2, 3].flatMap(x => [x, x * 2]); // [1, 2, 2, 4, 3, 6]

// fill: Fills array with a value.
const filled = new Array(3).fill(0); // [0, 0, 0]

// copyWithin: Copies part of the array to another location in the array.
const arrCopy = [1, 2, 3, 4, 5];
arrCopy.copyWithin(0, 3, 5); // [4, 5, 3, 4, 5]

// Array.from: Creates an array from an iterable or array-like object.
const fromString = Array.from('123'); // ['1', '2', '3']

// Array.isArray: Checks if a value is an array.
const isArray = Array.isArray([1, 2, 3]); // true