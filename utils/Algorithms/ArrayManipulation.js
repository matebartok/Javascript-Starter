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
    return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);
  }
  