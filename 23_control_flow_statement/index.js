// control flow statement in js 


// if 



// if(condition){

// }



// if(true){
//     // then it is run 
// }



const isUserLoggedIn = true;
const temperature = 41;
if (temperature === 40) {
    console.log("less than 50 ");
}
else {
    console.log("temperature is grater than 50 ");
}
console.log("executed");


const score = 200;
if (score > 100) {
    const power = "fly"
    console.log(`user power ${power}`);

}


// const balance = 1000;
// if (balance > 500) console.log("test"), console.log("test2");


// const balance = 1000;
// if(balance < 500){
//     console.log("less than");

// }else if(balance < 750){
//     console.log("less than 750");

// }
// else if (balance < 900){
//     console.log("less than 900");

// }
// else{
//     console.log("less than 1000");

// }



const isUserLoggd = true
const debitCard = true

const loggedInFromGoogle = false
const LoggedInFromEmail = true;
if (isUserLoggd && debitCard && 2 == 2) {
    console.log("allowed to buy the course");
}

if (LoggedInFromEmail || loggedInFromGoogle) {
    console.log("allowed to buy the course");
}






// switch
//  switch (key) {
//     case value:

//         break;

//     default:
//         break;
//  }




// const month = 3
// switch (month) {
//     case 1:
//         console.log("januray");
//         break;
//     case 2:
//         console.log("february");
//         break;
//     case 3:
//         console.log("march");
//         break;
//     case 4:
//         console.log("april");
//         break;
//     default:
//         console.log("invalid number")
//         break

// }


const month = "mar"
switch (month) {
    case "jan":
        console.log("jan");
        break;
    case "feb":
        console.log("feb");
        break;
    case "mar":
        console.log("mar");
        break;
    case "apr":
        console.log("apr");
        break;
    default:
        console.log("invalid alphabets")
        break

}





// truthy or falsy values 
const email = "arsalan@ai.com"
if (email) {
    console.log("getted the user email");

}
else {
    console.log("don't get the user email");

}


// falsy values
// false
// ""
// 0
// -0
// BigInt 0n
// null
// undefined
// NaN

// truthy values
// []
// 1
// true
// "arsalan"
// "0"
// 'false'
// " "
// {}
// function(){}


// const User = []
// if(User.length === 0){
//     console.log("array is an empty");

// }





const emptyObject = {}
if (Object.keys(emptyObject.length === 0)) {
    console.log("object is an empty ");

}





// Nullish Coalescing Operator (??): null undefined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = null ?? 10 ?? 5
console.log(val1);







// Ternary operator
// condition ? true : false 
const iceTeaPrice = 100;
iceTeaPrice >= 180 ? console.log("less than 80") : console.log("more than 80");


