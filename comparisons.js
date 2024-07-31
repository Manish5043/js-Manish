// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0); 
console.log(null == 0);
console.log(null >= 0);

// the reason is that comparisons
// convert null to a number, treating it as zero
// that's why null >=0 is true
// and null > 0 is false;

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

//  === strictly check the data type also

console.log("2" === 2);

// above comparisions hsould be avoided to write a clean code