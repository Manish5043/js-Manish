// lexical scoping

function outer(){
    let username = "manish"
    console.log(secret);
    function inner(){
        let secret = "123"
        console.log("inner",username)
    }
    function innertwo(){
        console.log("innertwo",username);
        console.log(secret);
    }
    inner()
    innertwo()
}
outer()
console.log("too outer", username);


// parent function se cheezein child function le sakta hia
// par siblings properties acces nahi kar sakte ek doosre ki



// closure

// iska matlab jab aap function return karte ho to usko poora scope return hota hai 
// matlb lexical scope

// function make(){
//     const name = "mozilla";
//     function display(){
//         console.log(name);
//     }
//     return display;
// }
// make();



// document.getElementById("orange").onclick = function(){
//     document.body.style.backgroundColor = "orange"
// }


function handler(color){
    // document.body.style.backgroundcolor = `${color}`

    return function(){
        document.body.style.backgroundColor = `${color}`
    }
}
document.getElementById('orange').onclick = handler("orange")
document.getElementById('green').onclick = handler("green")

