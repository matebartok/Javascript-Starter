// Bubble Sort
// Repeatedly swaps adjacent elements if they are in the wrong order.

// Small datasets

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;
  }


// Quick Sort
// Divides and conquers based on a pivot element.

// Large datasets

function quickSort(arr) {
    if (arr.length <= 1) return arr;
    const pivot = arr[arr.length - 1];
    const left = arr.filter(el => el < pivot);
    const right = arr.filter(el => el > pivot);
    return [...quickSort(left), pivot, ...quickSort(right)];
  }


//   Merge Sort
//   Recursively splits and merges arrays.

// Large datasets

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
  }
  
  function merge(left, right) {
    const sorted = [];
    while (left.length && right.length) {
      sorted.push(left[0] < right[0] ? left.shift() : right.shift());
    }
    return [...sorted, ...left, ...right];
  }


// Tim Sort
// hybrid of Merge sort, Insertion sort

  function timSort(arr) {
    const RUN = 32;
  
    // Insertion Sort for sorting small chunks
    function insertionSort(arr, left, right) {
      for (let i = left + 1; i <= right; i++) {
        let temp = arr[i];
        let j = i - 1;
        while (j >= left && arr[j] > temp) {
          arr[j + 1] = arr[j];
          j--;
        }
        arr[j + 1] = temp;
      }
    }
  
    // Merge function for merging sorted runs
    function merge(arr, left, mid, right) {
      const len1 = mid - left + 1;
      const len2 = right - mid;
  
      let leftArr = new Array(len1);
      let rightArr = new Array(len2);
  
      for (let i = 0; i < len1; i++) leftArr[i] = arr[left + i];
      for (let i = 0; i < len2; i++) rightArr[i] = arr[mid + 1 + i];
  
      let i = 0, j = 0, k = left;
  
      while (i < len1 && j < len2) {
        if (leftArr[i] <= rightArr[j]) {
          arr[k] = leftArr[i];
          i++;
        } else {
          arr[k] = rightArr[j];
          j++;
        }
        k++;
      }
  
      while (i < len1) {
        arr[k] = leftArr[i];
        i++;
        k++;
      }
  
      while (j < len2) {
        arr[k] = rightArr[j];
        j++;
        k++;
      }
    }
  
    // Step 1: Sort small subarrays using Insertion Sort
    for (let i = 0; i < arr.length; i += RUN) {
      insertionSort(arr, i, Math.min(i + RUN - 1, arr.length - 1));
    }
  
    // Step 2: Merge sorted subarrays using Merge Sort
    for (let size = RUN; size < arr.length; size *= 2) {
      for (let left = 0; left < arr.length; left += 2 * size) {
        const mid = left + size - 1;
        const right = Math.min(left + 2 * size - 1, arr.length - 1);
        if (mid < right) {
          merge(arr, left, mid, right);
        }
      }
    }
  
    return arr;
  }
  
