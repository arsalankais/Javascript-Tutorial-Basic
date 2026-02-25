// in these we will learn the memory allocation in js 
// and there are two types to store the data in the memory 
// and those 2 types are 
// 1)stack memory
// 2)heap memory


// 1)stack 
// primitive data types stored in stack 
// in these value will be copied
// jo bhi change krenge vo original value mai change nhi hoga 
// data will stored in a sequence way 
// examples
let myYoutubeName = "mr.arsalan hacker"
let anotherName = myYoutubeName
anotherName = "chaiorcode"
console.log(myYoutubeName);
console.log(anotherName);



// 2)heap
// non-primitive data types stored in heap 
// in these referrence will be copied
// jo bhi change krenge vo original value mai bhi change honga 
// data will stored in a random way 
// data adreess stored in the stack and value stored in the heap 
// examples
let userone = {
    email : "arsalankais@com",
    upi : 278487
}
let userTwo = userone
userTwo.email = "arsu@com"
console.log(userone.email);
console.log(userTwo.email);

