////////////////////////////////////////////////////////////////////////

// Linear Search
// checks every element in the array, first time sees value, returns it
// works on sorted and unsorted lists

// 0(n) - in the worst case we have to visit all of the item if an item is in the end of array
export function linearSearh(arr, el, comparatorFn) {
  for (let idx = 0; idx < arr.length; idx++) {
    // checking for specific case, if we know that we are searching in objects
    // and we know objects properties, or we are passing comparatorFn
    if (typeof el === "object" && el !== null && comparatorFn(el, arr[idx])) {
      return idx;
    }
    if (arr[idx] == el) {
      return idx;
    }
  }
}

////////////////////////////////////////////////////////////////////////

// Binary search
// binary search is better, but array needs to be sorted.
// we find median and compare it to the element we are looking for
// if element was not found, we take the half in which element must be
// we have a new list and repeat the process

// we are splitting array on every step


// 0 (log n) - because we split the array on every step
export function binarySearch(arr, el) {
  let start = 0;
  let end = arr.length - 1;

  // Iterate while start not meets end
  while (start <= end) {
    // Find the mid index
    let mid = Math.floor((start + end) / 2);

    // If element is present at mid, return True
    if (arr[mid] === el) return mid;
    // Else look in left or right half accordingly
    else if (arr[mid] < el) start = mid + 1;
    else end = mid - 1;
  }

  return null;
}
