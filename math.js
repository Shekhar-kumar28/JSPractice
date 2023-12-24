const max = console.log("enter the max number");

const random = Math.floor(math.random() * max)+1;

let guess = console.log("guess the number");

while(true){
    if(guess == "quit"){
        console.log("user quit");
        break;
    }
    if(guess == random){
        console.log("You are right! congrats!!");
        break;
    }else if(guess < random){
        console.log("your guess is too low!");
    }else{
        console.log("your guess is too high!");
    }
}