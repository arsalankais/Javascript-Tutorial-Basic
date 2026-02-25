// objects in js 
// objects literalls 
// if we make a objects using literalls then singleton is not made

const mySym = Symbol("key1")
const jsUser = {
    name: "arsalan",
    [mySym]: "mykey1",
    age: 18,
    location: "Mumbai",
    email: "arsalankaisahmed@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]

}

// console.log(jsUser.email);
// console.log(jsUser["email"])
// console.log(jsUser[mySym])
// best way to acces the object element is just used the brackets[]
jsUser.email = "arsalankaischatgpt@.com"
// Object.freeze(jsUser)
jsUser.email = "arsalankaisschatgpt@.com"
// Object.freeze(jsUser)
jsUser.greetings = function () {
    console.log("hello js user");

}
console.log(jsUser.greetings());

