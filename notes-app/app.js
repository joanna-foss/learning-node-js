// const add = require('./utils.js');
// const sum = add(5, -4);
// console.log(sum);

//1. Create new file called notes.js
//2. Create getNotes function that returns "Your notes..."
//3. Export getNotes function
//4. From app.js, load in and call the function printing message to console

const notes = require('./notes.js');

//Challenge: 
//1. Install latest version of chalk
//2. Load chalk into app.js
//3. Use it to print the string "Success!" to the console in green
//4. Test your work
//Bonus: Use docs to mess with other styles. Make text bold and inversed.

const chalk = require('chalk');
const yargs = require('yargs');
// const command = process.argv[2] //this references the note entered into the console after calling the file to be executed
// const msg = notes();
// console.log(msg);
// console.log(process.argv)
// console.log(chalk.blue("Hello, World!"));
// console.log(chalk.green.inverse.bold("Success!"));

// if (command === 'add') {
//     console.log('adding note!');
// } else if (command === 'remove') {
//     console.log('removing note!')
// }

// console.log(process.argv);
// customize yargs version 
yargs.version('1.1.0');

//add, remove, read, list
//create add command
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: { //adding options to a command
        title: {
            describe: 'note title',
            demandOption: true, //must include title
            type: 'string' //title must be a string
        },
        description: {
            describe: 'the note description',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        console.log(chalk.white.inverse('added a new note with title: ' + argv.title));
        console.log(chalk.blue.inverse('the note description is: ' + argv.description));
    }
});

yargs.command({
    command: 'remove',
    describe: 'remove a note',
    handler: function(){
        console.log(chalk.white.inverse('removing the note...'));
    }
})

yargs.command({
    command: 'list',
    describe: 'list the notes',
    handler: () => {
        console.log(chalk.white.inverse('listing the note(s)...'));
    }
})

yargs.command({
    command: 'read',
    describe: 'read the note',
    handler: () => {
        console.log(chalk.white.inverse('reading the notes...'));
    }
})

yargs.parse();