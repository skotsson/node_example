const fs = require('fs');

const getNotes = function () {
  return 'Your notes...';
};

const addNote = function (title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => note.title === title);
  if (duplicateNotes.length === 0) {
    console.log('reading notes', notes);
    notes.push({
      title: title,
      body: body,
    });
    console.log('writing notes:', notes);
    saveNotes(notes);
  } else {
    console.log('Duplicate note! Change title.');
  }
};

const saveNotes = function (notes) {
  try {
    const dataJSON = JSON.stringify(notes);
    console.log(dataJSON);
    fs.writeFileSync('notes.json', dataJSON);
  } catch (e) {
    console.log(e);
  }
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const removeNote = function (title) {
  const notes = loadNotes();
  const newNotes = notes.filter((note) => note.title !== title);
  saveNotes(newNotes);
};

const listNotes = function () {
  const notes = loadNotes();
  console.log(notes);
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
};
