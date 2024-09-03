const user = {
    username:"manish",
    logincount:8,
    signin: true,

    getuserdetails: function(){
        // console.log("xyz")
        // console.log(`username: ${this.username}`)
        console.log(this);
    }
}

console.log(user.username);
console.log(user.getuserdetails());

console.log(this);
// above statment will print the global execution context
// which do not have anything so will return empty parenthesis

const promise = new Promise()
const date = new Date()

// here new is mainly the constructor function which is helpful when we want to make multiple
// instances from object literals

// this primarly ek object hi hai jisme values hum daalte j rahe hain



function user(username,count,loggedin){
    this.username = username;
    this.count = count;
    this.loggedin = loggedin;

    return this
    // return this is implicitly defined so writing it or not will run the function orginally
}


const userone = new user("manish",12,true)
const usertwo = new user("manih",2,true)

console.log(userone.constructor);
// constructor property is refernce to owns value
console.log(usertwo);


// new object created
// constructor function called
// this keyword mein value inject ho jaati hain

// instanceof operator