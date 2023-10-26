import { removeNotes, saveNotes, updateNotes } from "./notes";
import { generateLastEdited, initializeEditPage } from "./view";

const dateElement = document.querySelector("#last-edited");
const titleElem = document.querySelector("#todo-title");
const bpdyElem = document.querySelector("#todo-body");
const removeTodoButton = document.querySelector("#remove-todo");
const noteId = location.hash.substring(1);

initializeEditPage();

titleElem.addEventListener("change", (event) => {
  const note = updateNotes(noteId, { title: event.target.value });
  dateElement.textContent = generateLastEdited(note.updateDate);
  saveNotes();
});

bpdyElem.addEventListener("change", (event) => {
  const note = updateNotes(noteId, { body: event.target.value });
  dateElement.textContent = generateLastEdited(note.updateDate);
  saveNotes();
});

removeTodoButton.addEventListener("click", () => {
  removeNotes(noteId);
  location.assign("index.html");
});

//new concept of same browser same page content update this work for edit page
window.addEventListener("storage", (e) => {
  if (e.key === "todos") {
    initializeEditPage(noteId);
  }
});
