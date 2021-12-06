//Goal refactor all functions
//1. if function is a method, use es6 standard function syntax
//2. otherwise, use most concise arrow function possible
//3. test your work!

const notes = require('./notes.js');
const chalk = require('chalk');
const yargs = require('yargs');

// customize yargs version 
yargs.version('1.1.0');

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
        body: {
            describe: 'the note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) { notes.addNote(argv.title, argv.body) }
});

//create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title: {
            describe: 'title to be removed',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) { notes.removeNote(argv.title) }
})

//create list command
yargs.command({
    command: 'list',
    describe: 'list the notes',
    handler() { console.log(chalk.white.inverse('listing the note(s)...')) }
})

//create read command
yargs.command({
    command: 'read',
    describe: 'read the note',
    handler() { console.log(chalk.white.inverse('reading the notes...')) }
})

yargs.parse();