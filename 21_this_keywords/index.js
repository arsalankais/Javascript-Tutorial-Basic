// we wil learn the this keywords in js 
// and arrow function in js 
const user = {
    username: "arsalan",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`);
        console.log(this)

    }

}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this)

// function declaration 
// 1)normal function 
// function chai() {
//     let username = "arsalan"
//     console.log(this.username)
// }
// chai()



// 2)normal function but stored by the variable 
// arrow function 
// const chaiss = function () {
//     let username = "arsalan"
//     console.log(this.username)
// }
// chaiss()



// 3)arrow function 
const chaivala = () => {
    let username = "arsalan"
    console.log(this)
}
// chaivala()

// const addTwo = (num1,num2) =>{
//     return num1 + num2
// }
// console.log(addTwo(3,3))

// impilicit return arrow function 
// const addTwo = (num1,num2) => num1 + num2
// console.log(addTwo(3,3))


// if single parameter is there in arrow function 
const rootOfNumber = num1 => num1 * num1 * num1
console.log(rootOfNumber(3))

const myArray = [2, 3, 4, 6]
// myArray.forEach()

