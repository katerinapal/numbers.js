describe(
  "../evaluationProjects/numbers.js/lib/numbers/basic_egcd.js:83:19:94:1",
  () => {
    test("invoc-loc:530:32:530:54-test:0", () => {
      ///home/katerina/visualStudioGit/evaluationProjects/numbers.js/lib/numbers/basic.js:27:1:27:43
      var basic_egcd = require("../lib/numbers/basic_egcd.js");
      var arg0 = 0;
      var actualResult = basic_egcd.factorial(arg0);
      var expectedResult = 1;
      expect(expectedResult).toBe(actualResult);
    });

    test("invoc-loc:530:32:530:54-test:1", () => {
      ///home/katerina/visualStudioGit/evaluationProjects/numbers.js/lib/numbers/basic.js:27:1:27:43
      var basic_egcd = require("../lib/numbers/basic_egcd.js");
      var arg0 = 1;
      var actualResult = basic_egcd.factorial(arg0);
      var expectedResult = 1;
      expect(expectedResult).toBe(actualResult);
    });

    test("invoc-loc:530:32:530:54-test:2", () => {
      ///home/katerina/visualStudioGit/evaluationProjects/numbers.js/lib/numbers/basic.js:27:1:27:43
      var basic_egcd = require("../lib/numbers/basic_egcd.js");
      var arg0 = 4;
      var actualResult = basic_egcd.factorial(arg0);
      var expectedResult = 24;
      expect(expectedResult).toBe(actualResult);
    });

    test("invoc-loc:530:32:530:54-test:3", () => {
      ///home/katerina/visualStudioGit/evaluationProjects/numbers.js/lib/numbers/basic.js:27:1:27:43
      var basic_egcd = require("../lib/numbers/basic_egcd.js");
      var arg0 = 5;
      var actualResult = basic_egcd.factorial(arg0);
      var expectedResult = 120;
      expect(expectedResult).toBe(actualResult);
    });
  }
);

