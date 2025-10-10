// Types of Operations in Javascript
// 1. Arithmetic Operations
// 2. Assignment Operations
// 3. Comparison Operations
// 4. Logical Operations
// 5. String Operations
// 6. Unary Operations
// 7. Ternary Operation (Conditional)


// Types of Arithmetic Operations in JavaScript
// console.log(2+2); // Addition
// console.log(3-2); // Subtraction
// console.log(2*2); // Multiplication
// console.log(4/2); // Division
// console.log(2**3); // Exponentiation (2 rause to the power 3, 2x2x2)
// console.log(5%2); // Modulus -> remainder

// Types of Assignment Operations in JavaScript
let num = 6
num += 2 // num = 6 + 2 => 8
num -= 2 // 6
num *= 2 // 12
num /= 2 // 6
// console.log(num **= 2);
num **= 2 // 36
// console.log(num %= 2);
num %= 2 // 0

// Types of comparison operators in javascript
console.log(2 == 2); // Equal to, lose
console.log(2 === 2); // Equal to, Strict
console.log(2 != 2); // Not Equal to
console.log(2 !== 2); // Not Equal to, Strict
console.log(3 > 2); // Greater then
console.log(2 < 3); // Less then
console.log(2 >= 2); // Greater then equal to
console.log(2 <= 2); // less then equal to

// example of Unary Operations
let NavNumValue = -num
// console.log(NavNumValue);


// Example of String Operations
let greet = "Hello "
let Name = "Shubham"
let greetName = greet + Name
// console.log(greetName);


// Example of complex cases

// console.log("1" + 2 + 3); // if 1st value is string all values are treated as string values
// console.log(3 + 2 + "1"); // operation performed + add string value
// console.log(3 + "2" + 1); // experiment

console.log(2 + 3 - 4 * 3 / 2); // this type of code is not ideal for professional working, use parenthesis


// Example of unary operation
// console.log(+true);
// console.log(+"");

let gameScore = 100
// gameScore++
++gameScore
console.log(gameScore);




