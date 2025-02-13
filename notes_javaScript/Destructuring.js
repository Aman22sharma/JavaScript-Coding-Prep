// let numbsers = [1,2]

// // let a = numbsers[0];
// // let b = numbsers[1];

// [a,b] = numbsers;
// //[a,b,c]=[1,2] //output 1,2,undefined


// let numbers = [1,2,3];
// let [a,,b] = numbers; //output 1,3


let a =1;
let b=2;

[b,a]= [a,b] //outtup 
console.log(a) //2
console.log(b) //1

let obj = {
    name:'Aman',
    age:20
}

let {name,age} = obj;

