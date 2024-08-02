// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

// date is an object in js
// js stores dates as number of milliseconds since 1 jan 1970

// let mycreatedDate = new Date(2023, 0, 23)
// let mycreatedDate = new Date(2023, 0, 23,5 ,3)
let mycreatedDate = new Date("2024-08-02")
// console.log(mycreatedDate.toLocaleString());


// timestamp is used to design polls quizes
let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(mycreatedDate.getTime());
//  value will be printed in millsecons we can convert it into seconds

// console.log(Math.floor(Date.nonw()/1000));
// month ki staring 0 se hoti h

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth() + 1);
// 1 isiliye kyuki 0 se staring h

// vvimp
newDate.toLocaleString('default', {
    weekday: "long"
})

