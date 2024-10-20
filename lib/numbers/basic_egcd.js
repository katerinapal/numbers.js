var basic = exports;

/**
 * Calculate the extended Euclid Algorithm or extended GCD.
 *
 * @param {Number} int a.
 * @param {Number} int b.
 * @return {Array} [a, x, y] a is the GCD. x and y are the values such that ax + by = gcd(a, b) .
 */
basic.egcd = function (a, b) {
  a = +a;
  b = +b;
  // Same as isNaN() but faster
  if (a !== a || b !== b) {
    return [NaN, NaN, NaN];
  }
  //Same as !isFinite() but faster
  if (a === Infinity || a === -Infinity || b === Infinity || b === -Infinity) {
    return [Infinity, Infinity, Infinity];
  }
  // Checks if a or b are decimals
  if ((a % 1 !== 0) || (b % 1 !== 0)) {
    throw new Error("Can only operate on integers");
  }
  var signX = (a < 0) ? -1 : 1,
    signY = (b < 0) ? -1 : 1,
    x = 0,
    y = 1,
    oldX = 1,
    oldY = 0,
    q, r, m, n;
  a = Math.abs(a);
  b = Math.abs(b);

  while (a !== 0) {
    q = Math.floor(b / a);
    r = b % a;
    m = x - oldX * q;
    n = y - oldY * q;
    b = a;
    a = r;
    x = oldX;
    y = oldY;
    oldX = m;
    oldY = n;
  }
  return [b, signX * x, signY * y];
};

/**
 * Calculate the binomial coefficient (n choose k)
 *
 * @param {Number} available choices
 * @param {Number} number chosen
 * @return {Number} number of possible choices
 */
basic.binomial = function (n, k) {

  var arr = [];

  function _binomial(n, k) {
    if (typeof (n) !== 'number' && typeof (k) !== 'number') {
      throw new Error('Input must be a number.');
    }
    if (n >= 0 && k === 0) return 1;
    if (n === 0 && k > 0) return 0;
    if (arr[n] && arr[n][k] > 0) return arr[n][k];
    if (!arr[n]) arr[n] = [];

    arr[n][k] = _binomial(n - 1, k - 1) + _binomial(n - 1, k);
    return arr[n][k];
  }

  return _binomial(n, k);
};

/**
 * Factorial for some integer.
 *
 * @param {Number} integer.
 * @return {Number} result.
 */
basic.factorial = function (num) {
  if (typeof (num) !== 'number') throw new Error("Input must be a number.");
  if (num < 0) throw new Error("Input must not be negative.");
  var i = 2,
    o = 1;

  while (i <= num) {
    o *= i++;
  }

  return o;
};