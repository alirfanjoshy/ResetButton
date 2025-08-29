//console.log(`Hello`)
//console.log(`I like pizza`);


//window.alert(`this is an alert`);
//window.alert(`i like pizza`);

//document.getElementById("myH1").textContent=`Hello`;
//document.getElementById("myP").textContent=`I like pizza`;

//let x;
//x=100;

//console.log(x);

//let age=25;
//let price=10.99;
//let gpa=2.1;
//let favouriteFood=`pizza`;

//console.log(typeof favouriteFood);
//console.log(`your favourite food ${favouriteFood} `);

//let online=true;
//let forSale=true;
//let isStudent=true;


//console.log(typeof online);
//console.log(`i am online: ${online}`);
//console.log(`is this car for sale: ${forSale}`);
//console.log(`Enrolled : ${isStudent}`);

//let fullName="Al Irfan";
//let age=22;
//let student=true;

//document.getElementById("p1").textContent=`your name is ${fullName}`;
//document.getElementById("p2").textContent=`you are ${age} years old`;
//document.getElementById("p3").textContent=`Enrolled: ${student}`;

//let students=30;

//studentss=students+1;
//students=sstudents-1;
//students=students*2;
//students=students/2;
//students=students**3;
//students=students%3;
//students%=3;

//console.log(students);

//et result=12 % 5 + 8/2;

//console.log(result);

//let usernaem;

//username=window.prompt("What is your user name?");
//console.log(username);

//let username;

//document.getElementById("mySubmit").onclick=function(){
//username=document.getElementById("myText").value;
//document.getElementById("myH1").textContent=`Hello ${username}`;
 
//let age=window.prompt("How old are you?");
//age=Number(age);
//age+=1;
//console.log(age,typeof age);

//let x=25;
//let y="pizza";
//let z="true";

//x=Number(x);
//y=String(y);
//z=Boolean(z);

//console.log(x,typeof x);
//console.log(y,typeof y);
//console.log(z,typeof z);

//const PI=3.14159;
//let radius;
//let circumference;

//radius=window.prompt(`Enter the radius of a circle`);
//radius=Number(radius);

//circumference=2 * pi * radius;

//document.getElementById("mySubmit").onclick=function(){
//radius =document.getElementById("myText").value;
//radius=Number(radius);
//circumference=2 * PI * radius;
//document.getElementById("myH3").textContent=circumference+"cm";

const decreaseBtn=document.getElementById("decreaseBtn");
const resetBtn=document.getElementById("resetBtn");
const increaseBtn=document.getElementById("increaseBtn");
const countLabel=document.getElementById("countLabel");
let count=0;

increaseBtn.onclick=function(){
    count++;
    countLabel.textContent=count;
}

decreaseBtn.onclick=function(){
    count--;
    countLabel.textContent=count;
}

resetBtn.onclick=function(){
    count=0;;
    countLabel.textContent=count;
}