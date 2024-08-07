const fs = require('fs');
const chalk = require('chalk');

const getNotes =  () => {
  return 'My notes'
}

const addNote= (title, body) => {
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

const removeNote = (title) => {
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

const listNotes = () => {
  const notes = loadNotes();
  notes.forEach((note) => {
    console.log(note.title)
  })
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
}

const readNote = (title) => {
  const notes = loadNotes();
  let num=0
  notes.forEach((note) => {
    if (note.title === title) {
      console.log(note.body)
      num+=1
    }
  })
  
  num===0 ? console.log(chalk.red('No note found')) : '' 
}


const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON)
}

module.exports = {
  getNotes,
  addNote,
  removeNote,
  listNotes,
  readNote
};