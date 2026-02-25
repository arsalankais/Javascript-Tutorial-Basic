// in these we will sumarise all the 5 lectures
// js is dynamically type language 
// in the data types there is two types primitive and non primitive 
// primitive - call by value stored in the stack 
// Number, string , boolean, bigint, symbol, null , undefined




// String
let str = "arsalan"
// Number
let num = 7;
let num1 = 84.37;
// Boolean
let bool = true;
// BigInt
let num2 = 3798743987340n;
// undefined
let arsu;
// null 
let farhu = null;
// Symbol
const id = Symbol("123")
// const anotherid = Symbol("123")
// console.log(id ===  anotherid)

console.table([typeof str, typeof num, typeof num1, typeof bool, typeof num2, typeof arsu, typeof farhu, typeof id])

// non primitive - call by referrence stored in the heap and adress in stack
// Array, Object, function



// Array


const arr = ["arsu", 767, true, null, "farhan"]




// Object

const obj = {
    name: "arsalan",
    rollNo: 18,
    clg: "BVDU"
}




// function

const funny = function (num1, num2) {
    console.log("my name is lakhan mera naam hai lakhan mai hu sajno ka sajan mera naam hai lakhan")
    return num1 + num2

}
console.log(funny(9, 9))
// funny()

// in a functiion there is parameter and argument 
// we pass the argument during the function call and the argument go to the parameters
// and do the operation 
// if we use console.log during the function call then we got the return statement 
// if we do not use the console.log durig function call so we only get the operation value not reurn value




// arrow function if there is 2 arguments 

const fun = ((n1, n2) => {
    console.log("my name ia arsalan kais ahmed")
    return n1 + n2
})
console.log(fun(1, 1));





// arrow function if there is 1 argument
const fun1 = (n1 => {
    console.log("my name ia arsalan kais ahmed")
    return n1 * n1 * n1
})
console.log(fun1(3));

console.table([typeof arr, typeof obj, typeof fun, typeof fun1])


// very very imp at the end all data types will convert their typesof is in object 