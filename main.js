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

/*
Converts all elements in array into a string separated by separator.
*/

_.join = function(array, separator = '') {
  let result = '';

  for(let i = 0; i < array.length; i ++) {
    if(i !== array.length - 1) {
      result += (array[i].toString() + separator);
    } else {
      result += array[i].toString();
    }
  }

  return result;
}

/*
Removes all given values from array using SameValueZero for equality comparisons.
*/
_.pull = function(array, ...values) {
  let result = [],
      set = new Set();

  for(let val of values) {
    set.add(val);
  }

  for(let el of array) {
    if(!set.has(el)) {
      result.push(el);
    }
  }

  array = result;
  return array;
}

/*
Creates an array of unique values, in order, from all given arrays using SameValueZero for equality comparisons.
*/

_.union = function(array, other) {
  const set = new Set();

  for(let el of array) {
    set.add(el);
  }

  for(let el of other) {
    set.add(el)
  }

  return Array.from(set);
}

/*
Creates an array of unique values that is the symmetric difference of the given arrays. The order of result values is determined by the order they occur in the arrays.
*/

_.xor = function(array, other) {
  const set1 = new Set(),
        set2 = new Set(),
        result = [];

  for(let el of array) {
    set1.add(el)
  }

  for(let el of other) {
    set2.add(el)
  }

  set1.forEach( el => {
    if(!set2.has(el)) {
      result.push(el);
    }
  })

  set2.forEach( el => {
    if(!set1.has(el)) {
      result.push(el);
    }
  })

  return result
}

/*
Creates an array of grouped elements, the first of which contains the first elements of the given arrays, the second of which contains the second elements of the given arrays, and so on.
*/

_.zip = function(array, ...others) {
  const result = [];

  for(let i = 0; i < array.length; i ++) {
    result[i] = [array[i]];
  }

  for(let sub of others) {
    for(let i = 0; i < array.length; i ++) {
      result[i].push(sub[i]);
    }
  }

  return result;
}

/*
  The opposite of _.before; this method creates a function that invokes func once it's called n or more times.
*/

_.after = function(n, func) {
  const f = () => {
    n --;
    if(n === 0) {
      func();
    } else {
      return f;
    }
  }

  return f;
}

/*
  Creates a function that invokes func with the this binding of thisArg and partials prepended to the arguments it receives.
*/

_.bind = function(func, thisArg, ...partials) {
  return (...args) => func.apply(thisArg,
                                 Array.from(partials).concat(Array.from(args))
                               )
}

/*
  Creates a function that accepts arguments of func and either invokes func returning its result,
  if at least arity number of arguments have been provided,
  or returns a function that accepts the remaining func arguments, and so on.
  The arity of func may be specified if func.length is not sufficient.
*/
_.curry = function(func, arity, ...args) {
  totalArgs = args;
  const f = (...newArgs) => {
    totalArgs = totalArgs.concat(newArgs);
    if(totalArgs.length >= arity) {
      return func(totalArgs);
    } else {
      return f;
    }
  }

  return f;
}

/*
Creates a throttled function that only invokes func at most once per every wait milliseconds.
The throttled function comes with a cancel method to cancel delayed func invocations and a flush method to immediately invoke them. Provide options to indicate whether func should be invoked on the leading and/or trailing edge of the wait timeout. The func is invoked with the last arguments provided to the throttled function. Subsequent calls to the throttled function return the result of the last func invocation.
*/

_.throttle = function(func, wait) {
  let lastResult = null,
      legit = false,
      counter = 0;

  return () => {
    if(!legit) {
      lastResult = func();
      legit = true
      window.setTimeout(() => {
        legit = false;
      }, wait);
    } else {
      return lastResult;
    }
  }

  return lastResult;
}
