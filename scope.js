// var c =900
let a =300
if (true) {
    let a=10
    const b =20
    // var c  = 30
    // console.log( "INNER:", a)
}

// console.log(a)
// console.log(b)
// console.log(c)
// a aur b ki value print nahi hogi par c ki hojayegi scope ke bahar hone ke bawajood


function one(){
    const username = "manish"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()

if(true) {
    const username = "manish"
    if(username === "manish") {
        const website = "yt"
        console.log(username + website);
    }
    // console.log(website); can't be accesed out  of scope
}
// console.log(username);

// +++++++++++++++Interesting

function addone(num){
    return num+1
}
addone(4)

addtwo(8)
const addtwo = function(num){
    return num+2
}

// jab function ko declaration karke kisi variable mein hold karte hai to usko kahin pe bhi call nhi kar sakte only variable ke initialization ke baad hi kar sakte hai


