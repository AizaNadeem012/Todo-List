#! usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var todo = [];
var condition = true;
for (var i = 0; condition; i++) {
    var answer1 = await inquirer_1.default.prompt([
        {
            name: "usertodo",
            type: "input",
            message: "What you want to add in your TODO?",
        },
    ]);
    if (answer1.usertodo) {
        var answer2 = await inquirer_1.default.prompt([
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
