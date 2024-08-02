// js arrays are resizable with containing different data type values in it
// js arrays make shallow copies
// shallow copies are those whose properties share same reference

const myArr = [0,1,2,3,4,5]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[1]);

// array methods

// myArr.push(6)
// myArr.pop()

myArr.unshift(9)
myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

const newArr = myArr.join()
// console.log(typeof newArr)

// console.log(myArr);
// join will change the data type of array into string


// slice, splice

// console.log("A", myArr);

const myn1 = myArr.slice(1, 3);
// console.log("B", myArr);

const myn2 = myArr.splice(1, 3);
// console.log("C", myArr);
// console.log(myn2);

// slice do not manipulate the original array while splice do manipulate the original array

const mh =["1", "3","4"]
const dh =["5", "6","4"]
// whwn we will print it it will be arrays within arrays but the 2 array that will appended will act as a single element conatainig values

// mh.push(dh);
// console.log(mh);
// console.log(mh[3][2]);

// const allHeros = mh.concat(dh);
// console.log(allHeros);

const allnh = [...mh, ...dh]
// spread operator 

const another_array = [1,2,3, [4,5,6],7, [5,6]]

const r_another_array = another_array.flat(Infinity)
console.log(r_another_array)

console.log(Array.isArray("Mansih"))
console.log(Array.from("Mansih"))
// console.log(Array.from({name: "Manish"})) Interesting

let score1= 100
let score2= 100
let score3= 100

console.log(Array.of(score1, score2, score3))