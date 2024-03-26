/* 
    • compilation 
    • code execution
    • Compilation phase: 
        1) Tokenization/Lexing: breaking code into smaller meaningful chunks (tokens)

        2) Parsing: With the help of tokens the parser arranges tokens in a specific structure, called Abstract Syntax Tree (AST).

        3) Code generation: making code into executable format.

    • How javascript code executes 
    • Beofre execution: Early error checking, determining appropriate scope for variables

    • what is global exection context ? 
    • In Global execution context, value of this is = window object.
    • Window object is provided by the browser.

*/

// what is local execution context ? 
// closures


console.log(this);
console.log(window);
console.log(firstName);
var firstName = "Harshit";
console.log(firstName);