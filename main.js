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

/*
Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons.
*/

_.difference = function(array, other) {
  const set = new Set(),
        result = [];

  for(let el of array) {
    set.add(el);
  }

  for(let el of other) {
    if(set.has(el)) {
      set.delete(el);
    }
  }

  set.forEach(el => {
    result.push(el);
  });

  return result;
}

// TODO: testing
// console.log(_.difference([2, 1], [2, 3]));
// => [1]

/*
Creates a slice of array with n elements dropped from the beginning.
*/

_.drop = function(array, n = 1) {
  const result = [];

  for(let i = n; i < array.length; i ++) {
    result.push(array[i]);
  }

  return result;
}

// TODO: testing!
// console.log(_.drop([1, 2, 3]));
// => [2, 3]

// console.log(_.drop([1, 2, 3], 2));
// => [3]

// console.log(_.drop([1, 2, 3], 5));
// => []

// console.log(_.drop([1, 2, 3], 0));
// => [1, 2, 3]

/*
  Recursively flatten array up to depth times.
*/

_.flattenDepth = function(array, depth) {
  let result = [];

  if(depth === 0) {
    return array;
  }

  for(let el of array) {
    if(Array.isArray(el)) {
      result = result.concat(_.flattenDepth(el, depth - 1));
    } else {
      result.push(el);
    }
  }

  return result;
}


// TODO: testing
// var array = [1, [2, [3, [4]], 5]];
// console.log(_.flattenDepth(array, 1));
// => [1, 2, [3, [4]], 5]

// console.log(_.flattenDepth(array, 2));
// => [1, 2, 3, [4], 5]

/*
Creates an array of unique values that are included in all given arrays using SameValueZero for equality comparisons.
The order and references of result values are determined by the first array.
*/

_.intersection = function(array, other) {
  const result = [],
        set = new Set();

  for(let el of array) {
    set.add(el);
  }

  for(let el of other) {
    if(set.has(el)) {
      result.push(el);
    }
  }

  return result;
}

// TODO: testing
// console.log(_.intersection([2, 1], [2, 3]));
// => [2]

/*
Converts all elements in array into a string separated by separator.
*/

_.join = function(array, separator) {

}

// Removes all given values from array using SameValueZero for equality comparisons.

_.pull = function(array, ...values) {

}

// var array = ['a', 'b', 'c', 'a', 'b', 'c'];
//
// _.pull(array, 'a', 'c');
// console.log(array);
// => ['b', 'b']

/*
Creates an array of unique values, in order, from all given arrays using SameValueZero for equality comparisons.
*/

_.union = function(array, other) {

}

// _.union([2], [1, 2]);
// => [2, 1]

/*
Creates an array of unique values that is the symmetric difference of the given arrays. The order of result values is determined by the order they occur in the arrays.
*/

_.xor = function(array, other) {

}

// _.xor([2, 1], [2, 3]);
// => [1, 3]

/*
Creates an array of grouped elements, the first of which contains the first elements of the given arrays, the second of which contains the second elements of the given arrays, and so on.
*/

_.zip = function(array, ...others) {

}

// _.zip(['a', 'b'], [1, 2], [true, false]);
// => [['a', 1, true], ['b', 2, false]]
