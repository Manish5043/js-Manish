// generate a random color

const randomcolor = function() {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

// console.log(randomcolor());
let interval;
const startchangingcolor = function(){
    if(!interval) {
        interval = setInterval(changebgcolor, 1000);
    }
    

    function changebgcolor(){
        document.body.style.backgroundColor = randomcolor();

    };
};
const stopchangingcolor = function(){
    clearInterval(interval);
    // interval = null;
};

document.querySelector('#start').addEventListener('click', startchangingcolor);

document.querySelector('#stop').addEventListener('click', startchangingcolor);