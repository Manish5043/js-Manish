// primitive

// 7 types:string,number,boolean,null,undefined,symbol,bigint
// call by value


// javascript is dynamically typed

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const temp = null
let userEmail;

const id = Symbol("122")
const anotherId = Symbol('122')

// above ids are not equal return value not same

// refernce(Non-primitive)
// array,objects, functions

const heros = ["manish","mkll"];
let myObj = {
    name: "manish",
    age: 22,
}

const myFunction = function(){
    console.log("hello world");
}
console.log(typeof temp);
// type of attributes
// undefined = undefined
// null = Object
// boolean = boolean
// number = number
// string = string
// object = object
// function returns object function
// non-primitive type return functions 
// symbol = symbol
// big int = bigint
// arrays = object


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// stack(primitive), heap(non-primitive)
//  copy, reference
let myYoutubename = "manish.com"

let anothername = myYoutubename
anothername = "chai"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "manish.com",
    upi: "manish@rtu"
}
let userTwo = userOne

userTwo.email = "mani.com"
console.log(userOne.email);
console.log(userTwo.email);





