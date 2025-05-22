const max=prompt("Enter a number");
const random=Math.floor(Math.random()*max)+1;
let guess=prompt("Guess the number");
while(true){
    if(guess=="quit"){
        console.log("User quit");
        break;
    }
    if(guess==random){
        console.log("Your guess was right, the number was", random);
        break;
    }else if(guess<random){
        guess=prompt("Hint: Your guess was too small, please try again");
    }else{
        guess=prompt("Hint: Your guess was too large, please try again");
    }
}
