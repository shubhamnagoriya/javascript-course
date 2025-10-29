"use strict" // treat this js code as newer version Js code

// alert() // we're using Node.js not browser

// Code readability is very important, keep your code structured and easy to read

// Documentations to understand theory or standards
// MDN documentations by Mozilla
// tc39.es documentation


// datatypes in Javascript
// 1. Primitive Datatypes
// 2. Non-primitive Datatypes or referance type

// 1. Primitive Datatypes
// String, Number, BigInt, Boolean, Null, Undefined, Symbole

/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/

// String: store text data
// console.log("This is a string value");

// Number: store number 
// console.log(43453234);

// boolean: store true/fales about the case or situation
let userActive = true
// console.log(userActive);

// Null: empty space or containing nothing
// console.log(null);
// Note: "null" datatype is object

// undefined: value is not defined yet
// console.log(undefined);

// symbols: uses symbols

// 2. Non-primitive Datatypes or referance type
// Array, Function, Object

// Array: store multiple values
let userNames = ['Ironman', 'Batman', 'Superman', 'Spiderman'];

// Object: Store values with respective keys
let userData = {
    name: 'Shubham',
    age: 24,
    email: 'shubham@gmail.com',

}

// Function: Store single or multiple process
let oneFunction = function(){
    console.log("Hello World");   
}

// oneFunction();


//----------------------------------------------------------------------------------------------------

// Stack and Heap Memory

// Stack memory: used for primitive values and it's stores copy
let someCity = "Indore"
let anotherCity = someCity
anotherCity = "Ujjain"

console.log(someCity);
console.log(anotherCity);


// Heap memory: used for non-primitive values and it's stores original referances
let userOne = {
    name: "Shubham",
    email: "shubham@google.com"
}

let userTwo = userOne

userTwo.email = "shubham@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
