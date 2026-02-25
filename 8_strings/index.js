// in these we will learn strings in js in depth
const name = "arsalan"
const repoCount = 50
// console.log(name + repoCount);
console.log(`my name is ${name} and my repocount is ${repoCount}`);
// convert the string as a object 
const gameName = new String("arsalan bhai")
console.log(gameName)
// methods in strings 
console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(1));
console.log(gameName.indexOf('s'));
console.log(gameName.substring(0 , 4));
// in these last index is not involve 
console.log(gameName.slice(-8 , 6))
// in these negative also included
const newStr = "    arsalan   "
console.log(newStr.trim());
console.log(newStr.trimEnd());
console.log(newStr.trimStart());
const url = "arsalan.comhhtps"
console.log(url.replace("com","ars"))
// check the values are available or not if yes then true if no then false
console.log(url.includes("arsalan"));


// convert the string in array with based any character 
// in these we convert with based of '-'
const gameName1 = new String("arsalan-kais-com")
console.log(gameName1.split("-"));


// the string important properties Are 
// length()
// toUpperCase()
// charAt()
// indexOf()
// substring()
// slice()
// trim()
// replace()
// includes()

// split()-convert the string into the array 









