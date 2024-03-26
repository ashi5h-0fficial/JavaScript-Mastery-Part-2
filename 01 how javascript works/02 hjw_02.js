/* hoisting: built-in behavior of the JavaScript through which declarations of functions, variables, and classes are moved to the top of their scope – all before code execution.

    • Function declarations
    • Variables declarations

• Only declarations are hoisted, not assignments. If you use a variable or function before its declaration line, the declaration is brought to the top, but any initialization or value assignment stays in its original position.

let and const have modified hoisting behavior: They are hoisted, but not initialized, leading to a "Temporal Dead Zone" where you can't access them before their declaration line.

*/

//Example 1:
console.log(myVar); // Outputs: undefined
var myVar = 10;

//Example 2:
console.log(myLet); // ReferenceError: Cannot access 'myLet' before initialization
let myLet = 10; 

//Variables declared with let and const are hoisted, but not initialized. Trying to use them before their declaration line results in a ReferenceError.

//Example 3:
sayHello(); // This works! 

function sayHello() {
    console.log("Hello!");
}


//However, function expressions are not hoisted in the same way:
//Example 4:
bar(); // TypeError: bar is not a function

var bar = function() {
  console.log("Hello, world!");
};


console.log(this);
console.log(window);
console.log(myFunction);

console.log(fullName);

function myFunction(){
    console.log("this is my function");
}

var firstName = "Harshit";
var lastName = "Sharma"
var fullName = firstName + " " + lastName;
console.log(fullName);