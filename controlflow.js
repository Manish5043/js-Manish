// if
const isuserloggedIn = true
// const temperature = 41
// if (temperature == 40){
//     console.log("less than 50")
// } else {
//     console.log("invalid")
// }
// console.log("manish");

// if( 2 != 3){
//     console.log("executed");
// }

// <, >, <=, >=, == , !=, ===, !==

// var scope is completely global

const score = 200

// if(score > 100) {
//     var power = "fly"
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`);

const balance = 1000

// implicit scope

// if (balance > 500) console.log("test"),
// console.log("test2");

const userLoggedIn = true
const debitcard = true
const loggedinemail = true
const loggedingoogle = false

if(userLoggedIn && debitcard) {
     console.log("allowed")
}
if(loggedinemail || loggedingoogle){
    console.log("user logged in")
}
