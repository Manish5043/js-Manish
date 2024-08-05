// singleton
// object.create

// object jab constructor se banega to humesha singleton hi banega
// literal se nhi banega


const mySym = Symbol("key1")
// object literals
const jsUser = {
    name:"manish",
    // mySym: "mykey1"
    [mySym]: "mykey1",
    "full name":"manish soni",
    age:18,
    location:"satna",
    idLoggedIn:false,
    lastLoggedIn:["monday","Saturday"]
}
console.log(jsUser.name)
console.log(jsUser["name"])
// here in above full name can't be accessed using dot operator

console.log(jsUser["full name"])
console.log(jsUser[mySym])

jsUser.age = 58
// changing values

// Object.freeze(jsUser)
// no changes applied after using freeze

jsUser.greeting = function(){
    console.log("hello js user")
}
console.log(jsUser.greeting());
// without parenthesis mein function(anonymous) mtlb return nhi hua h uska refernce aaya hai bas 


jsUser.greetingtwo = function(){
    console.log(`hello js user, ${this.name}`);

}
console.log(jsUser.greetingtwo());




