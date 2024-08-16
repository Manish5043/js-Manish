document.getElementById('title').getAttribute('id')
document.getElementById('title').getAttribute('class')
document.getElementById('title').setAttribute('class', 'test')
document.getElementById('title').setAttribute('class', 'test heading')


document.getElementById('title')

const title = document.getElementById('title')
// variable me set kardiya 

title.style.backgroundColor = 'green'
title.style.padding = '15px'
title.style.borderRadius = '5px'


title.textContent
// dom learning
title.innerHTML
// dom learning

title.innerText
// dom learning

// innerText bas jo site pe display title ka text hai wo bas dikhata hai jabki 
// textContent jo hai poora text dikhata hai jo usme likha gaya hai joki ho sakta hia ki css property display none se hata diya gaya ho

// innerhtml html tags ko bhi suport karta hai jabi wo dono html tags ko support karte hain


// query selector

document.querySelector('h2')
document.querySelector('#title')
document.querySelector('.heading')
document.querySelector('input[type="password"]')


document.querySelector('p:first-child')

document.querySelector('ul')

const myul = document.querySelector('ul')

myul.querySelector('li')

const turngreen = myul.querySelector('li')

turngreen.style.backgroundColor = "green"

turngreen.innerText

turngreen.innerText = "five"


document.querySelectorAll('li')

const temp = document.querySelectorAll('li')
// here temp is a nodelist

// Html collections and nodelist are not fully array they have a prototype foreach where students get confused 


temp.style.color = 'green'
// the above code will not work


temp[0].style.color = 'green'
// this code will work

const myh1 = document.querySelectorAll('h1')

myh1.style.color = 'green'
// this above code will not work

myh1[0].style.color = 'green'

// nodelist pe foreach method lag jaata hai
temp.forEach(function (l) {
    l.style.backgroundColor = 'green'
})

document.getElementsByClassName('list')
// this will print html collections loops will bot work


const tempclasslist = document.getElementsByClassName('list')


// how to convert html collections into nodelist

Array.from(tempclasslist)

const myconvertedarray = Array.from(tempclasslist)


myconvertedarray.forEach(function (li) {
    li.style.color = 'orange'
})


