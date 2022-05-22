// Linear Search
// checks every element in the array, first time sees value, returns it
// works on sorted and unsorted lists

export function linearSearh(arr, el, comparatorFn) {
  let idx = 0;

  for (const item of arr) {
    // checking for specific case, if we know that we are searching in objects
    // and we know objects properties, or we are passing comparatorFn
    if (typeof el === "object" && el !== null && comparatorFn(el, item)) {
      return idx;
    }
    if (item == el) {
      return idx;
    }
    idx++;
  }
}
