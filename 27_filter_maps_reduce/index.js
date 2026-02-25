// const coding = ["js", "ruby", "java", "python", "cpp"]
// const values = coding.forEach( (item) =>{
//     console.log(item);

// })
// console.log(values);


const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8]
//  const newNums = myNumbers.filter( (num) => num > 5)
// const newNums = myNumbers.filter((num) => {
//     return num > 4
// })


const newNumss = []
myNumbers.forEach((num) => {
    if (num > 4) {
        newNumss.push(num)
    }
})
console.log(newNumss);

let books = [
    {
        title: "Wings of Fire",
        writer: "A. P. J. Abdul Kalam",
        genre: "Autobiography",
        publishDate: 1999
    },
    {
        title: "Harry Potter and the Philosopher's Stone",
        writer: "J. K. Rowling",
        genre: "Fantasy",
        publishDate: 1997
    },
    {
        title: "The Alchemist",
        writer: "Paulo Coelho",
        genre: "Fiction",
        publishDate: 1988
    },
    {
        title: "Ramayana",
        writer: "Valmiki",
        genre: "Epic",
        publishDate: "Ancient"
    },
    {
        title: "Gitanjali",
        writer: "Rabindranath Tagore",
        genre: "Poetry",
        publishDate: 1910
    }
];


const userBooks = books.filter((bk) => {
    return bk.genre == 'Fiction'
})
let userBookss = books.filter((bk) => {
    return bk.publishDate >= 1900 && bk.genre === "Fiction"
})

console.log(userBooks);
console.log(userBookss);

const myNumberies = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNumbries = myNumberies.map((num) =>{
//     return num + 10
// })
const newNumbries = myNumberies
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num >= 40)
console.log(newNumbries);





// reduce in js 

const myNumericals = [1, 2, 3]
// const myTotal = myNumericals.reduce(function (acc, curr) {
//     return acc + curr
// }, 0)
// console.log(myTotal);


const myTotal = myNumericals.reduce((acc, curr) => {
    return acc + curr
}, 0)
console.log(myTotal);


const shoppingCard = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "mobile-development course",
        price: 5999
    },
    {
        itemName: "data-science course",
        price: 12999
    }
]
const priceToPay = shoppingCard.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);

