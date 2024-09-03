// js is a prototyple behaviour language

// function,string,array --->object ----> null

// everythinh is object in js

// function is function and object also

function multiply(num){
    return num*5
}

multiply.power =2

console.log(multiply(5));
console.log(multiply.power);
console.log(multiply.prototype);


function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printme = function(){
    console.log(`price is ${this.score}`)
}

const chai = new createUser("chai", 25)
const tea = createUser("tea", 15)

chai.printme()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

// above was all discuusions about new keyword

// let myname = "manish    "
// let mychannel = "chai      "

// console.log(myname.trueLength);



let myheros = ["thor", "spiderman"]

let heropower = {
    thor: "hammer",
    spiderman : "sling",

    getpower: function(){
        console.log(`spidy power is ${this.spiderman}`)
    }
}

Object.prototype.manish = function(){
    console.log(`manish is present in all objects`);
}



Array.prototype.himanish = function(){
    console.log(`manish is present`);
}

// heropower.manish()

myheros.manish()
myheros.himanish()

// heropower.himanish() code failed



// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()





