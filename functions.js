function sayname(){
    console.log("m");
    console.log("a");
    console.log("n");
    console.log("i");
    console.log("s");
    console.log("h");
}

// sayname()    execution of functions

// function add(num1, num2){
//     console.log(num1 + num2)

// }
function add(num1, num2){
        // let result = num1+num2
        // return result
        return num1+num2
    
    }
const result = add(3,4)

// console.log("Result :", result)
// output = undefined

// function definition me parameters pass hote h
// function call me arguments pass hote h

function userlogin(username = "sam"){
    if(username === undefined || !username){
        console.log("please enter a name");
        return

    }
    return `${username} just loggeed in`
    // string interpolation
}

// console.log(userlogin("manish"))
// console.log(userlogin())
// when we do not pass any value in function call it returns undefined

//  ... = defined as a rest operator or spread operator in various cases
// function calculateprice(val1,val2, ...num1) in this case num1 will be 6100
function calculateprice(...num1){
    return num1
}

console.log(calculateprice(200, 400, 6100))

const user = {
    username: "manish",
    price: 500
}
// if we are using object in function we have to check typesafety
// anyobject is passed so that it remain in generic form
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleobject(user)
handleobject({
    username: "sam",
    price:999
})
const myarr =[200, 400,100, 200]

function returnsecondvalue(getarr){
    return getarr[1]

}
// console.log(returnsecondvalue(myarr));
console.log(returnsecondvalue([1,2,3,4,5]));

