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
    let sum = sum + array[i];
    if(sum > maxSum) {
        maxSum = sum;
    } else if(sum < 0) {
        sum = 0;
    }
  }
  return maxSum;
}