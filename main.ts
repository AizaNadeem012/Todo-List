#! usr/bin/env node
import inquirer from "inquirer";
let todo = [];
let condition = true;
for (let i = 0; condition; i++) {
    const answer1 = await inquirer.prompt([
        {
            name: "usertodo",
            type: "input",
            message: "What you want to add in your TODO?",
        },
    ]);
    if (answer1.usertodo) {
        const answer2 = await inquirer.prompt([
            {
                name: "sure",
                type: "confirm",
                message: "Are you sure you want to add more todo?",
                default: "false",
            },
        ]);
    }
    else {
        console.log("Please enter a todo?");
    }
    todo.push(answer1.usertodo);
    console.log(todo);
}
