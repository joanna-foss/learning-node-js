const fs = require('fs'); //load in file system in order to use
const chalk = require('chalk');

const getNotes = () => {
    return "Your notes...";
}

const addNote = (title, body) => {
    //this function should load in existing notes first, parse them, add something new onto the array, and resave to file
    const notes = loadNotes();
    //check if title is already in use
    const copyNotes = notes.filter((note) => {
        return note.title === title;
    });
    //if title not in use, add note
    if (copyNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        });

        saveNotes(notes);
        console.log(chalk.green.inverse("New note added. :)"));
    } else { //if title in use, no new note added
        console.log(chalk.bgRedBright("Note title taken already. :("));
    }
}

const loadNotes = () => { //returns an array of notes
    try { //error handling
        const dataBuff = fs.readFileSync('notes.json');
        const dataBuffJSON = dataBuff.toString();
        return JSON.parse(dataBuffJSON);
    } catch (e) { //if error
        return [];
    }
}

const removeNote = (title) => {
    const notes = loadNotes();
    const noteToRemove = notes.filter((note) => {
        return note.title === title;
    });
    const newNotes = [];
    if (noteToRemove.length === 0) {
        console.log(chalk.bgRedBright("Could not find note by that title. :("));
    } else {
        notes.forEach((elem, ind, arr) => {
            if (elem.title !== noteToRemove[0].title) {
                newNotes.push(elem);
            }
        });

        saveNotes(newNotes);
        console.log(chalk.green.inverse("Note removed. :)"));
    }
}

const saveNotes = (notesArr) => {
    const notesJSON = JSON.stringify(notesArr);
    fs.writeFileSync('notes.json', notesJSON);
}

module.exports = { //this exports a single object with multiple properties containing the functions you want to use in app.js
    getNotes: getNotes(),
    addNote: addNote,
    removeNote: removeNote
}