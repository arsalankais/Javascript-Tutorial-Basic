// functions in js 
// function sayMyName(){
//     console.log("a");
//     console.log("r");
//     console.log("s");
//     console.log("a");
//     console.log("l");
//     console.log("a");
//     console.log("n");
// }
// sayMyName()


// function addTwoNumbers(num1, num2) {
// console.log(num1 + num2);
// }


function addTwoNumbers(num1, num2) {

    // let result = num1 + num2
    // return result
    return num1 + num2
}
const result = addTwoNumbers(2, 10)
// console.log("result:", result);
// console.log(addTwoNumbers(2, 10))


function loginUserMesssage(username = "sam") {
    if (username === undefined) {
        console.log("please enter a usernamae ");
        return
    }
    return `${username} Just Loggged In`
}
console.log(loginUserMesssage())



