// const tinderUser = new Object()
// singleton object

const tinderUser = {}
// non-singleton type of declaration

tinderUser.id = "123abc"
tinderUser.name = "123abc"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullname: {
            first: "manish",
            last: "soni"
        }
    }
}
// console.log(regularUser.fullname.userFullname.first);

 const obj1 = {1:"a",2:"b"}
 const obj2 = {3:"a",4:"b"}

//  const obj3 = {obj1,obj2}
// const obj3 = Object.assign({}, obj1,obj2)
// console.log(obj3);
// empty braces are target and objects referred to as source

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// Array of objects
const users = [
    {
        id:1,
        email: "h@gmail.com"
    },
    {
        id:1,
        email: "h@gmail.com"
    }
]

users[1].email;

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// de-structuring of objects
const course = {
    coursename: "js in hindi",
    price: "999",
    courseinstructor:"hitesh"
}

// course.courseinstructor

const {courseinstructor: instructor} = course

// console.log(courseinstructor);
console.log(instructor);
// {} ->destructuring

// Json format is same as object declaration but without the object name
// {
//     "name":"hitesh",
//     "coursename": "js in hindi ",
//     "price": "free"
// }
// APi's can be found or declared or can be seen using object as well as arrays of objects
