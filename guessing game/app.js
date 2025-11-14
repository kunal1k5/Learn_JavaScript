let user = prompt("guess any number");
let rand = Math.floor(Math.random * user) +1;

if(user == rand ){
    console.log("found number");
}