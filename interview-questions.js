'use strict';

// URLify a string
function urlString(str) {
  newStr = '';
  for(let i = 0; i < str.length; i++) {
    if(str[i] ===' ') {
      newStr += '%20';
    }
    else {
      newStr += str[i]
    }
  }
  return newStr;
//   let newStr = str.replace(/ /gi, "%20");
//   return newStr;
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
  let ptr1 = 0;
  let ptr2 = 0;
  let newArray = [];

  while(ptr1 < arr1.length && ptr2 < arr2.length) {
    if(arr1[ptr1] <= arr2[ptr2]) {
      newArray.push(arr1[ptr1++]);
    }
    else {
      newArray.push(arr2[ptr2++]);
    }
  }
  if(ptr2 < arr2.length) {
    ptr1 = ptr2;
    arr1 = arr2;
  }
  while(ptr1 < arr1.length) {
    newArray.push(arr1[ptr1++]);
  }
  return newArray;
}

console.log(mergeArray([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));


// Remove Characters
function removeString(str, character) {
  for (let i = 0; i < str.length; i++) {
    if(character.includes(str[i])) {
      str = str.slice(0, i) + str.slice(i + 1, str.length);
    }
  }
  return str;
}

// function removeCharacter(str, character) {
//     let newString = '';
//     for(let i = 0; i < str.length; i++) {
//       for(let x = 0; i < character.length; x++) {
//         if(str[i] === character[x]) {
//           newString += '';
//         } else {
//           newString+=string[i];
//         }
//       }
//     }
//     return newString;
// }


// Products
function products(array) {
  let newArray = [];
  for(let i = 0; i < array.length; i++) {
    let result = 1;
    for (let x = 0; x < array.length; x++) {
      if(array[i] === array[x]) {
        result = result * 1;
      }
      else {
        result = result * array[x];
      }
    }
    newArray.push(result);
  }
  return newArray;
}

console.log(products([1, 3, 9, 4]));


// 2D array
function twoDimArr(array){
  let rows=[];
  let columns=[];
    for(let i = 0; i < array.length; i++) {
      let row = array[i];
      for(let x = 0; x < row.length; x++){
        let item = row[x];
        if(item === 0) {
          rows[i] = true;
          columns[x] = true;
        }
      }
    }
    for(let x = 0; x < array.length; x++) {
      let row = array[x];
      for(let y = 0; y < row.length; y++) {
        if(rows[x] === true || columns[y] === true) {
          row[y] = 0;
        }
      }   
    }
    return array;
  }

console.log(twoDimArr([[1,0,1,1,0],
    [0,1,1,1,0],
    [1,1,1,1,1],
    [1,0,1,1,1],
    [1,1,1,1,1]]));


// String rotation
function strRotation(str1, str2) {
  let newStr = str1 + str1;
  return newStr.includes(str2);
}

console.log(strRotation('amazon', 'azonma'));
console.log(strRotation('amazon', 'azonam'));