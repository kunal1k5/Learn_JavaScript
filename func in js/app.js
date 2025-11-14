function hello() {
    console.log("hello");
}

hello();
hello();
hello();


function DiceRoll() {
   let rand = Math.floor(Math.random()*6) +1;  
    console.log(rand);
}

DiceRoll();
DiceRoll();
DiceRoll();
DiceRoll();


function average(a,b,c){
    let avg = (a+b+c)/3;
    console.log(avg);
}

average(2,2,3);


function table(n){
    for(let i=1; i<=10; i++){
        console.log(n*i);
    }
    
}

table(3)






let str = ["dd","asdf","gjkl"];
function concat(str){

    let str1 = "";
    for(let i=0; i<str.length; i++){

        str1 += str[i]; 
        
    }
    return str1;
}




// calculator

const calculator = {

    num : 55,

    add : function(a,b){
        return a+b;
    },
    sub : function(a,b){
        return a-b;
    },

    mul : function(a,b){
        return a*b;
    },

    div : function(a,b){
        return a/b;
    }
;}
