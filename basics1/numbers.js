const score = 400
console.log(score);

const bonus = new Number(100) // Number object
console.log(bonus); // Number object

console.log(bonus.toString().length); // to change number to string and know length
console.log(bonus.toFixed(1)); // to fixed number of decimal points

const otherNumber = 123.56789
console.log(otherNumber.toPrecision(4)); // to set total number of digits

const bigNumber = 1000000
console.log(bigNumber.toLocaleString('en-IN')); // to format number according to locale
