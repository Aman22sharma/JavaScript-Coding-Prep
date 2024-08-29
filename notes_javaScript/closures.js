/* 

- A closure is a function that references variables in the outer scope from its inner scope.

- The closure preserves the outer scope inside its inner scope even after outer funcitons is returned.

- A function binds together with it's lexical environment.
- function along with the lixical scope it's forms a colosure.

- A closure is the combination of a function bundeled together with the lexical environment (references to its surrounding state).

- ADVANTAGES OF CLOSURES
* Fucntin Currying
* Memoization (Caching the result/data)

- Disadvantage 
  Ocuppies lots of memeory && memory leakage

*/

function x(){
    var a=7;
    function y(){
        console.log(a)
    }
    y()
}
x(); //output 7;


// Function along with it's lexical scope bundle together forms a closure.

function x() {
    var a = 7;
    function y() {
        console.log(a)
    }
    return y;
}
let result = x();
result() // output 


// Make a Counter using closure.

function counter() {
    var count = 0;

    function increment() {
        return count++;
    }
    return increment;
}

let Result = counter()
console.log(Result())
console.log(Result())
console.log(Result())
console.log(Result())

/* OUTPUT : 0
1
2
3 */

