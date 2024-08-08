// for

for (let i = 0; i < 10; i++) {
    const element = i;
    if(element ==0){
        // console.log("5 is best")
    }
    // console.log(element);
    
}
for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop value : ${i}`)
    for (let j = 1; j <= 10; j++) {        
        // console.log(`inner loop value : ${j} and inner loop ${i}`)
        // console.log(i + '*' + j + ' = ' + 'i*j')
    }
}

let arr = ["manish","mani","mahii"]
console.log(arr.length);
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element)
    
}
// index ke bahar jaayega to undefined dedega koi out of bound ya error nhi deta h


// break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log('detected 5')
        break;
    }
    console.log(`value of i is ${index}`);  
}
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log('detected 5')
        continue;
    }
    console.log(`value of i is ${index}`);  
}


let index =0
while (index <=10 ) {
    console.log(`index value is ${index}`);
    index = index +2;
}
let arra = ["manish","hari","mukul"]

let ar =0
while (ar <arra.length) {
    console.log(`value is ${arra[ar]}`)
    ar = ar +1
}

let score = 1
do {
    console.log(`score is ${score}`)
    score ++
} while (score <=10);