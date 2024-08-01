const name = "manish"
const repocount  = 50

// console.log(name + repocount + "value");


// strinh interpolation
console.log(`hello my name is ${name} and
    my repocount is ${repocount}`);

const gameName = new String('manish-yx')
// object invoked with brackets representing constructor
// new string value stored in key value pairs


// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length());
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));

const newString = gameName.substring(0,3);
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

// substring will not follow negative indexing will return the same ans
// however slice can take negative indexes

const newStringone = "  manish  "
console.log(newStringone)
console.log(newStringone.trim());
// trim will terminate the whitespaves and line characters

const url = "www.manish%20.com"

console.log(url.replace('%20', '+'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'))





