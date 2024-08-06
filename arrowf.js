// this refers currentcontext

const user = {
    username: "manish",
    price:898,

    welcomemessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

user.welcomemessage()
user.username = "sam"
user.welcomemessage()
// value is not hardcoded

// console.log(this); -> this will print empty{} object as it is in node environment

//  browser ke andar jo global object h wo global object hai


// function chai(){
//     let username = "manish"
//     console.log(this.username);
//     // will print undefined so we can't use this inside a function

// }

// chai()

// const chai = function(){
//     let username = "manish"
//     console.log(this.username);
// }

// ++++++ how to declare functions using arrow functions

const chai = () => {
    let username = "manish"
    console.log(this.username);
    // above will also print undefined
}

// chai()

// const add = (num1,num2) => {
//     return num1+num2
// }

// const add = (num1,num2) =>  num1+num2
// implicit return
// const add = (num1,num2) =>  (num1+num2)

const add = (num1,num2) => ({username: "manish"})

console.log(add(3,4))


