// ARROW FUNCTION .--------------------\


const sum = (a,b) => {
    console.log(a+b);
};

const cube = a => {
    return a*a*a;
};

const pow = (a,b) => {
    return a ** b;
};

// implicit return ..............

const mult = (a,b) => a*b;


// SET TIME OUT FUNCTION----------------------


console.log("hi there!");

setTimeout(() => {
    console.log("Apna college");
}, 4000);

console.log("Welcome to");



// SET INTERVAL FUNCTION-------------------

// console.log("hlo");

// setInterval(() => {
//     console.log("guys");
// }, 2000);


// console.log("hlo");

// let id = setInterval(() => {
//     console.log("guys");
// }, 2000);

// console.log(id);


// THIS WITH ARROW FUNCTION --------------


const student = {
    name : "raj",
    marks : 95,
    property : this,   // global scope   ->  window
    getName : function() {
        return this.name;
    },

    getMarks : () => {
        console.log(this);  // parent's Scode  ->  window
        return this.marks;
    },

    getInfo1 : function() {
        setTimeout(() => {
            console.log(this)  // student object
        }, 2000);
    },

    getInfo2 : function() {
        setTimeout(function(){
            console.log(this);  //  window object 
        },2000);
    },
};
