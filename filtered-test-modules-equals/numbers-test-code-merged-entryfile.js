var assert = require('assert');
var numbers = require('../index.js');
var Complex = numbers.complex;
var basic = numbers.basic;

describe('numbers', function () {

  console.log('\n\n\\033[34mTesting Complex Numbers\\033[0m');

  it('add should return the sum of two complex numbers', function (done) {
    var A = new Complex(3, 4);
    var B = new Complex(5, 6);
    var res = A.add(B);

    assert.equal(res.re, 8);
    assert.equal(res.im, 10);
    assert.equal(A.r, 5);
    assert.equal(A.t - numbers.EPSILON < 0.9272952180016122 && 0.9272952180016122 < A.t + numbers.EPSILON, true);
    done();
  });

  it('subtract should return the difference of two complex numbers', function (done) {
    var A = new Complex(5, 8);
    var B = new Complex(3, 4);
    var res = A.subtract(B);

    assert.equal(res.re, 2);
    assert.equal(res.im, 4);
    done();
  });

  it('multiply should return the product of two complex numbers', function (done) {
    var A = new Complex(3, 4);
    var B = new Complex(5, 6);
    var res = A.multiply(B);

    assert.equal(res.re, -9);
    assert.equal(res.im, 38);
    done();
  });

  it('divide should return the product of two complex numbers', function (done) {
    var A = new Complex(10, 0);
    var B = new Complex(0, 10);
    var res = A.divide(B);

    assert.equal(res.re, 0);
    assert.equal(res.im, -1);
    done();
  });

  it('magnitude should return magnitude', function (done) {
    var A = new Complex(3, 4);

    assert.equal(A.magnitude(), 5);
    done();
  });

  it('phase should return phase', function (done) {
    var A = new Complex(3, 4);
    var res = A.phase();

    assert.equal(basic.numbersEqual(res, 0.9272952180016122, numbers.EPSILON), true);
    done();
  });

  it('magnitude should return complex conjugate', function (done) {
    var A = new Complex(3, 4);

    assert.equal(A.conjugate().re, 3);
    assert.equal(A.conjugate().im, -4);
    done();
  });

  it('should be able to get the power of a complex number', function (done) {
    var A = new Complex(3, 4);
    var justImaginary = new Complex(0, 4);
    var justNegativeImaginary = new Complex(0, -4);

    let rec0 = A.pow(1 / 2);
    let invArg00 = new Complex(2, 1);
    let invArg01 = numbers.EPSILON;
    assert.equal(rec0.equals(invArg00, invArg01), true);

    let rec1 = A.pow(1 / 4);
    let invArg10 = new Complex(1.455, 0.343);
    let invArg11 = numbers.EPSILON;
    assert.equal(rec1.equals(invArg10, invArg11), true);

    let rec2 = A.pow(0);
    let invArg20 = new Complex(1, 0);
    let invArg21 = numbers.EPSILON;
    assert.equal(rec2.equals(invArg20, invArg21), true);

    let rec3 = A.pow(2);
    let invArg30 = new Complex(-7, 24);
    let invArg31 = numbers.EPSILON;
    assert.equal(rec3.equals(invArg30, invArg31), true);

    let rec4 = A.pow(5);
    let invArg40 = new Complex(-237, -3116);
    let invArg41 = numbers.EPSILON;
    assert.equal(rec4.equals(invArg40, invArg41), true);

    let rec5 = justImaginary.pow(2);
    let invArg50 = new Complex(-16, 0);
    let invArg51 = numbers.EPSILON;
    assert.equal(rec5.equals(invArg50, invArg51), true);

    let rec6 = justNegativeImaginary.pow(-2);
    let invArg60 = new Complex(-1 / 16, 0);
    let invArg61 = numbers.EPSILON;
    assert.equal(rec6.equals(invArg60, invArg61), true);
    

    //assert.equal(A.pow(1 / 2).equals(new Complex(2, 1), numbers.EPSILON), true);
    //assert.equal(A.pow(1 / 4).equals(new Complex(1.455, 0.343), numbers.EPSILON), true);
    //assert.equal(A.pow(0).equals(new Complex(1, 0), numbers.EPSILON), true);
    //assert.equal(A.pow(2).equals(new Complex(-7, 24), numbers.EPSILON), true);
    //assert.equal(A.pow(5).equals(new Complex(-237, -3116), numbers.EPSILON), true);
    //assert.equal(justImaginary.pow(2).equals(new Complex(-16, 0), numbers.EPSILON), true);
    //assert.equal(justNegativeImaginary.pow(-2).equals(new Complex(-1 / 16, 0), numbers.EPSILON), true);
    done();
  });

  it('should be able to raise a complex number to a given complex power', function (done) {
    var A = new Complex(0, 1);
    var B = new Complex(0, -1);

    let rec0 = A.complexPow(B);
    let invArg00 = new Complex(4.81047, 0);
    let invArg01 = numbers.EPSILON;
    assert.equal(rec0.equals(invArg00, invArg01), true);

    var C = new Complex(3, 4);
    var D = new Complex(1, 2);

    let rec1 = C.complexPow(D);
    let invArg10 = new Complex(-0.4198, -0.66);
    let invArg11 = numbers.EPSILON;
    assert.equal(rec1.equals(invArg10, invArg11), true);
    done();
  });

  it('should be able to get all the roots of a complex number', function (done) {
    var A = new Complex(3, -4);
    var root = 5;
    var roots = A.roots(root);

    assert.equal(roots.length, root);

    for (var i = 0; i < root; i++) {
      let rec0 = roots[i].pow(root);
      let invArg00 = A;
      let invArg01 = numbers.EPSILON;
      assert.equal(rec0.equals(invArg00, invArg01), true);
    }
    done();
  });

  it('should be able to get the sine of a complex number', function (done) {
    var A = new Complex(3, -4);

    let rec0 = A.sin();
    let invArg00 = new Complex(3.8537, 27.0168);
    let invArg01 = numbers.EPSILON;
    assert.equal(rec0.equals(invArg00, invArg01), true);
    done();
  });

  it('should be able to get the cosine of a complex number', function (done) {
    var A = new Complex(3, -4);

    let rec0 = A.cos();
    let invArg00 = new Complex(-27.0349, 3.8511);
    let invArg01 = numbers.EPSILON;
    assert.equal(rec0.equals(invArg00, invArg01), true);
    done();
  });

  it('should be able to get the tangent of a complex number', function (done) {
    var A = new Complex(3, -4);
    var expected = A.sin().divide(A.cos());

    let rec0 = A.tan();
    let invArg00 = expected;
    let invArg01 = numbers.EPSILON;
    assert.equal(rec0.equals(invArg00, invArg01), true);
    done();
  });

  it('should be able to check for equality of two complex numbers', function (done) {
    var A = new Complex(3, 4);

    let invArg00 = new Complex(3, 4);
    let invArg01 = numbers.EPSILON;
    assert.equal(A.equals(invArg00, invArg01), true);

    let invArg10 = new Complex(3, 4.0001);
    let invArg11 = numbers.EPSILON;
    assert.equal(A.equals(invArg10, invArg11), true);

    let invArg20 = new Complex(3.0001, 4);
    let invArg21 = numbers.EPSILON;
    assert.equal(A.equals(invArg20, invArg21), true);

    let invArg30 = new Complex(3.1, 4);
    let invArg31 = numbers.EPSILON;
    assert.equal(A.equals(invArg30, invArg31), false);

    let invArg40 = new Complex(3, 4.1);
    let invArg41 = numbers.EPSILON;
    assert.equal(A.equals(invArg40, invArg41), false);

    let invArg50 = new Complex(5, 4);
    let invArg51 = numbers.EPSILON;
    assert.equal(A.equals(invArg50, invArg51), false);
    done();
  });

});

