let fav = "Three idiot";

let guess = prompt("guess my favorite movie");

while((guess != fav ) && (guess != "quit")){
    
    guess = prompt("wrong guess, please try again");
}

if(guess == fav){
    console.log("congrats");
}

else{
    console.log("you quit");
}