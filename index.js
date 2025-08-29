//Random number generator
//const min=50;
//const max=100;
//let randomNum=Math.floor(Math.random() * max-min)+min;

//console.log(randomNum);

const myButton=document.getElementById("myButton");
const myLabel=document.getElementById("myLabel");
const myLabe2=document.getElementById("myLabe2");
const myLabe3=document.getElementById("myLabe3");
const min=1;
const max=6;
let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick=function(){
    randomNum1=Math.floor(Math.random()*max)+min;
    randomNum2=Math.floor(Math.random()*max)+min;
    randomNum3=Math.floor(Math.random()*max)+min;
    myLabel.textContent=randomNum1;
     myLabe2.textContent=randomNum2;
      myLabe3.textContent=randomNum3;
}