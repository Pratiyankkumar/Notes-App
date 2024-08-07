
const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

// Customize yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'

    },
    body: {
      describe: 'Note Body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  }
})

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note Title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    notes.removeNote(argv.title);
  }
})

// Create read and list command
yargs.command({
  command: 'list',
  describe: 'List a note',
  handler: function () {
    console.log('Listing the note')
  }
})

yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: function () {
    console.log('reading a note')
  }
})

yargs.parse();

// add, remove, read, list,

// console.log(yargs.argv)
