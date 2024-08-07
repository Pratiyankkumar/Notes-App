const fs = require('fs');
const chalk = require('chalk');

const getNotes = function () {
  return 'My notes'
}

const addNote= function (title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => {
    return note.title === title
  })

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body
    })
    saveNotes(notes)
    console.log('New note added')
  } else {
    console.log('Note title taken')
  }
}

const removeNote =  function (title) {
  const notes = loadNotes();
  let newNotesArray = notes.filter((note) => {
    if (note.title === title) {
      return false;
    } else {
      return true;
    }
  });
  if (notes.length === newNotesArray.length) {
    console.log(chalk.red('No note found'));
  } else {
    console.log(chalk.green('Note removed'));
  }


  saveNotes(newNotesArray);
}

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
}

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON)
}

module.exports = {
  getNotes,
  addNote,
  removeNote
};