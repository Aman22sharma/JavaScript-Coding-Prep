const person1 = {
    Fname:"Aman",
    lastName: "Sharma"
}

function getFullName(){
    return this.name + " " + this.lastName
}

const person2 = {
    Fname: "Ankur",
    lastName: "Sharma",
}

console.log(getFullName.call(person2))
console.log(getFullName.apply(person2, ['num1','num2']))
console.log(getFullName.apply(person2, ['num1', 'num2'])) // It will make a copy


let name = {
    firstName: "Aman",
    lastName: "Sharma"
}

function printFullName(homeTown, state) {
    console.log(this.firstName + " " + this.lastName, homeTown, state);
}

// name.printFullName();

let name2 = {
    firstName: "Sachin",
    lastName: "t"
}

//function borrowing. It will atach the behavour of the object to a function.

printFullName.call(name, "Mumbai");
printFullName.apply(name, ["Mumbai", "Maharastra"]);

//Gives us the copy of the exactly same method and used it letter
let printMyName = printFullName.bind(name2, "Mumbai", "Maharastra");
console.log(printMyName)
printMyName();

