// const coding = ["js","python","c++"]
// // for each does not return a value

// const values = coding.forEach(  (item) => {
//     console.log(item);
//     return item
// } )

// console.log(values);
// above print statement will return undefined

// filter in arrays

const mynums = [1,2,3,4,5,6,7,8,9]
// filter method ke andar function call back hota hai waise to funnction jaise likhte hai waise hi parameter daaal dete hai
// bas name hata dete hai ya phir arrow function use kar sakte hai

// const newnums = mynums.filter( (num) => num > 4)
// console.log(newnums);

// const newnums = mynums.filter( (num) => {
//     return num > 4
// })
// console.log(newnums);

// jab curly braces use  karte hai to wo scope banjaat hai to koi bhi condition uske andar daalenge to usko return karna jaroori hai

// const newnums = []

// mynums.forEach( (num) => {
//     if(num > 4) {
//         newnums.push(num);
//     }
// })
// console.log(newnums);

// if there is a database data containing data about books then how to filter that database using filter method


let userbooks = books.filter( (bk) => bk.genre === 'History')


userbooks = books.filter( (bk) => {
    return bk.publish >= 2000 && bk.genre === "history"
})
console.log(userbooks)

