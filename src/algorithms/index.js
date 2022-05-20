// finding recurring element in an array

// O (n^2)
export function findRecurring(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return arr[i];
      }
    }
  }

  return null;
}

// O (n)
export function findRecurring2(arr) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      return arr[i];
    }
    map.set(arr[i], true);
  }

  return null;
}

////////////////////////////////////////////////////////////////////////

// finding the sum of every even number in a fibonacci sequience.
// providing the maximum value of the fibonacci array elements

export function findSumOfEvenInFib(limit) {
  const fib = [1, 1];
  let sum = 0;

  for (let i = 2; i < limit; i++) {
    const newValue = fib[i - 1] + fib[i - 2];

    if (newValue > limit) {
      break;
    }

    fib[i] = newValue;

    if (fib[i] % 2 === 0) {
      sum += fib[i];
    }
  }

  return { fib, sum };
}

////////////////////////////////////////////////////////////////////////

//finding factorial of a number, with recursion and iteration

export function findFactorialIterative(num) {
  let factorial = 1;
  if (num === 2) {
    return 2;
  }
  for (let i = 1; i <= num; i++) {
    factorial = factorial * i;
  }

  return factorial;
}

export function findFactorialRecursive(num) {
  if (num === 2) {
    return 2;
  }
  return num * findFactorialRecursive(num - 1);
}

////////////////////////////////////////////////////////////////////////

// Sorting array of numbers with bubble sort, removing dublicates

export function bubbleSort(arr) {
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

// Reversing strings

export function reverseString(str) {
  return str.split("").reverse().join("");
}

export function reverseStringWithLoop(str) {
  let string = "";

  for (let i = 0; i < str.length; i++) {
    string = str[i] + string;
  }

  return string;
}

export function reverseStringWithReduce(str) {
  return str.split("").reduce((a, b) => b + a, "");
}

export function isPalindrome(str) {
  return str.split("").every((char, i) => char === str[str.length - i - 1]);
}

////////////////////////////////////////////////////////////////////////

// Reverse Ints

export function reverseInt(n) {
  const reversed = n.toString().split("").reverse().join("");
  if (n < 0) {
    return parseInt(reversed) * -1;
  }
  return parseInt(reversed);
}

////////////////////////////////////////////////////////////////////////

// Max char
// finding mostly used char in string

export function maxChar(str) {
  const map = {};
  let max = 0;

  for (let i = 0; i < str.length; i++) {
    if (map[str[i]]) {
      map[str[i]] = map[str[i]] + 1;
    } else {
      map[str[i]] = 1;
    }
  }

  Object.keys(map).forEach((key, i) => {
    if (map[key] >= max) {
      max = key;
    }
  });

  return max;
}

////////////////////////////////////////////////////////////////////////

export function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}

////////////////////////////////////////////////////////////////////////

export function chunkArray(arr, size) {
  const chunked = [];
  const numOfEls = Math.ceil(arr.length / size);

  for (let i = 0; i <= size - 1; i++) {
    const start = i * numOfEls;
    const end = start === 0 ? numOfEls : start * 2;
    chunked[i] = arr.slice(start, end);
  }
  return chunked;
}

////////////////////////////////////////////////////////////////////////
// check if two strings are anagrams

export function areAnagrams(str1, str2) {
  const generateArr = (str) =>
    str
      .split("")
      .map((char) => char.toLowerCase())
      .filter((char) => new RegExp("[a-z]").test(char));
  const strArr1 = generateArr(str1);
  const strArr2 = generateArr(str2);

  console.log(strArr1, strArr2);

  if (strArr1.length !== strArr2.length) {
    return false;
  }

  const map = { str1: {}, str2: {} };

  strArr1.forEach((char, i) => {
    if (map.str1[char]) {
      map.str1[char] = map.str1[char] + 1;
    } else {
      map.str1[char] = 1;
    }
    if (map.str2[char]) {
      map.str2[char] = map.str2[char] + 1;
    } else {
      map.str2[char] = 1;
    }
  });

  for (key in map.str1) {
    if (map.str1[key] === map.str2[key]) {
      return true;
    }
  }

  return false;
}

export function areAnagramsWithSort(str1, str2) {
  const generateArrStr = (str) =>
    str
      .split("")
      .map((char) => char.toLowerCase())
      .filter((char) => new RegExp("[a-z]").test(char))
      .sort()
      .join("");
  return generateArrStr(str1) === generateArrStr(str2);
}

////////////////////////////////////////////////////////////////////////

// REGEX
// ('[a-z]') specifying the range
// ('^[a-z]') specifying the range(except this range - ^)
// ('^serg') starts with serg
// ('serg$') ends with serg

////////////////////////////////////////////////////////////////////////

// Capitalize word in a sentence

export function capitalize(str) {
  return str
    .split(" ")
    .map((el) => el.charAt(0).toUpperCase() + el.slice(1).toLowerCase())
    .join(" ");
}

////////////////////////////////////////////////////////////////////////

export function findVowels(str) {
  return str.split("").filter((el) => ["a", "e", "i", "o", "u"].includes(el))
    .length;
}

////////////////////////////////////////////////////////////////////////
// Retrieve n-th entry from fibonacci

export function fibEntry(n) {
  const arr = [0, 1, 1];

  for (let i = 3; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }

  return arr[n];
}

////////////////////////////////////////////////////////////////////////

export function memoize(fn) {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      cache[args];
    }
    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  };
}

export function fibEntryRecursive(n) {
  if (n < 2) {
    return n;
  }

  return fibEntryRecursive(n - 1) + fibEntryRecursive(n - 2);
}

const fibEntryMemoized = memoize(fibEntryRecursive);

////////////////////////////////////////////////////////////////////////

//steps

export function visualizeSteps(n) {
  for (let row = 0; row < n; row++) {
    let stair = "";
    for (let col = 0; col < n; col++) {
      if (col <= row) {
        stair = stair + "#";
      } else {
        stair = stair + " ";
      }
    }
    console.log(stair);
  }
}

////////////////////////////////////////////////////////////////////////

//pyramid

export function pyramid(n) {
  const midpoint = Math.floor((2 * n - 1) / 2);
  for (let row = 0; row < n; row++) {
    let level = "";
    for (let col = 0; col < n * 2 - 1; col++) {
      if (midpoint - row <= col && midpoint + row >= col) {
        level += "#";
      } else {
        level += " ";
      }
    }
    console.log(level);
  }
}

////////////////////////////////////////////////////////////////////////