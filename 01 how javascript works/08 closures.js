/* closures: 
    A closure is created when an inner function has access to the variables and parameters of its outer function, even after the outer function has finished executing. This allows for maintaining state and creating private variables.


*/

{//Example1:
function outerFunction() {
  let outerVariable = "I am from outer function";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

let innerFunc = outerFunction(); // innerFunc now holds the inner function
innerFunc(); // }This will log: "I am from outer function"

// In this example:

// outerFunction contains an inner function innerFunction.
// innerFunction has access to the outerVariable declared in the outer function, even after outerFunction has finished executing.
}


{
//Example2:    
  function outerFunction() {
    function innerFunction() {
      console.log("hello world");
    }
    return innerFunction;
  }

  const ans = outerFunction();
  // console.log(ans);
  ans();
}

//Example3:

function printFullName(firstName, lastName) {
  function printName() {
    console.log(firstName, lastName);
  }
  return printName;
}

const ans = printFullName("harshit", "sharma");
// console.log(ans);
ans();
