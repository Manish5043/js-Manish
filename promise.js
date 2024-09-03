const promiseone = new Promise(function(resolve,reject){
    // do an async task
    // DB calls, cryptography, network call
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
})

promiseone.then(function(){
    console.log("promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve();
    },1000)
}).then(function(){
    console.log("resolved");
})


// jaise hi resolve method use karte hai to wo then ke saath connect ho jaat hai iske baad resolve me jo bhi paramteres honge wo directly paasss hojaayenge then ke andar same 

// resolve ke paramters me object ya array dono pass kar sakte hai

const promisethree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "manish", email: "manish@.com"})
    },1000)
})

promisethree.then(function(user){
    console.log(user);
})
// promise state
// 1. pending
// 2/fullfilled
// 3. rejected

// 4

const promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error) {
            resolve({username: "manish", pasword: "123"})
        } else {
            reject('something went wrong')
        }
    },1000)
})

promisefour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch(function(error){
    console.log(error);
}).finally(() => console.log("the promise is either resolved or rejected"))



const promisefive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error) {
            resolve({username: "javascript", pasword: "123"})
        } else {
            reject('js went wrong')
        }
    },1000)
})


async function consumepromisefive(){
    try {
        const response = await promisefive
        console.log(response);
    } catch (error) {
        console.log(error)
    }
}

consumepromisefive()



// async function getallusers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("e:", error);
//     }
// }
// getallusers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))


// response = fetch('something')
// something ke bagal mein humlog object bhi pass kar skate hai


// fetch do part mein kaam karta hai 
// 1.data := _______
    // a.onfullfield array promise ka resolve
    // b.onrejection array  promise ka reject hota hai
    // inhe acces nahi kar sakte hai data not accessible

// 2. webbrowser/node  API   // 
    //  network request

    // ek resourece chahiye hota hai joki bowser se ya node se newtork request karta hai

    // network call se resonse aay ato wo onfullfilledpe jaata hia aur agar 
    // kuch nahi aaya to wo reject pe jaayega
    //  404 error aaya to wo onfullfilled

