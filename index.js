const factorial = require("utilities / factorial / index.js");
const ratio = require("utilities/ratio / index.js");
function ratioAndFactorial(num1, num2, num3) {
  const fact = factorial;
  const rat = ratio;
  const ratioOfTwoNumb = rat(num1, num2);
  const factorialOfNum = fact(num3);
  return { ratio: ratioOfTwoNumb, factorial: factorialOfNum };
}

module.exports = ratioAndFactorial;
