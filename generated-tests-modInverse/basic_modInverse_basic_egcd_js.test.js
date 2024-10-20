describe(
  "../evaluationProjects/numbers.js/lib/numbers/basic_egcd.js:10:14:48:1",
  () => {
    test("invoc-loc:463:11:463:31-test:0", () => {
      ///home/katerina/visualStudioGit/evaluationProjects/numbers.js/lib/numbers/basic.js:27:1:27:43
      var basic_egcd = require("../lib/numbers/basic_egcd.js");
      var arg0 = 1;
      var arg1 = 5;
      var actualResult = basic_egcd.egcd(arg0, arg1);
      expect(actualResult["0"]).toBe(1);
      expect(actualResult["1"]).toBe(1);
      expect(actualResult["2"]).toBe(0);
    });

    test("invoc-loc:463:11:463:31-test:1", () => {
      ///home/katerina/visualStudioGit/evaluationProjects/numbers.js/lib/numbers/basic.js:27:1:27:43
      var basic_egcd = require("../lib/numbers/basic_egcd.js");
      var arg0 = 65;
      var arg1 = 40;
      var actualResult = basic_egcd.egcd(arg0, arg1);
      expect(actualResult["0"]).toBe(5);
      expect(actualResult["1"]).toBe(-3);
      expect(actualResult["2"]).toBe(5);
    });
  }
);

