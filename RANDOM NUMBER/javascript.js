
//let min=50;
//let max=100;
//let random = Math.floor(Math.random() * (max-min)) + min;
//console.log(random);


const button = document.getElementById("btn");
const label = document.getElementById("labelcontent");
const min = 1;
const max = 6;
let randomnum;

button.onclick = function(){
    randomnum = Math.floor(Math.random() * max) + min;
    label.textContent= randomnum;
}

