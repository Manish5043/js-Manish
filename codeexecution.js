// js execution context
// kuch nahi hoga to global object h joki browser ke window object ko refer karta ha using
// this variable
// 2 prakr ke h 1- global ec
// 2- function ec   and eval ec

let val1 = 10
let val2 = 5
function addnum(num1, num2){
    let total = num1+num2
    return total
}
let result1 = addnum(val1,val2)
let result2 = addnum(10, 2)

// EXECUTION PHASE
// 1) Global execution using this variable first step
// 2) Memory Phase
// val1->undefined
// val2->undefined
// addnum-> defination
// result1->undefined
// result2->undefined

// 3)execution phase mein saare operations hote hain
// val1->10
// val2->5
// addnum ke liye alag se execution context banega
// addnum ke andar new variable environment + execution thread
// jitni baar function aayega utni baar ek naya sandbox banega ya context box banega aur
// phirse 2 and 3 step honge jo h memory creation phase aur execution phase
// naya context box banneke baad uska kaam jab khatm hojata h to wo delete bhi hojaata h

// function jo value return karega wo global execution context mein hi karega ya apne parent executional context me karega
// js ka poora execution thread pe hota hai uske saath js ek singly-threaded language hai
//  jo total ya ans return hota h wo global execution context me chale jaat hai


// call stack
// methods will return in LIFO order

 
