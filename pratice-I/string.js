//string can be created 2 type 
// 1. using single quotes
// 2. using object constructor
let str1 = 'Hello World'; // using single quotes
let str2 = new String('Hello World'); // using object constructor


let name = "John";
console.log(name.length); // length of string
console.log(name.toUpperCase()); // convert to uppercase    
console.log(name.toLowerCase()); // convert to lowercase
console.log(name.charAt(0)); // first character of string
console.log(name.charAt(2)); // third character of string

console.log(name.substring(0, 4)); // substring from index 0 to 4
//slice for same as substring and remove negative index
//replace for replace a string with another string
console.log(name.replace("John", "Doe")); // replace John with Doe