var basic = exports;

/**
 * Determine if the number is an integer.
 *
 * @param {Number} the number
 * @return {Boolean} true for int, false for not int.
 */
basic.isInt = function (n) {
  return n % 1 === 0;
};

//module.exports = basic;