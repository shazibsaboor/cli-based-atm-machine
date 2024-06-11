#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
let balance = 20000;
let atmPin = 1234;
let yourPin = await inquirer.prompt([
    {
        type: 'number',
        name: 'pin',
        message: 'Please enter your pin'
    }
]);
if (yourPin.pin === atmPin) {
    console.log(chalk.green('Your pin is correct'));
    let options = await inquirer.prompt([
        {
            type: 'list',
            name: 'whatToDo',
            message: 'Please select from the options below',
            choices: ['Withdraw', 'Balance inquiry']
        }
    ]);
    if (options.whatToDo === 'Withdraw') {
        let yourAmount = await inquirer.prompt([
            {
                type: 'list',
                name: 'amount',
                message: 'Pleae select a withdrawal amount',
                choices: ['1000', '2000', '5000', '10000', 'Input Manually']
            },
            {
                type: 'list',
                name: 'receipt',
                message: 'Would you like a receipt?',
                choices: ['Yes', 'No']
            }
        ]);
        if (yourAmount.amount === '1000') {
            balance -= 1000;
            console.log('Please take your withdrawal money\nYour remaining balance is', balance);
        }
        else if (yourAmount.amount === '2000') {
            balance -= 2000;
            console.log('Please take your withdrawal money\nYour remaining balance is', balance);
        }
        else if (yourAmount.amount === '5000') {
            balance -= 5000;
            console.log('Please take your withdrawal money\nYour remaining balance is', balance);
        }
        else if (yourAmount.amount === '10000') {
            balance -= 10000;
            console.log('Please take your withdrawal money\nYour remaining balance is', balance);
        }
        else if (yourAmount.amount === 'Input Manually') {
            let manualAmount = await inquirer.prompt([
                {
                    type: 'number',
                    name: 'manual',
                    message: 'Please enter withdrawal amount'
                }
            ]);
            if (manualAmount.manual <= 10000 && manualAmount.manual > 0) {
                if (manualAmount.manual % 500 === 0) {
                    balance -= manualAmount.manual;
                    console.log('Please take your withdrawal money\nYour remaining balance is', balance);
                }
                else {
                    console.log('Please input a valid amount');
                }
            }
            else {
                console.log('Invalid amount!');
            }
        }
    }
    else if (options.whatToDo === 'Balance inquiry') {
        console.log('Your current balance is', balance);
    }
}
else {
    console.log(chalk.red("Invalid pin"));
}
