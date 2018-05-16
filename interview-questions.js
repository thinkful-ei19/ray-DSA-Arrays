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

