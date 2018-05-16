'use strict';

// URLify a string
function urlString(str) {
  let newStr = str.replace(/ /gi, "%20");
  return newStr;
}

console.log(urlString('how are you'));


// Filtering an array
function filterArray(array) {
  let newArray = [];
  for(let i = 0; i < array.length; i++) {
    if(array[i] >= 5) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}


// Max sum in the array
function findMaxArray(array) {
  let sum = 0;
  let maxSum = 0;

  for(let i = 0; i < array.length; i++) {
    sum = sum + array[i];
    if(sum > maxSum) {
        maxSum = sum;
    } else if(sum < 0) {
        sum = 0;
    }
  }
  return maxSum;
}

console.log(findMaxArray([-4, 3, -3, 7, 2, -3, 6]));


// Merge Arrays
function mergeArray(arr1, arr2) {
  let newArray = [...arr1, ...arr2];
  newArray.sort(function(a, b) {return a-b});
  return newArray;
}

console.log(mergeArray([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));