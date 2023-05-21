// 1. Dynamic and weak typing

// JavaScript is a dynamic language with dynamic types.
// Variables in JavaScript are not directly associated with any particular value type,
// and any variable can be assigned (and re-assigned) values of all types:

let foo = 42; // foo is now a number
foo = "bar"; // foo is now a string
foo = true; // foo is now a boolean

// JavaScript is also a weakly typed language,
// which means it allows implicit type conversion when an operation involves mismatched types,
// instead of throwing type errors.

const foo2 = 42; // foo is a number
const result = foo2 + "1"; // JavaScript coerces foo to a string, so it can be concatenated with the other operand
console.log(result); // 421

// source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures

// 2. Primitive values
// All types except Object define immutable values

// null vs undefined
// Conceptually, undefined indicates the absence of a value, 
// while null indicates the absence of an object

// Boolean
// Number
// BigInt
// String
// Symbol
