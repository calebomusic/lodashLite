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
