/* What is callback funtion? 
A callback is a function passed as an argument to another function.

Using a callback, you could call the calculator function (myCalculator) with a callback (myCallback), and let the calculator function run the callback after the calculation is finished: */


//A callback is a function passed as an argument to another function.

function showResult(sum) {
    console.log(sum)
}

function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}

myCalculator(5, 5, showResult); //output : 10

/* In the example above, myDisplayer is a called a callback function.

It is passed to myCalculator() as an argument.

When you pass a function as an argument, remember not to use parenthesis.

Right: myCalculator(5, 5, myDisplayer);

Wrong: myCalculator(5, 5, myDisplayer()); */

function display(a, b, add) {
    var result = add(a, b)
    console.log(result)
}

function add(a, b) {
    return a + b;
}

display(10, 5, add); // Output - 15