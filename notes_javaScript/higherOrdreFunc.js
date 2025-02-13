//

//A Higher order function take one or more funntion as arguments (callback function) or reutnn a function as result

// Take one or more function as arguments (Callback function) 
// Return a function as a result

function hof(func){
    func();
}

hof(sayHello);

function sayHello(){
    console.log("hello!")
}


// Asynchronous operation

//Asynchronous operations are operations that do not block the execution of the code.

console.log('Before setTimeout');

setTimeout(()=>{
    console.log('Inside setTimeout');
},2000);

console.log('After setTimeout');

// Output: 
// Before setTimeout 
// Inside setTimeout 
// After setTimeout