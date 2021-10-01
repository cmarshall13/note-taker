const fs = require('fs');
const path = require('path');
const { nanoid } = require('nanoid');

let notesData = require('../db/db');

writeToFile = data => {
    fs.writeFileSync(path.join(__dirname, '../db/db.json'),
        JSON.stringify(data, null, 2));
    return;
};

createNote = body => {
    const newNote = body;

    //generate a random 10-char id
    let id =nanoid(10);
    newNote.id = id;

    //push the note to data array and write the file
    notesData.Data.push(newNote);
    writeToFile(notesData);
};