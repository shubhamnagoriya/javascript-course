let userName = "Shubham nagoriya"
let userEmail = "shubhamnagoriya@gamil.com"

console.log(userName + userEmail); // old way to concatinate in string
console.log(`My name is ${userName} and my email id is ${userEmail}`); // mordern way to write string

let userData = new String('Shubham-nagoriya')
console.log(userData);

// Prototype methods in string

console.log(userData.length); // to know length of string
console.log(userData.toUpperCase()); // to make uppercase the string value
console.log(userData.charAt(3)); // to know character positions
console.log(userData.indexOf('g')); // to know index number of perticular character

let newString = userData.substring(2, 12) // not include 12th character
console.log(newString);



