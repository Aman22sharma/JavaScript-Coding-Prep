// Hoisting is a javascript behavior where function and variable declarations are moved to the top of their respective scopes during the compilation phase.

// Before declearing a function we can call the function.

printer();

function printer(){
    console.log('hello!')
}

// Before declearing a variable we can assign value to the variable.

x=10;
console.log(x);
let x;

// Decleratin will move to the top on the compilation time of code. It will rearrange the code in the compilation time.