import { NotesServices } from "./note-service.js";
import { NotesView } from "./note-view.js";

const noteService = new NotesServices();

const root = document.getElementById("main");

const view = new NotesView(root, {
  getNewNote: () => noteService.getNewNote(),
  updateNotes: (note) => noteService.updateNote(note),
});
