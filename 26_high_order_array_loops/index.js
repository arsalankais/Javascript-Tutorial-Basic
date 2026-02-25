// in js ecmascript developed the special loops for arrays 
// 1)for of - we dont iterate the objects elements
// on arrays
const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num);

}
// on strings 

const greetings = "hello world!"
for (const greet of greetings) {
    console.log(greet);
}

// 2)maps-for unique key and values and in a same order

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States Of America")
map.set('FR', "France")
map.set('IN', "India")
// console.log(map);
for (const [key, value] of map) {
    console.log(key, value);

}

// const myObject = {
//     'game1' : "NFS",
//     'game2' : "Spiderman"
// }
// for (const [key,value] of myObject) {
//     console.log(key, value);

// }


// 3)for in loop - we iterate the object element using these loop 

const myObject2 = {
    js: "javascriot",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"
}
for (const keys in myObject2) {
    // console.log(myObject2[keys]);
    console.log(`${keys} shortcut is for ${myObject2[keys]}`);
}


const nummy = ["js", "c++", "py"]
for (const key in nummy) {
    console.log(nummy[key]);

}




// 4)for each loops

const coding = ["arsalan", "farhan", "fariha", "hassan"]
// coding.forEach((item) => {
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);

// }

// coding.forEach(printMe)


// coding.forEach( (item, index, arr)=>{
//     console.log(item, index, arr);
// })


const MyCodding = [
    {
        languageName: "javascipt",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {

        languageName: "java",
        languageFileName: "java"
    }
]

MyCodding.forEach((item) => {
    console.log(item.languageName);
    console.log(item.languageFileName);

})