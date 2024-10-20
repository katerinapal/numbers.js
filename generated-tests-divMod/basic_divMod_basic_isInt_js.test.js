describe(
  "../evaluationProjects/numbers.js/lib/numbers/basic_isInt.js:9:15:11:1",
  () => {
    test("invoc-loc:358:8:358:27-test:0", () => {
      ///home/katerina/visualStudioGit/evaluationProjects/numbers.js/lib/numbers/basic.js:24:1:24:45
      var basic_isInt = require("../lib/numbers/basic_isInt.js");
      var arg0 = 12;
      var actualResult = basic_isInt.isInt(arg0);
      var expectedResult = true;
      expect(expectedResult).toBe(actualResult);
    });

    test("invoc-loc:358:33:358:52-test:1", () => {
      ///home/katerina/visualStudioGit/evaluationProjects/numbers.js/lib/numbers/basic.js:24:1:24:45
      var basic_isInt = require("../lib/numbers/basic_isInt.js");
      var arg0 = 6;
      var actualResult = basic_isInt.isInt(arg0);
      var expectedResult = true;
      expect(expectedResult).toBe(actualResult);
    });

    test("invoc-loc:358:8:358:27-test:2", () => {
      ///home/katerina/visualStudioGit/evaluationProjects/numbers.js/lib/numbers/basic.js:24:1:24:45
      var basic_isInt = require("../lib/numbers/basic_isInt.js");
      var arg0 = 10;
      var actualResult = basic_isInt.isInt(arg0);
      var expectedResult = true;
      expect(expectedResult).toBe(actualResult);
    });

    test("invoc-loc:358:33:358:52-test:3", () => {
      ///home/katerina/visualStudioGit/evaluationProjects/numbers.js/lib/numbers/basic.js:24:1:24:45
      var basic_isInt = require("../lib/numbers/basic_isInt.js");
      var arg0 = 3;
      var actualResult = basic_isInt.isInt(arg0);
      var expectedResult = true;
      expect(expectedResult).toBe(actualResult);
    });
  }
);

