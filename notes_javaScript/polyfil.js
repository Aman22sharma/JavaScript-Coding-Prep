let name = {
    firstname : 'Aman',
    lastname : 'sharma'
}
let printName = function(hometown,state){
    console.log(this.firstname+" "+this.lastname+" is form "+hometown,state)
}

Function.prototype.myBind = function(...args){
    let obj = this;
    parmas = args.slice(1);
    return function (...args2){
        obj.apply(args[0],[...args,...args2]);
    }
}

let printMyName = printName.myBind(name,"Gopalganj");
printMyName()