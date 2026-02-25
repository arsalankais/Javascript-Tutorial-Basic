// make a function using a rest operator 
function calculateCartPrice(...num1) {
    return num1
}
console.log(calculateCartPrice(200, 300, 400, 599, 3000));
const user = {
    username: "arsalan",
    prices: 199
}

function handleObject(anyobject) {

    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

}
// console.log(handleObject(user))
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [300, 3000, 200, 300]
function returnSecondValue(getArray) {
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([2000, 300, 200]))
