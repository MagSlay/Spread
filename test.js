const filterOutOdds = (...arguments) => arguments.filter(num =>  num % 2 === 0);

// const findMin = nums.reduce(function(acc, curVal){
//     if (curVal < acc){
//         return curVal;
//     }
//     return acc
// });

const findMin = (...args) => Math.min(...args);

function mergeObject(arr1, arr2){
    return {...arr1, ...arr2};
};

// function doubleAndReturnArgs(arr, ...args){
//     return (...arr, ...args.map(num)
//         return num * 2);
// };

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v *2)]
// how does this look without the arrow functions???




/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = items => {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
  };

/** Return a new array with every item in array1 and array2. */

// const extend = function(array1, array2) {
//     return (...array1, ...array2);
// };

array1 = ['1', '2', '3'];
array2 = ['4', '5', '6'];
const extend1 = (array1, array2) =>  [...array1, ...array2];

const extend2 = (array1, array2) => {
  return [...array1, ...array2];
};
// Does this work?? no implicit return??

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyValue = (obj, key, val) => {
  let newObj = {...obj};
  newObj[key] = val;
  return newObj;
};


/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
  let newObj = {...obj};
  delete newObj[key];
  return newObj;
};


/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};



/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
  let newObj = {...obj};
  newObj[key] = val;
  return newObj;
};
