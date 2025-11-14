
// FOR EACH METHOD-------------

// let arr = [1,2,3,4,5];

// let print = function(el) {
//     console.log(el);
// };

// arr.forEach(print);

// OR________

// arr.forEach(function(el){
//     console.log(el);
// });

// OR________

// arr.forEach((el) => {
//     console.log(el);
// });

// new Question___________


// let arrr = [{

//     name : "a",
//     marks : 96,
// }, {
//     name : "b",
//     marks : 95,

// }, {

//     name : "c",
//     marks : 99,
// }];

// arrr.forEach((student) => {

//     console.log(student.marks);
// })



// MAP FUNCTION --------------

// let num = [1,2,3,4,5];

// let double = num.map(function(el){
//     return el*2;
// });

// Q2 ----

// let numm = [1,2,3,4,5,6,7,8,9,10,11,12];

// let ans = numm.filter((el) => {

//     return el % 2 == 0;
// });


//  EVERY FUNCTION ----------

// let a = [2,3,4,5,6,];

// let anss = a.every((el) => {

//     return el % 2 == 0;
// });

// let b = [2,4,6,];

// let ansss = a.every((el) => {

//     return el % 2 == 0;
// });



// REDUCE FUNCTION --------------


// let num1 = [1,2,3,4];
// let finalValue = num1.reduce((res,el) => res + el);


// // Question max in array -----------

// let arr = [1,4,2,3,5,9,0,6,7];

// let maxFind = arr.reduce((max,el) =>{

//     if(max < el){
//         return el;
//     }else {
//         return max;
//     };
// });

// console.log(maxFind);


// DEFAULT PARAMETERS ---------------------


// function sum(a , b = 2){
//     return a+ b;
// }


// SPREAD FUNCTION ----------

// let arr1 = [1,2,3,4,-1,-2];

// console.log(Math.min(...arr1));


// SPREAD WITH ARRAYS---------------

let arr = [1,2,3,4,5];
let newArr = [...arr];

let chars = [..."hello"];

let odd = [1,3,5,7,9];
let even = [2,4,6,0];

let nums = [...even , ...odd];


// SPREAD WITH OBJECT LITERALS ------------


const data = {
    email : "abc@gmail.com",
    password : "abcd12",
};

const dataCopy ={...data, id : 123, country : "India"};


let arr1 = [1,2,3,4,5];
let obj = {...arr1};

let obj1 = {..."hello"};



// REST -------------------

function sum(...args){   // args = argument
    //argument
    for(let i=0; i<args.length; i++){
        console.log("you gave us: ", args[i])
    }
}

function main() {
    console.log(arguments);
    console.log(arguments.length);
}



// DESTRUCTURING ---------

let names = ["tony", "bruce", "peter", "steve","asas","aad","asdd","dvdfx"];
// let winner = names[0];
// let runnerup = names[1];
// let secondRunnerup = names[2];

let [winner,runnerup,secondRunnerup,...others] = names;


// DESTRUCTURING (OBJECTS) ----------------


const student = {
    name : "abcd",
    age : 19,
    class : "3rd year",
    subjects : ["english","maths","physics"],
    username : "abc@123",
    password : "abdf123",
};

// let username = student.username;
// let password = student.password;

let {username : user , password : secret, city = " mumbai"} = student;


