//object literal 

//declar a symbol first
const mySymbol = Symbol("mySymbol"); // create a symbol

let person = {

      //symbol here is used as a key
    [mySymbol]: "This is a symbol key", // using symbol as a key
    //object literal notation

    name: "John", //here name treated like "name": "John"
    age: 30, 
    "email id": "john@example.com", //here email id treated like "email id": "john@example.com"
    city: "New York" //here city treated like "city": "New York"
};

//a efficent way to access objec properties
console.log(person["name"])//use squere bracket because is in object keys is "" then . notation not access it
console.log(person["email id"]); // access properties using square bracket notation



//change valu of object properties
person.age = 31; // change age property
person.city = "Los Angeles"; // change city property


let person2 = {
      name: "Jane",
      greet: function() {
            console.log(`Hello, my name is ${this.name}`); // using this to access object property
      }
}
//call function inside object
person2.greet(); // Hello, my name is Jane


//construct object using constructor function
function Person(name, age) {
      this.name = name; // using this to refer to the current object
      this.age = age;

}
//using sprade operator

let obj1={...person,...person2}
console.log(obj1)

