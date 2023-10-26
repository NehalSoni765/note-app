import moment from "moment";
import { v4 as uuidv4 } from "uuid";

let notes = [];
const loadNotes = () => {
  const noteJson = localStorage.getItem("notes");
  if (noteJson) {
    return JSON.parse(noteJson) || [];
  }
};
const getNotes = () => notes;

const createNote = () => {
  const timestamp = moment().valueOf();
  const uuid = uuidv4();
  notes.push({
    title: "",
    body: "",
    uuid: uuid,
    createDate: timestamp,
    updateDate: timestamp,
  }) || [];
  saveNotes();
  return uuid;
};
const saveNotes = () => localStorage.setItem("notes", JSON.stringify(notes));

const removeNotes = (uuid) => {
  const noteIndex = notes.findIndex((note) => note.uuid == uuid);
  if (noteIndex > -1) {
    notes.splice(noteIndex, 1);
    saveNotes();
  }
};

const sortNotes = (sortBy) => {
  if (sortBy === "byEdited") {
    //desc
    return notes.sort(function (a, b) {
      if (a.updateDate < b.updateDate) {
        return 1;
      } else if (a.updateDate > b.updateDate) {
        return -1;
      } else {
        return 0;
      }
    });
  } else if (sortBy === "byCreated") {
    //ascen
    return notes.sort(function (a, b) {
      if (a.createDate < b.createDate) {
        return -1;
      } else if (a.createDate > b.createDate) {
        return 1;
      } else {
        return 0;
      }
    });
  } else {
    return notes.sort(function (a, b) {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1;
      } else {
        return 0;
      }
    });
  }
};
const updateNotes = (id, updates) => {
  const note = notes.find((note) => note.uuid === id);
  if (!note) return;
  if (typeof updates.title === "string") {
    note.title = updates.title;
    note.updateDate = moment().valueOf();
  }
  if (typeof updates.body === "string") {
    note.body = updates.body;
    note.updateDate = moment().valueOf();
  }
  saveNotes();
  return note;
};
notes = loadNotes();

export { getNotes, createNote, saveNotes, removeNotes, sortNotes, updateNotes };
