// Find Duplicates

function findDuplicates(arr) {
  const seen = new Set();
  const duplicates = new Set();
  for (const num of arr) {
    if (seen.has(num)) duplicates.add(num);
    else seen.add(num);
  }
  return Array.from(duplicates);
}

// Flatten a Nested Array

function flatten(arr) {
  return arr.reduce(
    (acc, val) =>
      Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val),
    []
  );
}


// maximum sum of a contiguous subarray
function Kadane(arr) {
  let maxSum = arr[0];       // This keeps track of the highest sum we've encountered.
  let currentSum = arr[0];   // This tracks the current subarray sum.

  // Loop through the array starting from the second element
  for (let i = 1; i < arr.length; i++) {
    // currentSum will either include the current element (arr[i])
    // or it will start a new subarray from arr[i], whichever is larger
    currentSum = Math.max(arr[i], currentSum + arr[i]);

    // Update maxSum if currentSum exceeds the previously recorded maxSum
    maxSum = Math.max(maxSum, currentSum);
  }

  console.log(maxSum);
}
