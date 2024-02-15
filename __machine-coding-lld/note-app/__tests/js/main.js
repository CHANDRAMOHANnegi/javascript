import NotesView from "./notes-view.js";

const app = document.getElementById("app");
const view = new NotesView(app, {
  onNoteAdd() {},
  onNoteEdit() {},
  onNoteSelect() {},
  onNoteDelete() {},
});
