// Linear Search

// Time Complexity
// Best case: O(1) (when the target is the first element).
// Worst case: O(n) (when the target is the last element or not present).

// Space Complexity: O(1) (no extra space used)

// When to use:
// Small datasets
// Unsorted data

const index = arr.indexOf(target)



// Binary Search

// Time Complexity
// Best case: O(1) (when the middle element is the target).
// Worst case: O(logn)

// Space Complexity: 
// Iterative: O(1) (no extra space used)
// Recursive: O(logn) (due to recursive stack)

// When to use:
// Large datasets that are already sorted.

function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] === target) return mid;
      if (arr[mid] < target) left = mid + 1;
      else right = mid - 1;
    }
    return -1;
  }



// Interpolation Search
  
// Time Complexity
// Best case: O(1) (when the middle element is the target).
// Average case: (loglogn) for uniformly distributed data
// Worst case: O(n)

// When to use:
// Large datasets that are uniformly distributed.

function interpolationSearch(arr, target) {
    let low = 0, high = arr.length - 1;
    while (low <= high && target >= arr[low] && target <= arr[high]) {
      const pos = low + Math.floor(((target - arr[low]) * (high - low)) / (arr[high] - arr[low]));
      if (arr[pos] === target) return pos;
      if (arr[pos] < target) low = pos + 1;
      else high = pos - 1;
    }
    return -1;
  }


// Jump search

// Time Complexity
// Best case: O(1) (when the middle element is the target).
// Worst case: O(√n)

// When to use:
// Sorted data where binary search is not ideal.

function jumpSearch(arr, target) {
    const n = arr.length;
    const step = Math.floor(Math.sqrt(n));
    let prev = 0;
    while (arr[Math.min(step, n) - 1] < target) {
      prev = step;
      step += Math.floor(Math.sqrt(n));
      if (prev >= n) return -1;
    }
    for (let i = prev; i < Math.min(step, n); i++) {
      if (arr[i] === target) return i;
    }
    return -1;
  }


// Exponential Search

// Time Complexity
// Best case: O(1) 
// Worst case: O(logn)

// When to use:
// For unknown or infinite-sized datasets.

function exponentialSearch(arr, target) {
    if (arr[0] === target) return 0;
    let i = 1;
    while (i < arr.length && arr[i] <= target) i *= 2;
    return binarySearch(arr.slice(Math.floor(i / 2), Math.min(i, arr.length)), target);
  }
  

// Ternary Search

// Time Complexity
// Worst case: O(log3n)

// When to use:
// Sorted data when the overhead of dividing into three parts is justified.

