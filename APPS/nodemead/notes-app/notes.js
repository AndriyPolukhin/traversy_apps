/*  UTILS Functions */
const fs = require('fs');
const chalk = require('chalk');

// 1. Get all notes
const getNotes = () => {
  return 'My notes....';
};

// 2. Add a new note
const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicateNote = notes.find(note => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title,
      body
    });
    saveNotes(notes);
    console.log(chalk.green.inverse(`New note "${title}" is added`));
  } else {
    console.log(chalk.red.inverse(`Note title: "${title}" is taken`));
  }
};

// 3. Remove a note
const removeNote = title => {
  const notes = loadNotes();
  const filtered = notes.filter(note => note.title !== title);
  saveNotes(filtered);
  if (notes.length > filtered.length) {
    console.log(chalk.green.inverse(`Note "${title}" is removed`));
  } else {
    console.log(chalk.red.inverse(`No note "${title}" is found`));
  }
};

// 4. List Notes
const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.green.inverse('Your Notes:'));
  notes.forEach(note => console.log(chalk.green(note.title)));
};

// 5. Read Note
const readNote = title => {
  const notes = loadNotes();
  const note = notes.find(note => note.title === title);
  if (note) {
    console.log(chalk.green.inverse(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.red.inverse('No note found'));
  }
};

// Helper: SaveNotes
const saveNotes = notes => {
  const dataJson = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJsoN);
};

// Helper: loadNotes
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

// Export notes
module.exports = {
  getNotes,
  addNote,
  removeNote,
  listNotes,
  readNote
};
