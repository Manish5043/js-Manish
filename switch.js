// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3
// we can take another data type also

switch (month) {
    case 1:
        console.log("jan");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;

    default:
        console.log("default case match");
        break;
}


// truthy and falsy values +++++++++++==

const useremail = "manish"

if (useremail) {
    console.log("got user email");
} else {
    console.log("dont have user")
}


// falsy values

// false, 0,-0, BigInt On,"",null,undefined, NaN

// truthy values
// "0", 'false'," ", [], {}, function(){}

// if (useremail.length === 0){
//     console.log("Array is Empty");
// }

const emptyobj = {}

if(Object.keys(emptyobj).length === 0) {
    console.log("object is empty")
}

// Nullish coalescing operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 =  undefined ?? 15

val1 = null ?? 10 ?? 20

console.log(val1);

// ternary operator

// condition ? true : false

const price = 100
price <= 80 ? console.log("less than 80") : console.log("more than 80")
