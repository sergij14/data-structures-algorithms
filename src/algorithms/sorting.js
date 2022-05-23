////////////////////////////////////////////////////////////////////////
// Bubble sort
// Sorting two items at the time and sort them
// Go through the entire array multiple times until all pairs are compared an sorted
// Sorting array of numbers with bubble sort, removing dublicates

// best case: array sorted: 0(n) - don't entering inside if statement
// worst case: 0(n^2)
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
