////////////////////////////////////////////////////////////////////////
// Bubble sort
// Sorting two items at the time and sort them
// Go through the entire array multiple times until all pairs are compared an sorted
// Sorting array of numbers with bubble sort, removing dublicates

// best case: array sorted: 0(n) - don't entering inside if statement
// worst, average case: 0(n^2)
export function bubbleSort(array) {
  const arr = [...array];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return [...new Set(arr)];
}

////////////////////////////////////////////////////////////////////////
// Quick sort
// use pivet element to split array into smaller chunks
// chosing one element and find out which elements in an array are smaller, bigger and equal than pivot element
// put those element into 3 different chunks(arrays) and repeat process for those arrays

// best, average case: 0(n * log n)
// worst case: 0(n^2)
export function quickSort(array) {
  const arr = [...array];

  if (arr.length <= 1) {
    return arr;
  }

  const pivotEl = arr.shift();
  const smallerElsArray = [];
  const biggerElsArray = [];
  const equalElsArray = [pivotEl];

  while (arr.length) {
    const currentEl = arr.shift();

    if (currentEl === pivotEl) {
      equalElsArray.push(currentEl);
    } else if (currentEl < pivotEl) {
      smallerElsArray.push(currentEl);
    } else {
      biggerElsArray.push(currentEl);
    }
  }

  const smallerElsSorted = quickSort(smallerElsArray);
  const biggerElsSorted = quickSort(biggerElsArray);

  return smallerElsSorted.concat(equalElsArray, biggerElsSorted);
}
