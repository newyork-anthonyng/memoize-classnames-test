import cx from 'classnames';

/*
 * Modified from https://github.com/jashkenas/underscore/blob/master/underscore.js#L806
 */
function memoize(func, hasher) {
  var memoizeFunction = function(key) {
    var cache = memoizeFunction.cache;
    var args = Array.prototype.slice.call(arguments);
    var address = '' + (hasher ? hasher.call(this, args) : key);

    if (!cache[address]) {
      console.log('%c Miss from cache', 'background-color: tomato;');
      cache[address] = func.apply(this, arguments);
    } else {
      console.log('%c Hit from cache', 'background-color: chocolate;');
    }

    return cache[address];
  };

  memoizeFunction.cache = {};
  return memoizeFunction;
};

const hasher = (args) => {
  const key = JSON.stringify(args);
  return key;
};

const memoizeClassname = memoize(cx, hasher);

export default memoizeClassname;
