#! /usr/bin/env node

import inquirer from "inquirer";


// Initialize user balance and pin code
let myBalance = 5000;
let myPin = 12345;

// print welcome message
console.log("Welcome to Ayesha Siddiqa - ATM Machine")

let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin code:"
    }
])
if (pinAnswer.pin === myPin){
    console.log("Pin is Correct, Login Successfully!");
    console.log(`Current Account Balance is ${myBalance}`)

    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "select an operation:",
            choices: ["Withdraw Ammount", "Check Balance"]
        }
    ])

    if(operationAns.operation === "Withdraw Ammount"){
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount to withdraw:"

            }
        ])
        if(amountAns.amount >myBalance){
            console.log("tnsufficiant Balance");

        }
        else{
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} Withdraw successfully`);
            console.log(`Your Remaining Balance is: ${myBalance}`)
        }
    }
    else if (operationAns.operation === "check Balance"){
        console.log(`Your Account Balance is: ${myBalance}`);
    }
}
else{
    console.log("Pin is Incorrect, Try Again!");
}