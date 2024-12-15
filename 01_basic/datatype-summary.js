// Primitive Type DataTypes

// Number, String, Boolean, null, undefined, symbol, BigInt

const score = 100;
const averageSCore = 100.9;

let name = "Rohit sharma";

const isOut = true;

const age = null ;

let innings;

let id = Symbol('123');



// Non-primitive data type

let teamName = ["ravi","rohit"];

let obj ={
    age:23,
    name:"rahul"
}


// memory stack and heap

let myName = "harsh";

// let myAnothername = "somil";

let anotherName = myName;

anotherName ="somil";
// console.log(anotherName);
// console.log(myName);

let mySkills ={
    js: 8,
    python:4,
    html:9
}


let anotherSkill = mySkills;
console.log(anotherSkill);

mySkills.js= 10;

console.log(mySkills);
console.log(anotherSkill);




