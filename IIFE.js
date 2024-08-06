// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS

// ()() = iife
// first parenthesis represents function definition and second one refers to execution

//  named iife
(function chai() {
    console.log(`DB CONNECTED`)
}) ();

( (age) => {
    console.log(`Hello manish ${age}`)
})(18)

// to remove global scope pollution we use iife or the variables or any other thing creating pollutions
// iife ko pata nhi hota ki kab end karna h execution to hume semicolon lagan apadta h
// nahi agar humne phirse waise hi function execution kiya to error milega 


