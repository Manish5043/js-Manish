const myobject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
}

for (const key in myobject) {
    console.log(`${key} shortcut is for ${myobject[key]}`);

}

const program = ["js","cpp","rb","py"]

for (const key in program) {
    console.log(key);
    console.log(program[key]);
}
// jab for in loop lagate hain array par aur key print karte hai to indexes print hote hain jo 0 se start hote hai
// map ko for in se iterate nahi karsakte hai

// for each loop

const coding = ["js","python","c++"]

// coding.forEach( function (val){
//     console.log(val);
// })

coding.forEach( (item) => {
    console.log(item);
})

function printme(item){
    console.log(item);
}

coding.forEach(printme)

coding.forEach( (item,index,arr) => {
    console.log(item,index,arr);
})
// array of objects
const mycoding = [
    {
    name:"javascript",
    file: "js"
    },
    {
    name:"java",
    file: "java"
    },
    {
    name:"python",
    file: "py"
    },
]

mycoding.forEach( (item) =>{
    console.log(item.name);
    console.log(item.file);
})