//!#/usr/bin/env Node
import inquirer from "inquirer";

let roundNumber : number = Math.floor((Math.random()*4)+1);
let userinput = await inquirer.prompt({
    type:"number",
    name:"guessedNumber",
    message:"Guess a number between 1-4",
})
if(userinput.guessedNumber ===roundNumber){
    console.log("Congratulations! You guessed correctly!");
}
else{
    console.log(`Sorry! try next time.Correct number is :${roundNumber}`);
}