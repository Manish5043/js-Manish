const mynumbers = [1,2,3,4,5,6,7]

// const newnums = mynumbers.map( (num) => num +10)

// chaining

const newnums = mynumbers
                   .map((num) => num*10)
                   .map((num) => num + 1)
                   .filter((num) => num >= 40)

// console.log(newnums);

// reduce

const nums =[1,2,3]

// const total = nums.reduce(function (acc,currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc + currval
// }, 3)

// , ke baad accumulator ke liye initial value hai

const total = nums.reduce((acc,curr) => acc+curr, 0)

console.log(total);


const pay = shoppingcart.reduce((acc, item) => acc + item.price, 0)
