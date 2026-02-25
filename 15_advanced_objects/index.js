// advanced objects in js 
// objects constructors 
// if we make a objects using constructor then singleton is made
const tinderUser = new Object()
tinderUser.id = "222233ac"
tinderUser.name = "samay"
tinderUser.isLoggedIn = false
// console.log(tinderUser);
const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "arsalan",
            lastName: "kais"
        }
    }
}
// console.log(regularUser.fullName.userFullName.firstName);


const obj1 = {
    1: "a",
    2: "b"

}
const obj2 = {
    3: "a",
    4: "b"

}

// const obj3 = {obj1, obj2}
//  const obj3 = Object.assign({},obj1, obj2)
const obj3 = { ...obj1, ...obj2 }

console.log(obj3);
console.log(tinderUser);
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('isLogged'));
