var arr = [];
var obj = {};

console.log(typeof arr); // dont do this
console.log(typeof obj);
console.log(Array.isArray(arr)); // do this

var numbers = [1,2,3,4];

// we want to get back an array of all numbers multiplied by 2

var result = numbers.map(function (element) {
  return element * 2;
});

console.log('numbers array', numbers);
console.log('result array', result);

// forEach
// reduce 
// map

// split ---> if you want to convert string to arrays


