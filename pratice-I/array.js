const myarr=[1,2,3,4,5,6,7,8,9,10];
// array make shallow copy mean create a new array with the same elements
console.log(myarr.length); // length of array
console.log(myarr[0]); // first element of array
myarr.push(11); // add element at the end of array
myarr.pop(); // remove last element of array
myarr.unshift(0); // add element at the beginning of array
myarr.shift(); // remove first element of array


//now bind the array with the string
let mystr = "Hello World";
let myarr2 = mystr.split(""); // split string into array of characters


//now use sprad operator to merge two arrays
let myarr3 = [...myarr, ...myarr2]; // merge two arrays