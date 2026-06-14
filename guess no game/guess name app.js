let max=prompt("Enter the Maximun number");
console.log(max);

let guess= prompt("guess the number");
const random = Math.floor(Math.random() * max + 1);
while(true){
    if (guess == "quit") {
        console.log("Game Over.");
        break;
    }
    if (guess == random){
        prompt("Your guess is right .prass enter key to exit.",console.log(guess))
        console.log(guess)
        break;

    } if (guess < random){
        console.log(" your guess no is small");
    }else  if (guess > random){
        console.log(" your guess no is large");
    }
    
    
    else{
      guess=  prompt("plese try again. your guess is wrong!!");
        console.log(guess);
     }
 
}