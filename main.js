/* Creates an array of elements split into groups the length of size.
If array can't be split evenly, the final chunk will be the remaining elements. */
function _() {

}

_.chunk = function(array, n) {
  const result = [];

  for(let i = 0; i < array.length; i = i + n) {
    result.push(array.slice(i, n + i));
  }

  return result;
}

// TODO: testing
// console.log(_.chunk(['a', 'b', 'c', 'd'], 2));
// => [['a', 'b'], ['c', 'd']]

// console.log(_.chunk(['a', 'b', 'c', 'd'], 3));
// => [['a', 'b', 'c'], ['d']]

/*
Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
*/

_.compact = function(array) {
  const result = [];

  for(let el of array) {
    if(el) {
      result.push(el);
    }
  }

  return result;
}

// TODO: testing
// console.log(_.compact([0, 1, false, 2, '', 3]));
// => [1, 2, 3]);

/*
Creates a new array concatenating array with any additional arrays and/or values.
*/

_.concat = function(array, ...args) {
  const result = _.deepDup(array),
        argsArr = Array.from(args);

  for(let el of args) {
    if(Array.isArray(el)) {
      for(let subEl of el) {
        result.push(subEl);
      }
    } else {
      result.push(el);
    }
  }

  return result;
}

// TODO: testing
// var array = [1];
// var other = _.concat(array, 2, [3], [[4]]);
//
// console.log(other);
// // => [1, 2, 3, [4]]
//
// console.log(array);
// // => [1]

_.deepDup = function(array) {
  const result = [];

  for(let el of array) {
    if(Array.isArray(el)) {
      result.push(_.deepDup(el));
    } else {
      result.push(el);
    }
  }

  return result;
}

// TODO: testing
// var arr = [1,2,3,[4, [5]]];
// var other = _.deepDup(arr);
// arr[3] = 'a';
//
// console.log(arr[3]);
// console.log(other[3]);
