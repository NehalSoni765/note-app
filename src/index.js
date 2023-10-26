import { createNote } from "./notes";
import { setFilters } from "./filters";
import { renderNotes } from "./view";

renderNotes();

document.querySelector("#create-note").addEventListener("click", function () {
  const uuid = createNote();
  renderNotes();
  location.assign(`edit.html#${uuid}`);
});

document.querySelector("#search-text").addEventListener("input", function (e) {
  setFilters({
    searchText: e.target.value,
  });
  renderNotes();
});
document.querySelector("#filter-by").addEventListener("change", function (e) {
  setFilters({
    sortBy: e.target.value,
  });
  renderNotes();
});

window.addEventListener("storage", (e) => {
  if (e.key === "notes") {
    renderNotes();
  }
});
