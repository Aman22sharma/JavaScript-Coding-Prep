/* 
Promises are uses to handle async operation in javascript.

Promise is an object which represenets the eventual completion or failure of async operation.
Promise is a object container for a future vlue.

States = pending, fullfill, rejected.

callbacks = resolve, reject

*/

let newPromise = new Promise((resolve,reject) => {
    let a = 4;
    if(a = 4){
        resolve('Success!')
    } else {
        reject("Some error")
    }
})

newPromise.then((data) => console.log(data))
newPromise.catch((error) => console.log(error))


// Class is a template for creating objetcs with similar properties and methods.

