import moment from "moment";
import { getNotes, sortNotes } from "./notes";
import { getFilters } from "./filters";

const renderNotes = () => {
  const notesEl = document.querySelector("#notes");
  const filters = getFilters();
  const notes = sortNotes(filters.sortBy);
  notesEl.innerHTML = "";
  const filterNotes = notes?.filter((val) =>
    val.title.toLowerCase().includes(filters.searchText.toLowerCase())
  );
  notesEl.innerHTML = "";
  if (filterNotes.length > 0) {
    filterNotes.forEach((val) => notesEl.appendChild(generateTodoDOM(val)));
  } else {
    const emptyMessage = document.createElement("p");
    emptyMessage.textContent = "No notes to show";
    emptyMessage.classList.add("empty-message");
    notesEl.appendChild(emptyMessage);
  }
};

const generateTodoDOM = (val) => {
  const anchorElemt = document.createElement("a");
  const todoEl = document.createElement("p");
  const statusElem = document.createElement("p");

  anchorElemt.setAttribute("href", `edit.html#${val.uuid}`);
  anchorElemt.classList.add("list-item");

  todoEl.textContent = val.title;
  todoEl.classList.add("list-item__title");
  anchorElemt.appendChild(todoEl);

  statusElem.textContent = generateLastEdited(val.updateDate);
  statusElem.classList.add("list-item__subtitle");
  anchorElemt.appendChild(statusElem);

  return anchorElemt;
};

const generateLastEdited = (timestamp) => {
  return `Last edited ${moment(timestamp).fromNow()} `;
};

const initializeEditPage = (id) => {
  const titleElem = document.querySelector("#todo-title");
  const bpdyElem = document.querySelector("#todo-body");
  const dateElement = document.querySelector("#last-edited");
  const notes = getNotes();
  const noteId = location.hash.substring(1);
  const note = notes.find((todo) => todo.uuid === noteId);
  if (!note) {
    location.assign("index.html");
  }
  titleElem.value = note.title;
  bpdyElem.value = note.body;
  dateElement.textContent = generateLastEdited(note.updateDate);
};

export { generateLastEdited, generateTodoDOM, renderNotes, initializeEditPage };
