const validator = require('validator');
const chalk = require('chalk');
const http = require('http');
const yargs = require('yargs');
// console.log(notes.removeNote);
const notes = require('./notes.js');
// console.log(process.argv);
//customize yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'title of the note',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'body of the note',
      demandOption: true,
      type: 'string',
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'title of the note',
      demandOption: true,
      type: 'string',
    },
  },
  handler: function (argv) {
    notes.removeNote(argv.title);
  },
});

// Create "List" commands
yargs.command({
  command: 'list',
  describe: 'List notes',
  handler: function () {
    notes.listNotes();
  },
});

// Create "Read" commands
yargs.command({
  command: 'read',
  describe: 'Listing notes',
  handler: function () {
    console.log('Reading notes');
  },
});

yargs.parse();
